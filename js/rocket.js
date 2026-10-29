/* ==========================================================
   EarthFera · Roket animasi di lapisan Mesosfer
   - Roket digambar dengan SVG (badan aerodinamis, hidung runcing,
     sirip, jendela, mesin) dan digerakkan dengan JavaScript.
   - Terbang perlahan dari kiri ke kanan di jalur atas zona,
     sehingga tidak menutupi tombol / teks lapisan atmosfer.
   - Arah roket mengikuti garis lintasan; api & partikel selalu
     keluar dari mesin di belakang roket.
   - Berhenti saat tidak terlihat; mendukung prefers-reduced-motion.
   ========================================================== */
(function () {
  'use strict';

  // Zona Mesosfer = index 2 pada array atmosfer (A) di main.js
  var ZONE_INDEX = 2;
  var zone = document.querySelector('#atmIn .z[data-i="' + ZONE_INDEX + '"]');
  if (!zone) return;

  var NS = 'http://www.w3.org/2000/svg';
  var TAU = Math.PI * 2;
  var NOZZLE_X = -35;            // posisi mesin pada koordinat lokal roket

  // ---------- SVG ----------
  var layer = document.createElementNS(NS, 'svg');
  layer.setAttribute('class', 'dc rk-layer');
  layer.setAttribute('aria-hidden', 'true');
  layer.setAttribute('focusable', 'false');
  layer.innerHTML =
    '<defs>' +
      '<linearGradient id="rkBody" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#ffffff"/><stop offset=".28" stop-color="#eef4fb"/>' +
        '<stop offset=".62" stop-color="#b3c3d8"/><stop offset="1" stop-color="#63789a"/></linearGradient>' +
      '<linearGradient id="rkNose" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#8ff5ff"/><stop offset=".5" stop-color="#22e5ff"/><stop offset="1" stop-color="#0a86aa"/></linearGradient>' +
      '<linearGradient id="rkFinT" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#5df0ff"/><stop offset="1" stop-color="#0b86ad"/></linearGradient>' +
      '<linearGradient id="rkFinB" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#1cb8da"/><stop offset="1" stop-color="#065273"/></linearGradient>' +
      '<linearGradient id="rkNoz" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#9aa7ba"/><stop offset="1" stop-color="#2a3446"/></linearGradient>' +
      '<radialGradient id="rkGlass" cx=".35" cy=".3" r=".85">' +
        '<stop offset="0" stop-color="#dcfbff"/><stop offset=".45" stop-color="#2cc2ec"/><stop offset="1" stop-color="#0a3a66"/></radialGradient>' +
      '<radialGradient id="rkGlow" cx=".5" cy=".5" r=".5">' +
        '<stop offset="0" stop-color="#22e5ff" stop-opacity=".5"/><stop offset="1" stop-color="#22e5ff" stop-opacity="0"/></radialGradient>' +
      '<linearGradient id="rkFs" x1="1" y1="0" x2="0" y2="0">' +
        '<stop offset="0" stop-color="#22e5ff" stop-opacity=".65"/><stop offset="1" stop-color="#22e5ff" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="rkFo" x1="1" y1="0" x2="0" y2="0">' +
        '<stop offset="0" stop-color="#ffc244"/><stop offset=".55" stop-color="#ff7a1a"/><stop offset="1" stop-color="#ff4d00" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="rkFy" x1="1" y1="0" x2="0" y2="0">' +
        '<stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="rkFc" x1="1" y1="0" x2="0" y2="0">' +
        '<stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#8ff5ff"/><stop offset="1" stop-color="#22e5ff" stop-opacity="0"/></linearGradient>' +
      '<linearGradient id="rkTrailG" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">' +
        '<stop offset="0" stop-color="#9af4ff" stop-opacity=".55"/><stop offset=".5" stop-color="#22e5ff" stop-opacity=".2"/><stop offset="1" stop-color="#22e5ff" stop-opacity="0"/></linearGradient>' +
      '<clipPath id="rkClip"><path d="M-28,-9 C-16,-14 10,-13.5 28,-7.5 C37,-4.5 43,-1.8 47,0 C43,1.8 37,4.5 28,7.5 C10,13.5 -16,14 -28,9 Z"/></clipPath>' +
    '</defs>' +
    '<path id="rkRibbon" fill="url(#rkTrailG)"/>' +
    '<g id="rkParts"></g>' +
    '<g id="rkShip">' +
      '<ellipse cx="-4" cy="0" rx="66" ry="30" fill="url(#rkGlow)" opacity=".4"/>' +
      // api (di belakang mesin, menghadap ke -x)
      '<g id="rkFlame" transform="translate(' + NOZZLE_X + ',0)">' +
        '<path id="rkF1" d="M0,-9 C-14,-12 -34,-7 -62,0 C-34,7 -14,12 0,9 Z" fill="url(#rkFs)"/>' +
        '<path id="rkF2" d="M0,-7 C-12,-9 -28,-5 -48,0 C-28,5 -12,9 0,7 Z" fill="url(#rkFo)"/>' +
        '<path id="rkF3" d="M0,-4.5 C-9,-6 -20,-3.2 -33,0 C-20,3.2 -9,6 0,4.5 Z" fill="url(#rkFy)"/>' +
        '<path id="rkF4" d="M0,-2.6 C-6,-3.4 -13,-1.8 -22,0 C-13,1.8 -6,3.4 0,2.6 Z" fill="url(#rkFc)"/>' +
      '</g>' +
      // mesin pendorong
      '<path d="M-26,-6 L-35,-9.5 L-35,9.5 L-26,6 Z" fill="url(#rkNoz)" stroke="#1b2433" stroke-width=".6"/>' +
      '<ellipse cx="-35" cy="0" rx="1.9" ry="7.6" fill="#0b1220"/>' +
      '<ellipse id="rkNozGlow" cx="-35.4" cy="0" rx="1.2" ry="5" fill="#8ff5ff" opacity=".85"/>' +
      // sirip samping (atas & bawah)
      '<path d="M-10,-10 L-23,-23 L-32,-23 L-29,-7 Z" fill="url(#rkFinT)" stroke="#0a5f80" stroke-width=".6" stroke-linejoin="round"/>' +
      '<path d="M-23,-23 L-32,-23" stroke="#e9fdff" stroke-width="1" stroke-linecap="round" opacity=".8"/>' +
      '<path d="M-10,10 L-23,23 L-32,23 L-29,7 Z" fill="url(#rkFinB)" stroke="#06425d" stroke-width=".6" stroke-linejoin="round"/>' +
      // badan
      '<path d="M-28,-9 C-16,-14 10,-13.5 28,-7.5 C37,-4.5 43,-1.8 47,0 C43,1.8 37,4.5 28,7.5 C10,13.5 -16,14 -28,9 Z" fill="url(#rkBody)"/>' +
      '<g clip-path="url(#rkClip)">' +
        '<path d="M25,-10 L50,-10 L50,10 L25,10 Z" fill="url(#rkNose)"/>' +
        '<path d="M25,-9 Q28.5,0 25,9" fill="none" stroke="rgba(0,50,70,.45)" stroke-width=".9"/>' +
        '<rect x="-21" y="-15" width="7" height="30" fill="#22e5ff" opacity=".88"/>' +
        '<rect x="-21" y="-15" width="1.2" height="30" fill="#0a7fa0" opacity=".7"/>' +
        '<rect x="-12" y="-15" width="1.3" height="30" fill="#fff" opacity=".75"/>' +
        '<path d="M-6,-14 L-6,14 M24,-10 L24,10" stroke="rgba(60,85,115,.28)" stroke-width=".7"/>' +
        '<path d="M-26,8.4 C-10,12.8 12,12.3 28,6.8" fill="none" stroke="rgba(14,32,62,.38)" stroke-width="4.2"/>' +
        '<path d="M-24,-9 C-10,-12.2 10,-11.6 26,-6.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".8"/>' +
      '</g>' +
      // jendela
      '<circle cx="9" cy="-.5" r="6.3" fill="#dfe8f2" stroke="#52698a" stroke-width=".9"/>' +
      '<circle cx="9" cy="-.5" r="4.8" fill="url(#rkGlass)"/>' +
      '<ellipse cx="7.4" cy="-2.3" rx="1.9" ry="1" fill="#fff" opacity=".9" transform="rotate(-35 7.4 -2.3)"/>' +
      '<circle cx="-4.5" cy="-.5" r="3.1" fill="#dfe8f2" stroke="#52698a" stroke-width=".7"/>' +
      '<circle cx="-4.5" cy="-.5" r="2.2" fill="url(#rkGlass)"/>' +
      '<path d="M-28,-9 C-16,-14 10,-13.5 28,-7.5 C37,-4.5 43,-1.8 47,0 C43,1.8 37,4.5 28,7.5 C10,13.5 -16,14 -28,9 Z" fill="none" stroke="rgba(25,45,80,.55)" stroke-width=".7"/>' +
    '</g>';

  layer.style.cssText = 'left:0;top:0;width:100%;height:100%;z-index:2;overflow:hidden';
  zone.appendChild(layer);

  var $ = function (id) { return layer.querySelector('#' + id); };
  var ship = $('rkShip'), ribbon = $('rkRibbon'), partsG = $('rkParts'),
      F1 = $('rkF1'), F2 = $('rkF2'), F3 = $('rkF3'), F4 = $('rkF4'),
      nozGlow = $('rkNozGlow'), trailGrad = layer.querySelector('#rkTrailG');

  // ---------- Partikel ----------
  var POOL = 46, COLORS = ['#22e5ff', '#bff8ff', '#ffffff', '#ffb347', '#ff7a1a'];
  var parts = [];
  for (var i = 0; i < POOL; i++) {
    var c = document.createElementNS(NS, 'circle');
    c.setAttribute('r', 0); c.setAttribute('opacity', 0);
    partsG.appendChild(c);
    parts.push({ el: c, life: 0, age: 1, x: 0, y: 0, vx: 0, vy: 0, r0: 1 });
  }
  var spawnAcc = 0, pHead = 0;

  function spawn(x, y, ux, uy) {            // (ux,uy) = arah ke belakang roket
    var p = parts[pHead]; pHead = (pHead + 1) % POOL;
    var spd = 12 + Math.random() * 22, side = (Math.random() - 0.5) * 16;
    p.x = x + (Math.random() - 0.5) * 3; p.y = y + (Math.random() - 0.5) * 3;
    p.vx = ux * spd - uy * side; p.vy = uy * spd + ux * side;
    p.life = 1.2 + Math.random() * 1.5; p.age = 0; p.r0 = 0.9 + Math.random() * 1.7;
    p.el.setAttribute('fill', COLORS[(Math.random() * COLORS.length) | 0]);
  }

  // ---------- Jejak cahaya ----------
  var trail = [], TRAIL_MAX = 34, TRAIL_STEP = 4;
  function drawRibbon(nx, ny, wMax) {
    var n = trail.length;
    if (n < 3) { ribbon.setAttribute('d', ''); return; }
    var L = '', R = '', i;
    for (i = 0; i < n; i++) {
      var p = trail[i], a = trail[Math.max(0, i - 1)], b = trail[Math.min(n - 1, i + 1)];
      var tx = a.x - b.x, ty = a.y - b.y, l = Math.hypot(tx, ty) || 1;
      var w = wMax * Math.pow(1 - i / n, 1.15);
      var ox = -ty / l * w, oy = tx / l * w;
      L += (i ? 'L' : 'M') + (p.x + ox).toFixed(1) + ' ' + (p.y + oy).toFixed(1);
      R = 'L' + (p.x - ox).toFixed(1) + ' ' + (p.y - oy).toFixed(1) + R;
    }
    ribbon.setAttribute('d', L + R + 'Z');
    var tail = trail[n - 1];
    trailGrad.setAttribute('x1', nx); trailGrad.setAttribute('y1', ny);
    trailGrad.setAttribute('x2', tail.x); trailGrad.setAttribute('y2', tail.y);
  }

  // ---------- Pengaturan gerak ----------
  var W = 0, H = 0, SPEED = 34, MARGIN = 80, S = 0.95;
  var LANE_Y = 30, AMP = 6, LAMBDA = 300;

  function measure() {
    W = zone.clientWidth; H = zone.clientHeight;
    if (!W) return;
    layer.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    S = W < 480 ? 0.8 : 0.95;
    LAMBDA = Math.max(240, W * 0.45);
    LANE_Y = 35 * S / 0.95;
    AMP = 5;
    if (reduce) renderStatic();
  }

  var prevX = -1e9;
  function place(t, animate) {
    var span = W + MARGIN * 2;
    var x = -MARGIN + ((SPEED * t) % span);
    if (x < prevX - 10) { trail.length = 0; }         // roket muncul lagi di kiri → reset jejak
    prevX = x;

    var ph = TAU * x / LAMBDA;
    var bob = 2.2 * Math.sin(t * 1.6);
    var y = LANE_Y + AMP * Math.sin(ph) + bob;
    var dydt = AMP * Math.cos(ph) * TAU / LAMBDA * SPEED + 2.2 * 1.6 * Math.cos(t * 1.6);
    var ang = Math.atan2(dydt, SPEED);                // arah gerak sebenarnya

    var jx = 0, jy = 0, jr = 0;
    if (animate) {                                    // getaran halus mesin
      jx = 0.35 * Math.sin(t * 47) + 0.2 * Math.sin(t * 31 + 2);
      jy = 0.35 * Math.sin(t * 53 + 1) + 0.2 * Math.sin(t * 29);
      jr = 0.012 * Math.sin(t * 41) + 0.006 * Math.sin(t * 67);
    }
    var a2 = ang + jr;
    ship.setAttribute('transform', 'translate(' + (x + jx).toFixed(2) + ',' + (y + jy).toFixed(2) + ') rotate(' + (a2 * 180 / Math.PI).toFixed(2) + ') scale(' + S + ')');

    // posisi mesin di koordinat dunia
    var ca = Math.cos(a2), sa = Math.sin(a2);
    var nx = x + jx + NOZZLE_X * S * ca, ny = y + jy + NOZZLE_X * S * sa;
    return { x: nx, y: ny, ux: -ca, uy: -sa };
  }

  function flicker(t, k) {
    var f = 0.9 + 0.2 * Math.sin(t * 38) + 0.1 * Math.sin(t * 23 + 1) + 0.06 * Math.sin(t * 61);
    var w = 0.92 + 0.14 * Math.sin(t * 29 + 2);
    F1.setAttribute('transform', 'scale(' + (f * 1.08 * k).toFixed(3) + ',' + (w * 1.04).toFixed(3) + ')');
    F2.setAttribute('transform', 'scale(' + (f * 1.0 * k).toFixed(3) + ',' + (w).toFixed(3) + ')');
    F3.setAttribute('transform', 'scale(' + ((0.94 + 0.2 * Math.sin(t * 45 + 1)) * k).toFixed(3) + ',' + (0.96 + 0.1 * Math.sin(t * 33)).toFixed(3) + ')');
    F4.setAttribute('transform', 'scale(' + ((0.92 + 0.22 * Math.sin(t * 52 + 3)) * k).toFixed(3) + ',1)');
    nozGlow.setAttribute('opacity', (0.7 + 0.3 * Math.sin(t * 40)).toFixed(2));
  }

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function renderStatic() {
    if (!W) return;
    var t = (W * 0.7 + MARGIN) / SPEED;
    place(t, false); trail.length = 0;
    ribbon.setAttribute('d', '');
    parts.forEach(function (p) { p.el.setAttribute('opacity', 0); });
    flicker(1, 0.8);
  }

  // ---------- Loop ----------
  var clock = (W * 0.18 + MARGIN) / SPEED, running = false, visible = true, raf = 0, last = 0;

  function frame(now) {
    if (!running) return;
    var dt = Math.min(0.05, (now - last) / 1000 || 0); last = now;
    clock += dt;

    var m = place(clock, true);
    flicker(clock, 1);

    // jejak: tambah titik jika sudah bergerak cukup jauh
    var lt = trail[0];
    if (!lt || Math.hypot(m.x - lt.x, m.y - lt.y) >= TRAIL_STEP) {
      trail.unshift({ x: m.x, y: m.y });
      if (trail.length > TRAIL_MAX) trail.pop();
    } else { lt.x = m.x; lt.y = m.y; }
    drawRibbon(m.x, m.y, 4.2 * S);

    // partikel
    spawnAcc += dt;
    while (spawnAcc > 0.05) { spawnAcc -= 0.05; spawn(m.x, m.y, m.ux, m.uy); }
    for (var i = 0; i < POOL; i++) {
      var p = parts[i];
      if (p.age >= p.life) continue;
      p.age += dt;
      var k = p.age / p.life;
      if (k >= 1) { p.el.setAttribute('opacity', 0); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.985; p.vy *= 0.985;
      p.el.setAttribute('cx', p.x.toFixed(1)); p.el.setAttribute('cy', p.y.toFixed(1));
      p.el.setAttribute('r', (p.r0 * (1 - 0.55 * k)).toFixed(2));
      p.el.setAttribute('opacity', (0.9 * Math.pow(1 - k, 1.3)).toFixed(2));
    }
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (running || reduce || !visible || document.hidden || !W) return;
    running = true; last = performance.now(); raf = requestAnimationFrame(frame);
  }
  function stop() { running = false; cancelAnimationFrame(raf); }

  function applyMode() { if (reduce) { stop(); renderStatic(); } else start(); }

  if ('ResizeObserver' in window) new ResizeObserver(function () { measure(); start(); }).observe(zone);
  else addEventListener('resize', measure);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { visible = e[0].isIntersecting; visible ? start() : stop(); }, { threshold: 0 }).observe(zone);
  }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  var mq = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');
  if (mq) {
    var onMq = function (e) { reduce = e.matches; applyMode(); };
    mq.addEventListener ? mq.addEventListener('change', onMq) : mq.addListener(onMq);
  }

  measure();
  clock = (W * 0.18 + MARGIN) / SPEED;
  applyMode();
})();
