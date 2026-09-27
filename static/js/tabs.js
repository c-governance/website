(function () {
  var main = document.querySelector("main");
  if (!main) return;

  cardify(document.getElementById("rules"));
  cardify(document.getElementById("two-aspects"));

  var headings = Array.prototype.slice.call(main.querySelectorAll("h2"));
  if (!headings.length) return;

  var tablist = document.createElement("div");
  tablist.className = "tablist";
  tablist.setAttribute("role", "tablist");
  tablist.setAttribute("aria-label", "Sections");

  var panels = headings.map(function (heading) {
    var id = heading.id || "section";
    var panel = document.createElement("section");
    panel.id = id;
    panel.className = "panel";
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "tab-" + id);
    panel.hidden = true;
    heading.removeAttribute("id");

    var node = heading;
    while (node) {
      var next = node.nextSibling;
      panel.appendChild(node);
      if (!next || (next.nodeType === 1 && next.tagName === "H2")) break;
      node = next;
    }

    var tab = document.createElement("button");
    tab.type = "button";
    tab.className = "tab";
    tab.id = "tab-" + id;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", id);
    tab.setAttribute("aria-selected", "false");
    tab.tabIndex = -1;
    tab.textContent = heading.textContent;
    tablist.appendChild(tab);
    return { id: id, tab: tab, panel: panel };
  });

  var bar = document.createElement("nav");
  bar.className = "tabbar";
  bar.appendChild(tablist);

  var header = main.querySelector(".site-header");
  if (header && header.nextSibling) main.insertBefore(bar, header.nextSibling);
  else main.insertBefore(bar, main.firstChild);
  panels.forEach(function (item) { main.appendChild(item.panel); });

  var current = "";

  function select(id, focusTab) {
    var before = bar.getBoundingClientRect().top;
    var match = panels.filter(function (item) { return item.id === id; })[0] || panels[0];
    if (!match || match.id === current) {
      if (focusTab && match) match.tab.focus();
      return;
    }
    current = match.id;
    panels.forEach(function (item) {
      var on = item === match;
      item.tab.setAttribute("aria-selected", on ? "true" : "false");
      item.tab.tabIndex = on ? 0 : -1;
      item.panel.hidden = !on;
    });
    if (focusTab) match.tab.focus();
    var after = bar.getBoundingClientRect().top;
    if (after !== before) window.scrollBy(0, after - before);
  }

  function syncHash(id) {
    var next = "#" + id;
    if (location.hash === next) return;
    history.pushState(null, "", next);
  }

  tablist.addEventListener("click", function (event) {
    var tab = event.target.closest("[role='tab']");
    if (!tab) return;
    var id = tab.getAttribute("aria-controls");
    select(id, false);
    syncHash(id);
  });

  tablist.addEventListener("keydown", function (event) {
    var keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (keys.indexOf(event.key) === -1) return;
    event.preventDefault();
    var index = panels.findIndex(function (item) {
      return item.tab.getAttribute("aria-selected") === "true";
    });
    if (event.key === "Home") index = 0;
    else if (event.key === "End") index = panels.length - 1;
    else if (event.key === "ArrowRight") index = (index + 1) % panels.length;
    else index = (index - 1 + panels.length) % panels.length;
    select(panels[index].id, true);
    syncHash(panels[index].id);
  });

  window.addEventListener("popstate", function () {
    select(location.hash.replace(/^#/, ""), false);
  });

  select(location.hash.replace("#", "") || panels[0].id, false);

  function cardify(heading) {
    if (!heading) return;
    var node = heading.nextElementSibling;
    while (node && node.tagName !== "DL") {
      if (node.tagName === "H2" || node.tagName === "H3") return;
      node = node.nextElementSibling;
    }
    if (!node) return;
    var children = Array.prototype.slice.call(node.children);
    for (var i = 0; i < children.length; i += 2) {
      var card = document.createElement("div");
      card.className = "card";
      card.appendChild(children[i]);
      if (children[i + 1]) card.appendChild(children[i + 1]);
      node.appendChild(card);
    }
    node.classList.add("cards");
  }
})();
