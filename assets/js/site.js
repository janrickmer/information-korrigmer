/* KORRIGMER – Information
   Live-Beispiel (gerechnet wie in KORRIGMER – Oberstufe), Einblendungen, Video.
   Ohne JavaScript zeigt die Seite den Ausgangszustand aus dem HTML. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Rechenregeln aus KORRIGMER – Oberstufe ---------- */
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

  /* Ein kurzes Aufhellen bestätigt die neue Zahl. Bei schnell aufeinander
     folgenden Änderungen (Pfeiltasten, Tippen) entfällt es, statt zu flackern. */
  function setText(el, value) {
    var v = String(value);
    if (el.textContent === v) return;
    el.textContent = v;
    if (reduceMotion || !el.animate || !el.closest("[data-ui]")) return;
    var now = performance.now(), last = el._changedAt || 0;
    el._changedAt = now;
    if (now - last < 250) return;
    el.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 260, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  }

  var selects = document.querySelectorAll("select[data-erf]");
  var status = document.querySelector("[data-status]");
  var rendered = false;

  function render() {
    var r = compute();
    var abzug = r.deduction + " " + (r.deduction === 1 ? "Punkt" : "Punkte");
    var outs = { a3: r.a3, total: r.total, pct: r.pct, np: r.np, fi: fmtFI(r.fi), abzug: abzug };
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
    if (status && rendered) {
      status.textContent = "Fehlerindex " + fmtFI(r.fi) + ", Abzug " + abzug + ". Erreichte Punktzahl: " + r.np + " Punkte.";
    }
    rendered = true;
  }

  selects.forEach(function (s) {
    s.addEventListener("change", function () {
      state.erf[Number(s.getAttribute("data-erf"))] = Number(s.value);
      render();
    });
  });

  /* Ungültige Eingaben (leer, negativ, zu klein) ändern nichts; beim Verlassen
     des Feldes steht wieder der zuletzt gültige Wert darin. */
  function bindNumber(id, key, min) {
    var input = document.getElementById(id);
    if (!input) return;
    input.addEventListener("input", function () {
      if (input.value.trim() === "") return;
      var n = Math.floor(Number(input.value));
      if (!isFinite(n) || n < min) return;
      state[key] = n;
      render();
    });
    input.addEventListener("change", function () { input.value = String(state[key]); });
  }
  bindNumber("c-err", "errors", 0);
  bindNumber("c-words", "words", 1);

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

  /* ---------- Ablauf: aktuellen Schritt in der Schrittliste markieren ---------- */
  var stepLinks = document.querySelectorAll(".flow__nav a");
  if ("IntersectionObserver" in window && stepLinks.length) {
    var byId = {};
    stepLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var stepIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || !byId[e.target.id]) return;
        stepLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
        byId[e.target.id].setAttribute("aria-current", "step");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".flow__step[id]").forEach(function (el) { stepIo.observe(el); });
  }

  /* :active auf Touch-Geräten zuverlässig auslösen */
  document.addEventListener("touchstart", function () {}, { passive: true });

  /* ---------- Video: erst beim Klick laden ---------- */
  var vid = document.getElementById("vid");
  var cover = document.getElementById("vidCover");
  if (vid && cover) {
    vid.controls = false;          /* solange das Cover liegt, kein unsichtbarer Tab-Halt */
    cover.addEventListener("click", function () {
      var bg = cover.querySelector(".player__bg");
      if (bg && bg.currentSrc && !vid.poster) vid.poster = bg.currentSrc;
      vid.controls = true;
      cover.classList.add("is-gone");
      cover.setAttribute("aria-hidden", "true");
      cover.tabIndex = -1;
      var p = vid.play();
      if (p && typeof p.catch === "function") { p.catch(function () { /* Start über die Steuerung möglich */ }); }
      vid.focus({ preventScroll: true });
      window.setTimeout(function () { cover.hidden = true; }, 240);
    });
  }
})();
