(function () {
  var main = document.querySelector("main");
  if (!main) return;

  Array.prototype.forEach.call(main.querySelectorAll("dl"), cardify);

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
  var profiles = main.querySelector(".profiles");
  if (profiles) bar.appendChild(profiles);

  var header = main.querySelector(".site-header");
  if (header) {
    var last = header;
    while (last.nextSibling) last = last.nextSibling;
    last.after(bar);
  } else {
    main.insertBefore(bar, main.firstChild);
  }
  panels.forEach(function (item) { main.appendChild(item.panel); });

  var current = "";

  function resolve(id) {
    var match = panels.filter(function (item) { return item.id === id; })[0];
    if (match) return { item: match, anchor: null };
    var el = id ? document.getElementById(id) : null;
    if (!el) return null;
    match = panels.filter(function (item) { return item.panel.contains(el); })[0];
    if (!match) return null;
    return { item: match, anchor: el };
  }

  function select(id, focusTab) {
    var before = bar.getBoundingClientRect().top;
    var resolved = resolve(id) || { item: panels[0], anchor: null };
    var match = resolved.item;
    if (match.id !== current) {
      current = match.id;
      panels.forEach(function (item) {
        var on = item === match;
        item.tab.setAttribute("aria-selected", on ? "true" : "false");
        item.tab.tabIndex = on ? 0 : -1;
        item.panel.hidden = !on;
      });
      var after = bar.getBoundingClientRect().top;
      if (after !== before) window.scrollBy(0, after - before);
    }
    if (focusTab) match.tab.focus();
    if (resolved.anchor) resolved.anchor.scrollIntoView();
  }

  function syncHash(id) {
    var next = "#" + id;
    if (location.hash === next) return;
    history.pushState(null, "", next);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href^='#']");
    if (!link) return;
    var id = link.getAttribute("href").replace(/^#/, "");
    if (!resolve(id)) return;
    event.preventDefault();
    select(id, false);
    syncHash(id);
  });

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

  function cardify(list) {
    if (!list) return;
    var children = Array.prototype.slice.call(list.children);
    for (var i = 0; i < children.length; i += 2) {
      var card = document.createElement("div");
      card.className = "card";
      card.appendChild(children[i]);
      if (children[i + 1]) card.appendChild(children[i + 1]);
      list.appendChild(card);
    }
    list.classList.add("cards");
  }
})();
