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
  var dimDesktop = window.matchMedia("(min-width: 1100px)");
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
    document.querySelectorAll("[data-dimension-step]").forEach(function (control) {
      control.addEventListener("click", function () {
        var buttons = Array.prototype.slice.call(dimButtons);
        var current = buttons.findIndex(function (button) {
          return button.getAttribute("aria-pressed") === "true";
        });
        var step = Number(control.getAttribute("data-dimension-step"));
        var next = buttons[(current + step + buttons.length) % buttons.length];
        if (next) showDimension(next.getAttribute("data-dimension"), true);
      });
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

  var animated = document.querySelectorAll(".about-orbit, .home-hos-orbit, .journey-block, .lens-diagram, .hos-figure, .hos-orbit, .ht-arc, .ht-finale-orbit");
  if (!reduceMotion && "IntersectionObserver" in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-animated");
        animObserver.unobserve(entry.target);
      });
    }, { threshold: 0.25 });
    animated.forEach(function (el) { animObserver.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("is-animated"); });
  }

  var enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    var allowed = ["general_enquiry", "media_press", "institutional_collaboration", "global_network", "experiences_retreats", "speaking_content", "feedback", "other"];
    var typeField = document.getElementById("enquiry-type");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-enquiry]"));
    var message = document.getElementById("message");
    var counter = document.getElementById("message-count");
    var status = document.getElementById("enquiry-status");

    function setEnquiry(value) {
      if (allowed.indexOf(value) === -1) value = "";
      typeField.value = value;
      cards.forEach(function (card) {
        card.setAttribute("aria-pressed", card.getAttribute("data-enquiry") === value ? "true" : "false");
      });
    }

    function showError(id, text) {
      var node = document.getElementById(id);
      var field = document.getElementById(id.replace("-error", ""));
      if (!node) return;
      node.hidden = !text;
      node.textContent = text || "";
      if (field) {
        if (text) field.setAttribute("aria-invalid", "true");
        else field.removeAttribute("aria-invalid");
      }
    }

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        setEnquiry(card.getAttribute("data-enquiry"));
      });
    });
    typeField.addEventListener("change", function () {
      setEnquiry(typeField.value);
    });
    document.querySelectorAll("[data-select-enquiry]").forEach(function (button) {
      button.addEventListener("click", function () {
        setEnquiry(button.getAttribute("data-select-enquiry"));
        document.getElementById("contact-form").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        typeField.focus();
      });
    });
    if (message && counter) {
      message.addEventListener("input", function () {
        counter.textContent = message.value.length + " / 3000";
      });
    }
    var requested = new URLSearchParams(window.location.search).get("enquiry");
    if (requested && allowed.indexOf(requested) !== -1) setEnquiry(requested);

    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = document.getElementById("full-name");
      var email = document.getElementById("email");
      var subject = document.getElementById("subject");
      var first = null;
      function fail(input, errorId, text) {
        showError(errorId, text);
        if (!first) first = input;
      }
      showError("full-name-error", "");
      showError("email-error", "");
      showError("enquiry-type-error", "");
      showError("subject-error", "");
      showError("message-error", "");
      showError("privacy-error", "");
      status.hidden = true;
      status.textContent = "";
      if (!name.value.trim()) fail(name, "full-name-error", "Enter your full name.");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) fail(email, "email-error", "Enter an email address in the form name@example.com. This check does not verify that the address exists.");
      if (allowed.indexOf(typeField.value) === -1) fail(typeField, "enquiry-type-error", "Select an enquiry type.");
      if (!subject.value.trim()) fail(subject, "subject-error", "Enter a subject.");
      if (!message.value.trim()) fail(message, "message-error", "Enter a message.");
      else if (message.value.length > 3000) fail(message, "message-error", "Use 3,000 characters or fewer.");
      showError("privacy-error", "The Privacy Policy is not published, so this acknowledgement cannot be completed.");
      if (!first) first = document.getElementById("privacy");
      if (name.value.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) && allowed.indexOf(typeField.value) !== -1 && subject.value.trim() && message.value.trim() && message.value.length <= 3000) {
        status.hidden = false;
        status.textContent = "This enquiry could not be submitted. No verified delivery channel is connected. Nothing was received. Your details are still in the form.";
        status.focus();
        return;
      }
      if (first && first.focus) first.focus();
    });
  }
})();
