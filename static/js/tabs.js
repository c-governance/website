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

  dressEquations();
  dressMath();
  markReferences();
  citePreviews();

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
    if (resolved.anchor) {
      var target = resolved.anchor.closest("li") || resolved.anchor;
      target.scrollIntoView();
    }
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

  function dressMath() {
    var subscripts = {
      "\u2080": "0", "\u2081": "1", "\u2082": "2", "\u2083": "3", "\u2084": "4",
      "\u2085": "5", "\u2086": "6", "\u2087": "7", "\u2088": "8", "\u2089": "9",
      "\u2098": "m"
    };
    var codes = document.querySelectorAll("#whitepaper code");
    Array.prototype.forEach.call(codes, function (code) {
      var text = code.textContent;
      if (!/[\u0394\u2080-\u209C]/.test(text)) return;
      var fragment = document.createDocumentFragment();
      var buf = "";
      function flush() {
        if (!buf) return;
        fragment.appendChild(document.createTextNode(buf));
        buf = "";
      }
      for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (subscripts[ch]) {
          flush();
          var sub = document.createElement("sub");
          sub.textContent = subscripts[ch];
          fragment.appendChild(sub);
        } else if (ch === "\u0394") {
          flush();
          var op = document.createElement("span");
          op.className = "op";
          op.textContent = ch;
          fragment.appendChild(op);
        } else {
          buf += ch;
        }
      }
      flush();
      code.textContent = "";
      code.appendChild(fragment);
    });
  }

  function dressEquations() {
    var paras = document.querySelectorAll("#whitepaper p");
    Array.prototype.forEach.call(paras, function (paragraph) {
      if (paragraph.children.length !== 1 || paragraph.children[0].tagName !== "CODE") return;
      var code = paragraph.children[0];
      var match = code.textContent.match(/^(.*)\s+(\(\d+(?:\.\d+)?\))\s*$/);
      if (!match) return;
      code.textContent = match[1].trim();
      var number = document.createElement("span");
      number.className = "eq-no";
      number.textContent = match[2];
      paragraph.classList.add("eq");
      paragraph.appendChild(number);
    });
  }

  function citePreviews() {
    var links = document.querySelectorAll("#whitepaper a[href^='#ref-']");
    if (!links.length) return;

    var tip = document.createElement("div");
    tip.className = "cite-preview";
    tip.setAttribute("role", "tooltip");
    tip.hidden = true;
    var number = document.createElement("span");
    number.className = "cite-preview-no";
    var body = document.createElement("div");
    body.className = "cite-preview-body";
    tip.appendChild(number);
    tip.appendChild(body);
    document.body.appendChild(tip);

    var current = null;
    var hideTimer = 0;

    function show(link) {
      var id = link.getAttribute("href").replace(/^#/, "");
      var target = document.getElementById(id);
      var item = target && (target.closest("li") || target);
      if (!item) return;
      clearTimeout(hideTimer);
      current = link;
      number.textContent = link.textContent.trim();
      body.replaceChildren();
      Array.prototype.forEach.call(item.childNodes, function (node) {
        if (node.nodeType === 1 && node.tagName === "SPAN" && !node.textContent.trim()) return;
        body.appendChild(node.cloneNode(true));
      });
      tip.hidden = false;
      place(link);
    }

    function place(link) {
      var rect = link.getBoundingClientRect();
      var gap = 12;
      var width = tip.offsetWidth;
      var height = tip.offsetHeight;
      var left = rect.left + rect.width / 2 - width / 2;
      left = Math.max(12, Math.min(left, window.innerWidth - width - 12));
      var top = rect.top - height - gap;
      if (top < 68) top = rect.bottom + gap;
      tip.style.left = left + "px";
      tip.style.top = top + "px";
    }

    function hide() {
      clearTimeout(hideTimer);
      tip.hidden = true;
      current = null;
    }

    function scheduleHide() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(hide, 120);
    }

    Array.prototype.forEach.call(links, function (link) {
      link.classList.add("cite");
      link.addEventListener("mouseenter", function () { show(link); });
      link.addEventListener("focus", function () { show(link); });
      link.addEventListener("mouseleave", scheduleHide);
      link.addEventListener("blur", scheduleHide);
      link.addEventListener("click", hide);
    });
    tip.addEventListener("mouseenter", function () { clearTimeout(hideTimer); });
    tip.addEventListener("mouseleave", scheduleHide);
    window.addEventListener("scroll", function () {
      if (!tip.hidden && current) place(current);
    }, true);
    window.addEventListener("resize", function () {
      if (!tip.hidden && current) place(current);
    });
  }

  function markReferences() {
    var anchors = document.querySelectorAll("#whitepaper #references + ol span[id^='ref-']");
    Array.prototype.forEach.call(anchors, function (anchor) {
      var item = anchor.closest("li");
      if (!item) return;
      item.id = anchor.id;
      anchor.removeAttribute("id");
    });
    var pdf = document.querySelector("#whitepaper a[href$='.pdf']");
    if (pdf) pdf.setAttribute("download", "continuous-governance.pdf");
  }

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
