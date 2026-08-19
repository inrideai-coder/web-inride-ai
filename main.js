/* ==========================================================================
   INRIDE AI — UI interactions
   Header state, mobile menu, scroll reveals, animated counters, scrollspy,
   back-to-top, and subtle hero parallax. Respects prefers-reduced-motion.
   ========================================================================== */
window.INRIDE_UI = (function () {
  'use strict';

  var doc = document;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initHeader() {
    var header = doc.getElementById('siteHeader');
    var toggle = doc.getElementById('navToggle');
    var nav = doc.getElementById('siteNav');

    function onScroll() {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? INRIDE_I18N.lookup(INRIDE_I18N.getLang(), 'common.close') : INRIDE_I18N.lookup(INRIDE_I18N.getLang(), 'common.menu'));
      });
      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('is-open');
          toggle.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  function initReveal() {
    var els = doc.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { io.observe(el); });
  }

  function initCounters() {
    var els = doc.querySelectorAll('[data-count]');
    if (!els.length) return;
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.textContent = formatNumber(parseFloat(el.getAttribute('data-count')), el); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var dur = 1400;
        var t0 = performance.now();
        function step(t) {
          var p = Math.min(1, (t - t0) / dur);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = formatNumber(target * eased, el);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  }

  function formatNumber(value, el) {
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var n = value.toFixed(decimals);
    if (decimals === 0) n = Number(n).toLocaleString('en-US');
    return prefix + n + suffix;
  }

  function initToc() {
    var links = doc.querySelectorAll('.toc-link');
    if (!links.length) return;
    var sections = Array.prototype.map.call(links, function (l) {
      return doc.querySelector(l.getAttribute('href'));
    }).filter(Boolean);
    if (!sections.length) return;

    function set(id) {
      links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === id); });
    }
    if (!('IntersectionObserver' in window)) { return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) set('#' + e.target.id);
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
    sections.forEach(function (s) { io.observe(s); });
  }

  function initBackTop() {
    var btn = doc.getElementById('backTop');
    if (!btn) return;
    function onScroll() {
      btn.classList.toggle('is-visible', window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  function initBlobParallax() {
    var hero = doc.querySelector('.hero');
    if (!hero || reduced || window.matchMedia('(pointer: coarse)').matches) return;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty('--mx', (x * 28).toFixed(1) + 'px');
      hero.style.setProperty('--my', (y * 18).toFixed(1) + 'px');
      var blobs = hero.querySelectorAll('.blob');
      for (var i = 0; i < blobs.length; i++) {
        blobs[i].style.transform = 'translate(' + (x * (i + 1) * 14).toFixed(1) + 'px,' + (y * (i + 1) * 10).toFixed(1) + 'px)';
      }
    });
  }

  function init() {
    initHeader();
    initReveal();
    initCounters();
    initToc();
    initBackTop();
    initBlobParallax();
  }

  return {
    init: init,
    onLangChange: function () {
      /* Reveal/counter states persist across language switches — no-op. */
    }
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function () { window.INRIDE_UI.init(); });
} else {
  window.INRIDE_UI.init();
}
