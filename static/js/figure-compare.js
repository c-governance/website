(function () {
  function theme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function apply(root, value) {
    var img = root.querySelector("img");
    var zoom = root.querySelector(".zoom-trigger");
    if (!img) return;
    var index = value === "1" ? "1" : "0";
    var example = index === "1" ? "elevator" : "membership";
    var light = img.getAttribute("data-compare-light-" + index);
    var dark = img.getAttribute("data-compare-dark-" + index);
    var src = theme() === "dark" ? dark : light;
    if (light) img.setAttribute("data-src-light", light);
    if (dark) img.setAttribute("data-src-dark", dark);
    if (src) img.setAttribute("src", src);
    var alt = img.getAttribute("data-alt-" + index) || "";
    img.setAttribute("alt", alt);
    if (zoom) {
      zoom.setAttribute("data-download", src || light || "");
      zoom.setAttribute("aria-label", alt ? "View full size: " + alt : "View full size image");
    }
    Array.prototype.forEach.call(root.querySelectorAll(".figure-compare-name"), function (name) {
      name.setAttribute("aria-pressed", name.getAttribute("data-example-name") === example ? "true" : "false");
    });
    root.setAttribute("data-example", example);
  }

  Array.prototype.forEach.call(document.querySelectorAll(".figure-compare"), function (root) {
    Array.prototype.forEach.call(root.querySelectorAll(".figure-compare-name"), function (name) {
      name.addEventListener("click", function () {
        apply(root, name.getAttribute("data-example-name") === "elevator" ? "1" : "0");
      });
    });
    document.addEventListener("themechange", function () {
      apply(root, root.getAttribute("data-example") === "elevator" ? "1" : "0");
    });
    apply(root, "0");
    root.classList.add("is-ready");
  });
})();
