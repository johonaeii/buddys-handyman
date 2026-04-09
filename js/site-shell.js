import { React, createRoot, html } from "./react-lib.js";

export const COMPANY = {
  name: "Buddy's Handyman Services",
  owner: "Eric Pacheco",
  phoneDisplay: "(505) 555-0199",
  phoneDigits: "+15055550199",
  textDisplay: "(505) 555-0199",
  textDigits: "+15055550199",
  email: "",
  cityLine: "Serving Albuquerque and Rio Rancho",
  serviceAreaLine: "Reliable handyman help for Albuquerque and Rio Rancho homeowners and families.",
  responseLine: "Call or text to talk through the job, ask questions, and check the next opening.",
  businessHours: ["Monday to Friday: 8 AM to 6 PM", "Saturday: By appointment", "Sunday: Closed"],
  licenseLabel: "",
  licenseUrl: "https://www.rld.nm.gov/construction-industries/",
  googleReviewsUrl: "",
  warrantyLabel: "",
};

export const FEATURED_SERVICES = [
  {
    id: "drywall",
    title: "Drywall and Texture Repair",
    eyebrow: "Walls",
    href: "drywall-texture.html",
    text: "Patch holes, repair damage, and blend texture so the wall looks clean again.",
  },
  {
    id: "painting",
    title: "Interior and Exterior Painting",
    eyebrow: "Paint",
    href: "painting.html",
    text: "Refresh rooms, trim, doors, and exterior surfaces with careful prep and clean finish work.",
  },
  {
    id: "tile",
    title: "Tile Repair and Installation",
    eyebrow: "Tile",
    href: "tile.html",
    text: "Replace cracked tile, repair problem areas, and finish kitchens, baths, and floors neatly.",
  },
  {
    id: "plumbing",
    title: "Water Heaters and Plumbing Fixes",
    eyebrow: "Plumbing",
    href: "plumbing-water-heaters.html",
    text: "Handle water heater issues, faucet and shower repairs, drain hardware, and disposal replacements.",
  },
  {
    id: "trim",
    title: "Trim, Baseboards, and Finish Carpentry",
    eyebrow: "Finish Work",
    href: "trim-carpentry.html",
    text: "Tighten up the final look of a room with baseboards, trim repair, and clean finishing details.",
  },
];

export const FORM_SERVICE_OPTIONS = [
  "Drywall and texture repair",
  "Interior or exterior painting",
  "Tile repair or installation",
  "Water heater or plumbing repair",
  "Trim and baseboards",
  "General handyman help",
];

export const TRUST_PROMISES = [
  "Phone-first scheduling for homeowners and family helpers",
  "Straightforward estimates before work begins",
  "Respectful work inside the home",
  "Local service focused on Albuquerque and Rio Rancho",
];

const NAV_LINKS = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "services", label: "Services", href: "services.html" },
  { id: "about", label: "About", href: "trust.html" },
  { id: "contact", label: "Contact", href: "contact.html" },
];

const THEME_STORAGE_KEY = "bhs-theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function normalizeTheme(theme) {
  return theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
}

function getInitialTheme() {
  if (typeof document !== "undefined") {
    const documentTheme = document.documentElement.dataset.theme;
    if (documentTheme) {
      return normalizeTheme(documentTheme);
    }
  }

  if (typeof window !== "undefined") {
    try {
      return normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY));
    } catch (error) {
      return LIGHT_THEME;
    }
  }

  return LIGHT_THEME;
}

function applyTheme(theme) {
  const nextTheme = normalizeTheme(theme);
  document.documentElement.dataset.theme = nextTheme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", nextTheme === LIGHT_THEME ? "#f5f7fa" : "#14181e");
  }

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch (error) {
    // Ignore storage failures and keep the current in-memory value.
  }
}

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function mount(component) {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    return;
  }

  createRoot(rootElement).render(component);
}

export function getCallHref() {
  return `tel:${COMPANY.phoneDigits}`;
}

export function getTextHref() {
  return `sms:${COMPANY.textDigits}`;
}

function ActionButtons({ includeEstimate = true, stacked = false, estimateHref = "contact.html#estimate-form" }) {
  return html`
    <div className=${stacked ? "action-row is-stacked" : "action-row"}>
      <a className="btn btn-solid" href=${getCallHref()}>Call Now</a>
      <a className="btn btn-ghost" href=${getTextHref()}>Text Buddy</a>
      ${includeEstimate
        ? html`<a className="btn btn-soft" href=${estimateHref}>Request Estimate</a>`
        : null}
    </div>
  `;
}

function Header({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(getInitialTheme);
  const headerRef = React.useRef(null);

  React.useEffect(() => {
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [activePage]);

  React.useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const isDarkMode = theme === DARK_THEME;
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME));
  const themeToggleLabel = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  return html`
    <header className="top-header">
      <div className="container">
        <div className="header-shell" ref=${headerRef}>
          <div className="header-row">
            <a className="brand" href="index.html" aria-label="Buddy's Handyman Services home">
              <span className="brand-mark" aria-hidden="true">
                <img
                  className="brand-logo"
                  src="images/bhs-favicon.png"
                  alt=""
                  width="1010"
                  height="993"
                  decoding="async"
                  fetchpriority="high"
                />
              </span>
              <span className="brand-copy">
                <strong>${COMPANY.name}</strong>
                <small>${COMPANY.cityLine}</small>
              </span>
            </a>

            <div className="header-desktop-tools">
              <nav className="desktop-nav" aria-label="Primary">
                <ul className="nav-list">
                  ${NAV_LINKS.map(
                    (link) => html`
                      <li key=${link.id}>
                        <a
                          className=${link.id === activePage ? "nav-link is-active" : "nav-link"}
                          href=${link.href}
                          aria-current=${link.id === activePage ? "page" : undefined}
                        >
                          ${link.label}
                        </a>
                      </li>
                    `,
                  )}
                </ul>
              </nav>
            </div>

            <div className="header-controls">
              <button
                className=${isDarkMode ? "theme-toggle theme-toggle-icon is-active" : "theme-toggle theme-toggle-icon"}
                type="button"
                aria-pressed=${isDarkMode}
                aria-label=${themeToggleLabel}
                title=${isDarkMode ? "Light mode" : "Dark mode"}
                onClick=${toggleTheme}
              >
                <span className="theme-switch" aria-hidden="true">
                  <span className="theme-switch-thumb"></span>
                </span>
                <span className="sr-only">${themeToggleLabel}</span>
              </button>

              <button
                className="nav-toggle"
                type="button"
                aria-expanded=${isMenuOpen}
                aria-controls="site-drawer"
                aria-label=${isMenuOpen ? "Close menu" : "Open menu"}
                onClick=${() => setIsMenuOpen((open) => !open)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>

          <div id="site-drawer" className=${isMenuOpen ? "nav-drawer is-open" : "nav-drawer"}>
            <div className="nav-drawer-primary">
              <nav aria-label="Mobile primary">
                <ul className="nav-list is-mobile">
                  ${NAV_LINKS.map(
                    (link) => html`
                      <li key=${link.id}>
                        <a
                          className=${link.id === activePage ? "nav-link is-active" : "nav-link"}
                          href=${link.href}
                          aria-current=${link.id === activePage ? "page" : undefined}
                          onClick=${() => setIsMenuOpen(false)}
                        >
                          ${link.label}
                        </a>
                      </li>
                    `,
                  )}
                </ul>
              </nav>
            </div>

            <div className="nav-drawer-actions">
              <${ActionButtons} stacked=${true} />
              <button
                className=${isDarkMode ? "theme-toggle nav-drawer-theme is-active" : "theme-toggle nav-drawer-theme"}
                type="button"
                aria-pressed=${isDarkMode}
                onClick=${toggleTheme}
              >
                ${isDarkMode ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function Hero({ eyebrow, title, lead, primaryCta, secondaryCta, note, highlights = [] }) {
  return html`
    <section className="hero">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy">
            ${eyebrow ? html`<p className="eyebrow">${eyebrow}</p>` : null}
            <h1>${title}</h1>
            <p className="hero-lead">${lead}</p>

            <div className="hero-actions">
              ${primaryCta
                ? html`<a className="btn btn-solid" href=${primaryCta.href}>${primaryCta.label}</a>`
                : null}
              ${secondaryCta
                ? html`<a className="btn btn-ghost" href=${secondaryCta.href}>${secondaryCta.label}</a>`
                : null}
            </div>

            ${note ? html`<p className="hero-note">${note}</p>` : null}
          </div>

          <aside className="hero-panel" aria-label="What to expect">
            <p className="panel-eyebrow">Simple next steps</p>
            <ul className="hero-highlights">
              ${(highlights.length ? highlights : TRUST_PROMISES).map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>

            <div className="panel-callout">
              <p className="panel-title">Prefer to talk first?</p>
              <p>${COMPANY.responseLine}</p>
              <div className="panel-actions">
                <a className="text-link" href=${getCallHref()}>Call ${COMPANY.phoneDisplay}</a>
                <a className="text-link" href=${getTextHref()}>Text ${COMPANY.textDisplay}</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  const year = new Date().getFullYear();

  return html`
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <section>
            <h2>${COMPANY.name}</h2>
            <p>${COMPANY.serviceAreaLine}</p>
            <p>${COMPANY.responseLine}</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p><a href=${getCallHref()}>Call ${COMPANY.phoneDisplay}</a></p>
            <p><a href=${getTextHref()}>Text ${COMPANY.textDisplay}</a></p>
            ${COMPANY.email ? html`<p><a href=${`mailto:${COMPANY.email}`}>${COMPANY.email}</a></p>` : null}
          </section>

          <section>
            <h2>Hours</h2>
            ${COMPANY.businessHours.map((entry) => html`<p key=${entry}>${entry}</p>`)}
          </section>
        </div>
        <p className="copyright">(c) ${year} ${COMPANY.name}. All rights reserved.</p>
      </div>
    </footer>
  `;
}

function MobileActionBar() {
  return html`
    <div className="mobile-action-bar" aria-label="Quick contact actions">
      <a className="btn btn-solid" href=${getCallHref()}>Call</a>
      <a className="btn btn-ghost" href=${getTextHref()}>Text</a>
    </div>
  `;
}

export function SiteLayout({ activePage, hero, children }) {
  return html`
    <${React.Fragment}>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <${Header} activePage=${activePage} />
      <main id="main-content" className="site-shell">
        ${hero ? html`<${Hero} ...${hero} />` : null}
        ${children}
      </main>
      <${Footer} />
      <${MobileActionBar} />
    <//>
  `;
}

export function Section({ title, lead, id, children }) {
  return html`
    <section id=${id} className="section">
      <div className="container">
        ${(title || lead)
          ? html`
              <div className="section-head">
                ${title ? html`<h2>${title}</h2>` : null}
                ${lead ? html`<p>${lead}</p>` : null}
              </div>
            `
          : null}
        ${children}
      </div>
    </section>
  `;
}

export function InfoCard({ title, text, eyebrow, href, linkLabel = "Learn more" }) {
  return html`
    <article className="card">
      ${eyebrow ? html`<p className="card-eyebrow">${eyebrow}</p>` : null}
      <h3>${title}</h3>
      <p>${text}</p>
      ${href ? html`<a className="text-link" href=${href}>${linkLabel}</a>` : null}
    </article>
  `;
}

export function TestimonialCard({ quote, author, context }) {
  return html`
    <article className="card testimonial-card">
      <p className="quote">"${quote}"</p>
      <p className="author">${author}</p>
      ${context ? html`<p className="context">${context}</p>` : null}
    </article>
  `;
}

export function ResourceCard({ title, summary, href }) {
  return html`
    <article className="card resource-card">
      <h3>${title}</h3>
      <p>${summary}</p>
      <a className="text-link" href=${href}>Read more</a>
    </article>
  `;
}

export function ContactStrip({ title, text, buttonLabel, buttonHref }) {
  return html`
    <section className="section section-tight">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>${title}</h2>
            <p>${text}</p>
          </div>
          <a className="btn btn-solid" href=${buttonHref}>${buttonLabel}</a>
        </div>
      </div>
    </section>
  `;
}

export function EstimateForm({ contextLabel = "Website", submitLabel = "Request Free Estimate" }) {
  const [status, setStatus] = React.useState("idle");
  const [message, setMessage] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {};

    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    payload["form-name"] = "estimate-request";

    setStatus("submitting");
    setMessage("Sending your request...");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your estimate request was sent. If the job is urgent, please call or text now.");
    } catch (error) {
      setStatus("error");
      setMessage("We could not send the form online right now. Please call or text and Buddy can help you directly.");
    }
  }

  return html`
    <form
      className="estimate-form"
      name="estimate-request"
      method="POST"
      action="/thank-you.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit=${handleSubmit}
    >
      <input type="hidden" name="form-name" value="estimate-request" />
      <input type="hidden" name="source" value=${contextLabel} />

      <p className="sr-only">
        <label>
          Do not fill this out if you are human
          <input name="bot-field" />
        </label>
      </p>

      <div className="form-grid">
        <label>
          Full Name
          <input type="text" name="name" required autocomplete="name" />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" required autocomplete="tel" inputmode="tel" />
        </label>

        <label>
          Email Address
          <input type="email" name="email" autocomplete="email" />
        </label>

        <label>
          City or ZIP Code
          <input type="text" name="location" required autocomplete="address-level2" />
        </label>

        <label>
          Service Needed
          <select name="service" required>
            <option value="">Choose one</option>
            ${FORM_SERVICE_OPTIONS.map((option) => html`<option key=${option}>${option}</option>`)}
          </select>
        </label>

        <label className="form-span-full">
          Project Details
          <textarea name="message" rows="5" placeholder="Tell Buddy what needs attention and when you hope to get it done."></textarea>
        </label>
      </div>

      <div className="form-footer">
        <button className="btn btn-solid" type="submit" disabled=${status === "submitting"}>
          ${status === "submitting" ? "Sending..." : submitLabel}
        </button>
        <p className="form-help">
          Prefer to talk right away? <a className="text-link" href=${getCallHref()}>Call ${COMPANY.phoneDisplay}</a> or
          <a className="text-link" href=${getTextHref()}> text ${COMPANY.textDisplay}</a>.
        </p>
      </div>

      ${message
        ? html`
            <p className=${status === "error" ? "form-status is-error" : "form-status"} role="status">
              ${message}
            </p>
          `
        : null}
    </form>
  `;
}
