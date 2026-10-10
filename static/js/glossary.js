(function () {
  var main = document.querySelector("main");
  var table = main && main.querySelector("table.glossary");
  if (!table) return;

  var entries = [];
  Array.prototype.forEach.call(table.querySelectorAll("tbody th[id]"), function (cell) {
    var term = cell.textContent.replace(/\s+/g, " ").trim();
    if (!term) return;
    var forms = [term, term.replace(/-/g, " "), term.replace(/ /g, "-")];
    if (cell.id === "glossary-service-under-control") forms.push("SuC");
    var seen = {};
    forms = forms.filter(function (form) {
      var key = form.toLowerCase();
      if (!form || seen[key]) return false;
      seen[key] = true;
      return true;
    });
    entries.push({ id: cell.id, forms: forms });
  });

  var byForm = {};
  var parts = [];
  entries.forEach(function (entry) {
    entry.forms.forEach(function (form) {
      byForm[form.toLowerCase()] = entry.id;
      var body = form.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      var plural = /s$/i.test(form) || form === "SuC" ? "" : "s?";
      parts.push({ source: body + plural, length: form.length });
    });
  });
  parts.sort(function (a, b) { return b.length - a.length; });
  var pattern = new RegExp(
    "(?<![A-Za-z0-9-])(?:" + parts.map(function (part) { return part.source; }).join("|") + ")(?![A-Za-z0-9-])",
    "gi"
  );

  function idFor(match) {
    var lower = match.toLowerCase();
    if (byForm[lower]) return byForm[lower];
    if (/s$/i.test(lower) && byForm[lower.slice(0, -1)]) return byForm[lower.slice(0, -1)];
    return "";
  }

  function skip(node) {
    var parent = node.parentElement;
    if (!parent) return true;
    if (parent.closest("a, code, pre, script, style, button, textarea, svg")) return true;
    var head = parent.closest("table.glossary tbody th");
    return !!head;
  }

  var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return skip(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  var nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(function (node) {
    var text = node.nodeValue;
    pattern.lastIndex = 0;
    var cursor = 0;
    var fragment = document.createDocumentFragment();
    var found = false;
    var match;
    while ((match = pattern.exec(text))) {
      var id = idFor(match[0]);
      if (!id) continue;
      found = true;
      if (match.index > cursor) fragment.appendChild(document.createTextNode(text.slice(cursor, match.index)));
      var link = document.createElement("a");
      link.className = "glossary-link";
      link.href = "#" + id;
      link.textContent = match[0];
      fragment.appendChild(link);
      cursor = match.index + match[0].length;
    }
    if (!found) return;
    if (cursor < text.length) fragment.appendChild(document.createTextNode(text.slice(cursor)));
    node.parentNode.replaceChild(fragment, node);
  });

  function highlight(id) {
    var previous = table.querySelector("tbody tr.is-current");
    if (previous) {
      previous.classList.remove("is-current");
      previous.removeAttribute("aria-current");
    }
    var cell = id ? document.getElementById(id) : null;
    var row = cell && table.contains(cell) ? cell.closest("tr") : null;
    if (!row) return;
    row.classList.add("is-current");
    row.setAttribute("aria-current", "true");
  }

  Array.prototype.forEach.call(table.querySelectorAll("tbody tr"), function (row) {
    var cell = row.querySelector("th[id]");
    if (!cell) return;
    row.tabIndex = 0;
    row.addEventListener("click", function (event) {
      if (event.target.closest("a")) return;
      highlight(cell.id);
      var next = "#" + cell.id;
      if (location.hash !== next) history.pushState(null, "", next);
    });
    row.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      highlight(cell.id);
      var next = "#" + cell.id;
      if (location.hash !== next) history.pushState(null, "", next);
    });
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href^='#glossary-']");
    if (!link) return;
    highlight(link.getAttribute("href").slice(1));
  });

  window.addEventListener("popstate", function () {
    highlight(location.hash.replace(/^#/, ""));
  });

  highlight(location.hash.replace(/^#/, ""));
})();
