/* KORRIGMER – Information
   Live-Beispiel (gerechnet wie in KORRIGMER – Oberstufe), Einblendungen, Video. */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Rechenregeln aus KORRIGMER – Oberstufe ---------- */
  var PCTS = [0, 20, 27, 33, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

  function feedbackTier(p) {
    if (p >= 85) return { text: "Diese Erwartung wurde innerhalb des sehr guten Bereichs erfüllt (max. minimale Abzüge)", cls: "fb-great" };
    if (p >= 70) return { text: "Diese Erwartung wurde in einem guten Maße erfüllt.", cls: "fb-good" };
    if (p >= 55) return { text: "Diese Erwartung wurde im befriedigenden Maße erfüllt. Es sind einige Lücken erkennbar.", cls: "fb-ok" };
    if (p >= 45) return { text: "Diese Erwartung wurde im ausreichenden Bereich erfüllt. Es sind deutliche Lücken erkennbar.", cls: "fb-low" };
    return { text: "Diese Erwartung wurde leider nicht im Bereich einer bestandenen Leistung erfüllt. Deutliche Lücken sind erkennbar.", cls: "fb-fail" };
  }

  function pointsFromPercent(p) {
    var tab = [[95, 15], [90, 14], [85, 13], [80, 12], [75, 11], [70, 10], [65, 9], [60, 8], [55, 7], [50, 6], [45, 5], [40, 4], [33, 3], [27, 2], [20, 1]];
    for (var i = 0; i < tab.length; i++) { if (p >= tab[i][0]) return tab[i][1]; }
    return 0;
  }

  function fmtFI(x) { return (Math.round((Number(x) || 0) * 100) / 100).toFixed(2).replace(".", ","); }

  /* ---------- Beispielklausur (fiktiv) ---------- */
  var FIXED = 20 + 24;          /* Aufgabe 1 und 2, bereits gerundet */
  var TOTAL_BE = 25 + 35 + 40;
  var BE3 = 40;
  var WEIGHTS = [40, 35, 25];
  var state = { erf: [70, 55, 80], errors: 14, words: 1180 };

  function compute() {
    var raw = 0;
    for (var i = 0; i < WEIGHTS.length; i++) { raw += (BE3 * WEIGHTS[i] / 100) * (state.erf[i] / 100); }
    var a3 = Math.round(raw);
    var total = FIXED + a3;
    var pct = Math.round(total / TOTAL_BE * 100);
    var before = pointsFromPercent(pct);
    var fi = state.words > 0 ? state.errors * 100 / state.words : 0;
    var deduction = fi >= 6 ? 2 : (fi >= 3 ? 1 : 0);
    return { a3: a3, total: total, pct: pct, fi: fi, deduction: deduction, np: Math.max(0, before - deduction) };
  }

  var selects = document.querySelectorAll("select[data-erf]");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setText(el, value) {
    var v = String(value);
    if (el.textContent === v) return;
    el.textContent = v;
    if (reduceMotion || !el.closest("[data-ui]")) return;
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
  }

  function render() {
    var r = compute();
    var outs = {
      a3: r.a3, total: r.total, pct: r.pct, np: r.np, fi: fmtFI(r.fi),
      abzug: r.deduction + " " + (r.deduction === 1 ? "Punkt" : "Punkte")
    };
    document.querySelectorAll("[data-out]").forEach(function (el) { setText(el, outs[el.getAttribute("data-out")]); });
    document.querySelectorAll("[data-ein]").forEach(function (el) {
      var tier = feedbackTier(state.erf[Number(el.getAttribute("data-ein"))]);
      el.textContent = tier.text;
      if (el.classList.contains("ui-ein")) {
        el.classList.remove("fb-great", "fb-good", "fb-ok", "fb-low", "fb-fail");
        el.classList.add(tier.cls);
      }
    });
    selects.forEach(function (s) { s.value = String(state.erf[Number(s.getAttribute("data-erf"))]); });
  }

  selects.forEach(function (s) {
    var html = "";
    PCTS.forEach(function (p) { html += '<option value="' + p + '">' + p + " %</option>"; });
    s.innerHTML = html;
    s.addEventListener("change", function () {
      state.erf[Number(s.getAttribute("data-erf"))] = Number(s.value);
      render();
    });
  });

  function bindNumber(id, key, min) {
    var input = document.getElementById(id);
    if (!input) return;
    input.addEventListener("input", function () {
      var n = Math.floor(Number(input.value));
      state[key] = isFinite(n) && n >= min ? n : 0;
      render();
    });
  }
  bindNumber("c-err", "errors", 0);
  bindNumber("c-words", "words", 0);

  render();

  /* ---------- Einblendungen beim Scrollen (einmalig) ---------- */
  if ("IntersectionObserver" in window && !reduceMotion) {
    root.classList.add("reveal-on");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
  }

  /* ---------- Video: erst beim Klick laden ---------- */
  var vid = document.getElementById("vid");
  var cover = document.getElementById("vidCover");
  if (vid && cover) {
    cover.addEventListener("click", function () {
      var source = vid.querySelector("source[data-src]");
      if (source && !source.getAttribute("src")) {
        source.setAttribute("src", source.getAttribute("data-src"));
        vid.load();
      }
      cover.classList.add("is-gone");
      cover.setAttribute("aria-hidden", "true");
      cover.tabIndex = -1;
      var p = vid.play();
      if (p && typeof p.catch === "function") { p.catch(function () { /* Start über die Steuerung möglich */ }); }
      vid.focus({ preventScroll: true });
      window.setTimeout(function () { cover.hidden = true; }, 340);
    });
  }
})();
