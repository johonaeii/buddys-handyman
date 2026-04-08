/**
 * Lightweight conversion tracking for Buddy's Handyman Services.
 * Tracks CTA clicks (call, text, estimate) and form submissions.
 * Events are dispatched as custom DOM events for easy integration
 * with any analytics provider (Google Analytics, Plausible, etc).
 *
 * To connect to an analytics provider later, listen for
 * "bhs:conversion" events on the document.
 */

const TRACKED_ACTIONS = {
  call: "CTA: Call",
  text: "CTA: Text",
  estimate_form: "Form: Estimate Submitted",
  estimate_cta: "CTA: Request Estimate",
};

function trackEvent(action, label) {
  const detail = { action, label, timestamp: Date.now() };

  // Dispatch custom event for future analytics integration
  document.dispatchEvent(new CustomEvent("bhs:conversion", { detail }));

  // If Google Analytics (gtag) is loaded, send the event
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: "conversion",
      event_label: label,
    });
  }
}

function initTracking() {
  document.addEventListener("click", function (event) {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";

    if (href.startsWith("tel:")) {
      trackEvent(TRACKED_ACTIONS.call, href);
    } else if (href.startsWith("sms:")) {
      trackEvent(TRACKED_ACTIONS.text, href);
    } else if (href.includes("contact.html") || href.includes("#estimate")) {
      trackEvent(TRACKED_ACTIONS.estimate_cta, href);
    }
  });

  // Track form submissions
  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (form && form.name === "estimate-request") {
      trackEvent(TRACKED_ACTIONS.estimate_form, "estimate-request");
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTracking);
} else {
  initTracking();
}
