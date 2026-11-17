(function () {
  var steps = [
    {
      file: "cycle-01.mp4",
      alt: "Both populators poll and write 0 or 1. Directory writes 1, so the pair becomes (1, 0).",
      marks: [
        { t: 0, state: "00", actors: ["directory", "resource"], edge: "e-dir-on" },
        { t: 3.05, state: "10", actors: ["directory"], edge: "" }
      ]
    },
    {
      file: "cycle-02.mp4",
      alt: "Both generators receive an empty shoulder tap. Only add() reacts, because y is still 0.",
      marks: [
        { t: 0, state: "10", actors: ["add"], quiet: ["remove"], edge: "e-add" }
      ]
    },
    {
      file: "cycle-03.mp4",
      alt: "add() is created in the factory, placed on the queue, and thrown at the service.",
      marks: [
        { t: 0, state: "10", actors: ["add"], edge: "e-add" }
      ]
    },
    {
      file: "cycle-04.mp4",
      alt: "add() confirms itself by writing 1 back into the database. The pair becomes (1, 1).",
      marks: [
        { t: 0, state: "10", actors: ["add"], edge: "e-add" },
        { t: 1.25, state: "11", actors: ["add"], edge: "" }
      ]
    },
    {
      file: "cycle-05.mp4",
      alt: "The populators keep polling and both generators keep reading. r and y match, so neither throws.",
      marks: [
        { t: 0, state: "11", actors: ["directory", "resource"], edge: "" }
      ]
    },
    {
      file: "cycle-06.mp4",
      alt: "Directory writes 0. Both generators are tapped. Only remove() reacts, because y is still 1.",
      marks: [
        { t: 0, state: "11", actors: ["directory"], edge: "e-dir-off" },
        { t: 0.75, state: "01", actors: ["directory", "remove"], quiet: ["add"], edge: "e-remove" }
      ]
    },
    {
      file: "cycle-07.mp4",
      alt: "remove() is created in the factory, placed on the queue, and thrown at the service.",
      marks: [
        { t: 0, state: "01", actors: ["remove"], edge: "e-remove" }
      ]
    },
    {
      file: "cycle-08.mp4",
      alt: "remove() confirms itself by writing 0 back into the database. The pair becomes (0, 0).",
      marks: [
        { t: 0, state: "01", actors: ["remove"], edge: "e-remove" },
        { t: 1.25, state: "00", actors: ["remove"], edge: "" }
      ]
    },
    {
      file: "cycle-09.mp4",
      alt: "Polling and reading continue. r and y match again, so neither generator throws.",
      marks: [
        { t: 0, state: "00", actors: ["directory", "resource"], edge: "" }
      ]
    }
  ];

  function mount(root) {
    if (root.getAttribute("data-ready") === "true") return;
    root.setAttribute("data-ready", "true");

    var base = root.getAttribute("data-base") || "/examples/sdk-callback-queue/";
    var index = 0;
    var mode = root.getAttribute("data-autostart") || "now";
    var autoplay = mode === "now";
    var repeat = false;
    var userHold = false;
    var holdTimer = null;
    var stage = root.querySelector("video");
    var player = root.querySelector(".player");
    var bar = root.querySelector(".track > span");
    var pauseBtn = root.querySelector("[data-control='pause']");
    var replay = root.querySelector("[data-control='replay']");
    var count = root.querySelector(".count");
    var dots = root.querySelector(".dots");

    steps.forEach(function (_step, stepIndex) {
      var item = document.createElement("li");
      var button = document.createElement("button");
      button.type = "button";
      button.className = "ghost";
      button.textContent = String(stepIndex + 1);
      button.setAttribute("aria-label", "Cycle " + (stepIndex + 1));
      button.addEventListener("click", function () { show(stepIndex); });
      item.appendChild(button);
      dots.appendChild(item);
    });

    function paintProgress() {
      var duration = stage.duration;
      var ratio = duration ? Math.min(1, stage.currentTime / duration) : 0;
      bar.style.transform = "scaleX(" + ratio + ")";
      syncMachine();
    }

    function syncMachine() {
      var marks = steps[index].marks;
      var time = stage.currentTime || 0;
      var mark = marks[0];
      marks.forEach(function (candidate) {
        if (time + 0.04 >= candidate.t) mark = candidate;
      });
      ["00", "10", "11", "01"].forEach(function (id) {
        root.querySelector("[data-state='" + id + "']").classList.toggle("is-on", id === mark.state);
      });
      root.querySelectorAll("[data-edge]").forEach(function (part) {
        var on = part.getAttribute("data-edge") === mark.edge;
        part.classList.toggle("is-on", on);
        if (part.tagName === "path") {
          part.setAttribute("marker-end", on ? "url(#cp-m-on)" : part.getAttribute("data-marker"));
        }
      });
      var quiet = mark.quiet || [];
      root.querySelectorAll(".actors li").forEach(function (item) {
        var name = item.getAttribute("data-actor");
        item.classList.toggle("is-on", mark.actors.indexOf(name) !== -1);
        item.classList.toggle("is-quiet", quiet.indexOf(name) !== -1);
      });
      root.querySelector(".machine-state").textContent =
        "q = (" + mark.state[0] + ", " + mark.state[1] + ")";
    }

    function clearHold() {
      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
    }

    function clipFile(step) {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      return dark ? step.file.replace(".mp4", "-dark.mp4") : step.file;
    }

    function show(nextIndex) {
      clearHold();
      index = (nextIndex + steps.length) % steps.length;
      var step = steps[index];
      player.classList.remove("is-held");
      bar.style.transform = "scaleX(0)";
      stage.setAttribute("aria-label", step.alt);
      stage.src = base + clipFile(step);
      if (autoplay) stage.play();
      syncMachine();
      count.textContent = (index + 1) + " of " + steps.length;
      Array.prototype.forEach.call(dots.querySelectorAll("button"), function (button, stepIndex) {
        if (stepIndex === index) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
      });
    }

    function setPaused(paused) {
      autoplay = !paused;
      pauseBtn.textContent = paused ? "Play" : "Pause";
      pauseBtn.setAttribute("aria-pressed", paused ? "true" : "false");
      if (paused) {
        clearHold();
        stage.pause();
        player.classList.add("is-held");
      } else if (stage.ended || !stage.getAttribute("src")) {
        show(stage.ended && !repeat ? index + 1 : index);
      } else {
        player.classList.remove("is-held");
        stage.play();
      }
    }

    stage.addEventListener("timeupdate", paintProgress);
    stage.addEventListener("ended", function () {
      bar.style.transform = "scaleX(1)";
      player.classList.add("is-held");
      if (!autoplay) return;
      clearHold();
      holdTimer = setTimeout(function () { show(repeat ? index : index + 1); }, 1400);
    });

    pauseBtn.addEventListener("click", function () {
      userHold = autoplay;
      setPaused(autoplay);
    });
    root.querySelector("[data-control='back']").addEventListener("click", function () { show(index - 1); });
    root.querySelector("[data-control='next']").addEventListener("click", function () { show(index + 1); });
    replay.addEventListener("click", function () {
      repeat = !repeat;
      replay.setAttribute("aria-pressed", repeat ? "true" : "false");
      if (!repeat) return;
      userHold = false;
      autoplay = true;
      pauseBtn.textContent = "Pause";
      pauseBtn.setAttribute("aria-pressed", "false");
      show(index);
    });
    root.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") show(index + 1);
      if (event.key === "ArrowLeft") show(index - 1);
      if (event.key === " " && event.target.tagName !== "BUTTON") {
        event.preventDefault();
        userHold = autoplay;
        setPaused(autoplay);
      }
    });

    document.addEventListener("themechange", function () {
      var step = steps[index];
      var next = base + clipFile(step);
      var name = next.split("/").pop();
      if (stage.currentSrc && stage.currentSrc.split("/").pop() === name) return;
      var time = stage.currentTime || 0;
      var playing = !stage.paused;
      stage.src = next;
      stage.addEventListener("loadeddata", function onLoad() {
        stage.removeEventListener("loadeddata", onLoad);
        if (time) stage.currentTime = time;
        if (playing) stage.play();
      });
    });

    show(0);
    if (mode === "overlay") {
      var dialog = root.closest("dialog");
      dialog.addEventListener("toggle", function () {
        if (dialog.open) {
          userHold = false;
          if (!autoplay) setPaused(false);
        } else if (autoplay) {
          setPaused(true);
        }
      });
    }
  }

  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll(".cycle-player"), mount);
    var dialog = document.getElementById("how-it-works");
    if (!dialog) return;
    document.addEventListener("click", function (event) {
      var opener = event.target.closest("[data-open-demo], a[href='#how-it-works']");
      if (!opener) return;
      event.preventDefault();
      if (!dialog.open) dialog.showModal();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
      if (event.target.closest("a[href='#whitepaper']")) {
        setTimeout(function () { dialog.close(); }, 0);
      }
    });
    var closer = dialog.querySelector("[data-close-demo]");
    if (closer) closer.addEventListener("click", function () { dialog.close(); });
    if (location.hash === "#how-it-works") dialog.showModal();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
