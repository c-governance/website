(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  var meta = document.querySelector('meta[name="theme-color"]');

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1c2836" : "#f4f6f8");
    if (button) {
      var dark = theme === "dark";
      button.setAttribute("aria-pressed", dark ? "true" : "false");
      button.textContent = dark ? "Light" : "Dark";
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }
    Array.prototype.forEach.call(document.querySelectorAll("img[data-src-light]"), function (img) {
      var next = theme === "dark" ? img.getAttribute("data-src-dark") : img.getAttribute("data-src-light");
      if (next && img.getAttribute("src") !== next) img.setAttribute("src", next);
    });
  }

  function choose(theme) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
    apply(theme);
  }

  if (button) {
    button.addEventListener("click", function () {
      choose(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  var buffer = "";
  document.addEventListener("keydown", function (event) {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key.length !== 1) return;
    var target = event.target;
    if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
    buffer = (buffer + event.key.toLowerCase()).slice(-5);
    if (buffer.slice(-5) === "light") choose("light");
    else if (buffer.slice(-4) === "dark") choose("dark");
  });

  apply(root.getAttribute("data-theme") || "light");
})();
