(function () {
  var header = document.querySelector("[data-header]");
  var details = document.querySelector("[data-nav]");
  var summary = details ? details.querySelector("summary") : null;
  var panel = document.getElementById("mobile-nav");
  var wordmark = document.querySelector("[data-wordmark]");
  var main = document.getElementById("main");
  var footer = document.querySelector("[data-footer]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var desktopNav = window.matchMedia("(min-width: 1360px)");

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
    if (panel) {
      panel.addEventListener("click", function (event) {
        var link = event.target.closest("a");
        if (!link) return;
        details.open = false;
      });
    }

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

  var lensButtons = document.querySelectorAll("[data-lens]");
  if (lensButtons.length) {
    lensButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        lensButtons.forEach(function (item) {
          item.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");
        document.querySelectorAll(".lens-panel").forEach(function (panel) {
          panel.classList.remove("is-selected");
          var state = panel.querySelector(".lens-state");
          if (state) state.hidden = true;
        });
        var panel = document.getElementById(button.getAttribute("aria-controls"));
        if (!panel) return;
        panel.classList.add("is-selected");
        var state = panel.querySelector(".lens-state");
        if (state) state.hidden = false;
        var heading = panel.querySelector("h3");
        panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
        if (heading) heading.focus();
      });
    });
  }

  var dimButtons = document.querySelectorAll("[data-dimension]");
  var dimDesktop = window.matchMedia("(min-width: 1200px)");
  function showDimension(id, shouldFocus) {
    var desktop = dimDesktop.matches;
    dimButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-dimension") === id ? "true" : "false");
    });
    document.querySelectorAll(".hos-panel").forEach(function (panel) {
      var on = panel.id === "dimension-" + id;
      panel.classList.toggle("is-selected", on);
      panel.hidden = desktop ? !on : false;
      var state = panel.querySelector(".hos-state");
      if (state) state.hidden = !on;
      if (on && shouldFocus) {
        var heading = panel.querySelector("h3");
        panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
        if (heading) heading.focus();
      }
    });
  }
  if (dimButtons.length) {
    showDimension("body", false);
    dimButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        showDimension(button.getAttribute("data-dimension"), true);
      });
      button.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") next = dimButtons[index + 1] || dimButtons[0];
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = dimButtons[index - 1] || dimButtons[dimButtons.length - 1];
        if (!next) return;
        event.preventDefault();
        next.focus();
        showDimension(next.getAttribute("data-dimension"), false);
      });
    });
    dimDesktop.addEventListener("change", function () {
      var current = document.querySelector("[data-dimension][aria-pressed='true']");
      showDimension(current ? current.getAttribute("data-dimension") : "body", false);
    });
  }

  var library = document.querySelector("[data-knowledge-library]");
  if (library) {
    var form = library.querySelector("form");
    var input = document.getElementById("knowledge-query");
    var results = document.getElementById("knowledge-results");
    var resultTitle = document.getElementById("knowledge-result-title");
    var resultCopy = document.getElementById("knowledge-result-copy");
    var clearLink = library.querySelector("[data-knowledge-clear]");
    var domains = {};
    document.querySelectorAll("[data-domain]").forEach(function (card) {
      domains[card.getAttribute("data-domain")] = card.querySelector("h3").textContent.trim();
    });
    function renderLibrary(shouldFocus) {
      var params = new URLSearchParams(window.location.search);
      var query = (params.get("q") || "").replace(/\s+/g, " ").trim();
      var domain = params.get("domain") || "";
      var known = Object.prototype.hasOwnProperty.call(domains, domain);
      if (input && document.activeElement !== input) input.value = query;
      document.querySelectorAll("[data-domain]").forEach(function (card) {
        var on = known && card.getAttribute("data-domain") === domain;
        card.classList.toggle("is-selected", on);
        var state = card.querySelector(".domain-state");
        if (state) state.hidden = !on;
      });
      if (domain && !known) {
        resultTitle.textContent = "That filter is not part of the Knowledge Hub.";
        resultCopy.textContent = "The five knowledge domains are listed above. No resource is published yet.";
      } else if (query) {
        resultTitle.textContent = "No resources found for this search.";
        resultCopy.textContent = "Try a different word or explore one of the knowledge domains above.";
      } else if (known) {
        resultTitle.textContent = "No published resources in " + domains[domain] + ".";
        resultCopy.textContent = "This domain is ready for published resources. None have been added.";
      } else {
        resultTitle.textContent = "No knowledge resource is published yet.";
        resultCopy.textContent = "Articles, guides, videos, podcasts, learning series and case studies will appear here only after they are reviewed and published.";
      }
      if (clearLink) clearLink.hidden = !(query || domain);
      if (shouldFocus && results) results.focus();
    }
    renderLibrary(false);
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var params = new URLSearchParams(window.location.search);
        var query = input.value.replace(/\s+/g, " ").trim();
        if (query) params.set("q", query);
        else params.delete("q");
        if (params.get("domain") && !Object.prototype.hasOwnProperty.call(domains, params.get("domain"))) params.delete("domain");
        var search = params.toString();
        history.replaceState(null, "", window.location.pathname + (search ? "?" + search : "") + "#knowledge-library");
        renderLibrary(true);
      });
    }
  }

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
