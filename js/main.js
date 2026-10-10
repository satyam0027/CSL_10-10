(function () {
  var header = document.querySelector("[data-header]");
  var details = document.querySelector("[data-nav]");
  var summary = details ? details.querySelector("summary") : null;
  var panel = document.getElementById("mobile-nav");
  var wordmark = document.querySelector("[data-wordmark]");
  var main = document.getElementById("main");
  var footer = document.querySelector("[data-footer]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var desktopNav = window.matchMedia("(min-width: 1180px)");

  function focusable(root) {
    if (!root) return [];
    return Array.prototype.slice.call(
      root.querySelectorAll('a[href], button:not([disabled]), summary, input, textarea, select, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) {
      return el.getAttribute("aria-hidden") !== "true" && !el.closest("[inert]");
    });
  }

  function setInert(on) {
    [wordmark, main, footer].forEach(function (el) {
      if (!el) return;
      if (on) el.setAttribute("inert", "");
      else el.removeAttribute("inert");
    });
  }

  function syncNav() {
    if (!details || !summary) return;
    var open = details.open && !desktopNav.matches;
    if (desktopNav.matches && details.open) details.open = false;
    summary.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.classList.toggle("nav-lock", open);
    setInert(open);
  }

  if (details && summary) {
    summary.setAttribute("aria-expanded", "false");
    details.addEventListener("toggle", syncNav);
    desktopNav.addEventListener("change", syncNav);

    document.addEventListener("keydown", function (event) {
      if (!details.open || desktopNav.matches) return;
      if (event.key === "Escape") {
        event.preventDefault();
        details.open = false;
        summary.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      var nodes = [summary].concat(focusable(panel));
      var first = nodes[0];
      var last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 4);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var reveals = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
