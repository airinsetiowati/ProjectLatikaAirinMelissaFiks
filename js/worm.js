/* ==========================================================
   EarthFera · Cacing tanah animasi (SVG + JavaScript murni)
   - Tubuh dibuat dari 96 titik di sepanjang "tulang punggung"
     yang mengikuti jalur lintasan di dalam Horizon A (Topsoil).
   - Gelombang (wave) merambat dari kepala ke ekor, tubuh sedikit
     memanjang-memendek dan menggembung (peristaltik) seperti
     cacing sungguhan.
   - Berhenti otomatis saat tidak terlihat (hemat baterai) dan
     menghormati prefers-reduced-motion.
   ========================================================== */
(function () {
  'use strict';

  // Index horizon tempat cacing hidup: 0=O, 1=A (Topsoil), 2=E, ...
  var HORIZON_INDEX = 1;

  var host = document.querySelectorAll('#soil .h')[HORIZON_INDEX];
  if (!host) return;

  var NS = 'http://www.w3.org/2000/svg';
  var PTS = 96;          // jumlah titik tubuh
  var SEGMENTS = 20;     // jumlah ruas (cincin) tubuh
  var TAU = Math.PI * 2;

  // ---------- Elemen SVG ----------
  var svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'h-art worm-art');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  function mk(fill, extra) {
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('fill', fill);
    if (extra) for (var k in extra) p.setAttribute(k, extra[k]);
    svg.appendChild(p);
    return p;
  }
  function mkLine(stroke, w) {
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', stroke);
    p.setAttribute('stroke-width', w);
    p.setAttribute('stroke-linecap', 'round');
    svg.appendChild(p);
    return p;
  }

  var pShadow = mk('rgba(0,0,0,.34)');
  var pBase   = mk('#8c4838', { stroke: '#5a271d', 'stroke-width': '.8', 'stroke-linejoin': 'round' });
  var pMid    = mk('#c27564');
  var pClit   = mk('#dd9482', { opacity: '.7' });
  var pRings  = mkLine('rgba(72,26,20,.42)', '1.1');
  var pHi     = mk('rgba(255,226,212,.55)');
  var pHead   = mk('#74382b', { opacity: '.62' });
  var pHeadHi = mk('rgba(255,214,196,.5)');

  host.appendChild(svg);

  // ---------- Geometri jalur ----------
  var W = 0, H = 0, loop = null, P = 1;
  var bodyLen = 100, R0 = 5, lambda = 56, latAmp = 3;

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  // Jalur "lintasan balap" (dua jalur lurus + dua putaran halus)
  // di bagian bawah strip tanah, sedikit berkelok agar alami.
  function buildLoop() {
    var ry = clamp(H * 0.095, 9, 14);                 // jari-jari putar balik
    var cy = H * 0.72;                                // garis tengah jalur
    var margin = ry + R0 + 8;
    var a = Math.max(20, W / 2 - margin);             // setengah panjang jalur lurus
    var cx = W / 2;
    var wob = clamp(H * 0.026, 2, 3.4);
    var wl = Math.max(200, W * 0.5);

    var raw = [];
    function push(x, y) {
      y += wob * Math.sin(TAU * x / wl + 0.8);
      raw.push([x, y]);
    }
    var i, n;
    n = Math.ceil(2 * a / 2);
    for (i = 0; i <= n; i++) push(cx - a + (2 * a) * i / n, cy + ry);          // bawah →
    n = 28;
    for (i = 1; i < n; i++) { var f = Math.PI * i / n; push(cx + a + ry * Math.sin(f), cy + ry * Math.cos(f)); }
    n = Math.ceil(2 * a / 2);
    for (i = 0; i <= n; i++) push(cx + a - (2 * a) * i / n, cy - ry);          // atas ←
    n = 28;
    for (i = 1; i < n; i++) { var g = Math.PI * i / n; push(cx - a - ry * Math.sin(g), cy - ry * Math.cos(g)); }

    // panjang kumulatif (jalur tertutup)
    var cum = [0], len = 0;
    for (i = 1; i <= raw.length; i++) {
      var p0 = raw[i - 1], p1 = raw[i % raw.length];
      len += Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
      cum.push(len);
    }
    loop = { pts: raw, cum: cum, n: raw.length };
    P = len;
  }

  var tmp = [0, 0];
  var lastIdx = 0;
  function posAt(s) {                                 // posisi pada jalur untuk jarak s (modulo P)
    s = ((s % P) + P) % P;
    var cum = loop.cum, n = loop.n, lo = lastIdx;
    if (cum[lo] > s) lo = 0;
    while (lo < n - 1 && cum[lo + 1] <= s) lo++;
    lastIdx = lo;
    var p0 = loop.pts[lo], p1 = loop.pts[(lo + 1) % n];
    var seg = cum[lo + 1] - cum[lo] || 1, t = (s - cum[lo]) / seg;
    tmp[0] = p0[0] + (p1[0] - p0[0]) * t;
    tmp[1] = p0[1] + (p1[1] - p0[1]) * t;
    return tmp;
  }

  function resize() {
    W = host.clientWidth; H = host.clientHeight;
    if (!W || !H) return;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    bodyLen = clamp(W * 0.2, 80, 150);
    R0 = clamp(bodyLen * 0.05, 3.9, 6.6);
    lambda = bodyLen * 0.48;
    latAmp = R0 * 0.55;
    buildLoop();
    lastIdx = 0;
    if (reduce) render(STATIC_T);                     // gambar ulang pose diam
  }

  // ---------- Profil bentuk tubuh (0 = kepala, 1 = ekor) ----------
  function smooth(a, b, x) { x = clamp((x - a) / (b - a), 0, 1); return x * x * (3 - 2 * x); }
  function profile(u) {
    var r = u < 0.38 ? 1 : 1 - 0.5 * Math.pow((u - 0.38) / 0.62, 1.25);   // menyempit ke ekor
    r *= 0.8 + 0.2 * smooth(0, 0.22, u);                                  // kepala sedikit lebih ramping
    if (u < 0.055) r *= Math.sqrt(Math.max(0, 1 - Math.pow((0.055 - u) / 0.055, 2)));       // ujung kepala membulat
    if (u > 0.955) r *= Math.sqrt(Math.max(0, 1 - Math.pow((u - 0.955) / 0.045, 2)));       // ujung ekor runcing
    return r;
  }

  // ---------- Buffer ----------
  var sx = new Float32Array(PTS), sy = new Float32Array(PTS),
      nx = new Float32Array(PTS), ny = new Float32Array(PTS),
      rr = new Float32Array(PTS);

  var T_SPEED = 15;        // px/detik, kecepatan rata-rata merayap (pelan)
  var OMEGA = 2.5;         // rad/detik, kecepatan gelombang
  var STATIC_T = 3.2;

  function render(t) {
    if (!loop) return;
    // Kepala maju dengan kecepatan berdenyut (kontraksi-regangan)
    var sH = T_SPEED * (t + 0.3 / OMEGA * (Math.cos(-0.6) - Math.cos(OMEGA * t - 0.6))) + P * 0.15;
    // Tubuh memanjang & memendek perlahan
    var stretch = 1 + 0.075 * Math.sin(OMEGA * t - 1.1);
    var i, u, s, p, k = TAU / lambda;

    for (i = 0; i < PTS; i++) {
      u = i / (PTS - 1);
      s = u * bodyLen * stretch;
      p = posAt(sH - s);
      sx[i] = p[0]; sy[i] = p[1];
    }
    // tangent → normal
    for (i = 0; i < PTS; i++) {
      var a = Math.max(0, i - 1), b = Math.min(PTS - 1, i + 1);
      var tx = sx[a] - sx[b], ty = sy[a] - sy[b];      // arah dari ekor ke kepala dibalik: a=kepala-ish
      var l = Math.hypot(tx, ty) || 1;
      nx[i] = -ty / l; ny[i] = tx / l;
    }
    // gelombang menyamping dari kepala → ekor + radius menggembung
    for (i = 0; i < PTS; i++) {
      u = i / (PTS - 1);
      var phase = k * u * bodyLen - OMEGA * t * 1.0;
      var env = 0.35 + 0.65 * Math.sin(Math.PI * clamp(u, 0, 1));
      var lat = latAmp * env * Math.sin(phase);
      sx[i] += nx[i] * lat; sy[i] += ny[i] * lat;
      var bulge = 1 + 0.2 * Math.sin(k * u * bodyLen * 0.95 - OMEGA * t + 0.9);
      var scallop = 1 + 0.055 * Math.cos(TAU * u * SEGMENTS);
      rr[i] = R0 * profile(u) * bulge * scallop;
    }

    // ----- bentuk poligon -----
    function outline(scale, ox, oy, lift, from, to) {
      var d = '', i;
      var f = from == null ? 0 : from, e = to == null ? PTS - 1 : to;
      for (i = f; i <= e; i++) {
        var r = rr[i] * scale;
        d += (i === f ? 'M' : 'L') + (sx[i] + nx[i] * r + ox).toFixed(1) + ' ' + (sy[i] + ny[i] * r + oy - lift * rr[i]).toFixed(1);
      }
      for (i = e; i >= f; i--) {
        var r2 = rr[i] * scale;
        d += 'L' + (sx[i] - nx[i] * r2 + ox).toFixed(1) + ' ' + (sy[i] - ny[i] * r2 + oy - lift * rr[i]).toFixed(1);
      }
      return d + 'Z';
    }

    pShadow.setAttribute('d', outline(1.0, 0, 3.2, 0));
    pBase.setAttribute('d', outline(1.0, 0, 0, 0));
    pMid.setAttribute('d', outline(0.74, 0, 0, 0.2));
    pHi.setAttribute('d', outline(0.26, 0, 0, 0.46, 5, PTS - 12));

    // klitelum (pita tebal terang di dekat kepala)
    pClit.setAttribute('d', outline(0.97, 0, -0.2, 0, Math.round(0.17 * (PTS - 1)), Math.round(0.29 * (PTS - 1))));
    // kepala lebih gelap + kilau kecil
    var hi = Math.round(0.1 * (PTS - 1));
    pHead.setAttribute('d', outline(0.98, 0, 0, 0, 0, hi));
    pHeadHi.setAttribute('d', outline(0.3, 0, 0, 0.5, 2, hi - 1));

    // garis ruas (cincin) memotong tubuh
    var rings = '';
    for (i = 1; i < SEGMENTS; i++) {
      var idx = Math.round(i / SEGMENTS * (PTS - 1)), q = rr[idx] * 0.9;
      if (q < 0.8) continue;
      rings += 'M' + (sx[idx] + nx[idx] * q).toFixed(1) + ' ' + (sy[idx] + ny[idx] * q).toFixed(1) +
               'L' + (sx[idx] - nx[idx] * q).toFixed(1) + ' ' + (sy[idx] - ny[idx] * q).toFixed(1);
    }
    pRings.setAttribute('d', rings);
  }

  // ---------- Loop animasi ----------
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var running = false, visible = true, raf = 0, last = 0, clock = 0;

  function frame(now) {
    if (!running) return;
    var dt = Math.min(0.05, (now - last) / 1000 || 0);   // batasi lonjakan frame
    last = now;
    clock += dt;
    render(clock);
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (running || reduce || !visible || document.hidden) return;
    running = true; last = performance.now(); raf = requestAnimationFrame(frame);
  }
  function stop() { running = false; cancelAnimationFrame(raf); }

  function applyMode() {
    if (reduce) { stop(); resize(); render(STATIC_T); } else { start(); }
  }

  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(host);
  else addEventListener('resize', resize);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      visible = e[0].isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0 }).observe(host);
  }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  var mq = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)');
  if (mq) {
    var onMq = function (e) { reduce = e.matches; applyMode(); };
    mq.addEventListener ? mq.addEventListener('change', onMq) : mq.addListener(onMq);
  }

  resize();
  render(reduce ? STATIC_T : 0);
  applyMode();
})();
