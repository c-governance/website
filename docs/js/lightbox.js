(function () {
  var triggers = document.querySelectorAll(".zoom-trigger");
  if (!triggers.length) return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Full size image");
  dialog.innerHTML =
    '<div class="lightbox-bar">' +
      '<a class="lightbox-download" href="#" download>Download</a>' +
      '<button type="button" class="lightbox-close" aria-label="Close full size image">Close</button>' +
    "</div>" +
    '<img class="lightbox-image" alt="">' +
    '<p class="lightbox-caption" hidden></p>';
  document.body.appendChild(dialog);

  var image = dialog.querySelector(".lightbox-image");
  var caption = dialog.querySelector(".lightbox-caption");
  var download = dialog.querySelector(".lightbox-download");
  var close = dialog.querySelector(".lightbox-close");
  var active = null;

  function filenameFrom(url) {
    try {
      var path = new URL(url, window.location.href).pathname;
      var parts = path.split("/");
      return parts[parts.length - 1] || "image";
    } catch (e) {
      return "image";
    }
  }

  function open(trigger) {
    var img = trigger.querySelector("img");
    if (!img) return;
    active = trigger;
    var src = img.currentSrc || img.getAttribute("src");
    var alt = img.getAttribute("alt") || "";
    var href = trigger.getAttribute("data-download") || src;
    image.setAttribute("src", src);
    image.setAttribute("alt", alt);
    if (alt) {
      caption.textContent = alt;
      caption.hidden = false;
    } else {
      caption.textContent = "";
      caption.hidden = true;
    }
    download.setAttribute("href", href);
    download.setAttribute("download", filenameFrom(href));
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    close.focus();
  }

  function dismiss() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    if (active) {
      active.focus();
      active = null;
    }
  }

  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener("click", function () {
      open(trigger);
    });
  });

  close.addEventListener("click", dismiss);

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dismiss();
  });

  dialog.addEventListener("cancel", function (event) {
    event.preventDefault();
    dismiss();
  });

  document.addEventListener("themechange", function () {
    if (!active || !dialog.open) return;
    var img = active.querySelector("img");
    if (!img) return;
    image.setAttribute("src", img.currentSrc || img.getAttribute("src"));
  });
})();
