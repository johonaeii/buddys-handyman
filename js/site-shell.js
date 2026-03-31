import { React, createRoot, html } from "./react-lib.js";

export const COMPANY = {
  name: "Buddy's Handyman Services",
  owner: "Eric Pacheco",
  phoneDisplay: "(505) 555-0199",
  phoneDigits: "+15055550199",
  email: "hello@buddyshandyman.com",
  cityLine: "Serving Albuquerque and Rio Rancho, New Mexico",
  licenseLabel: "NM Contractor License #000000",
  licenseUrl: "https://www.rld.nm.gov/construction-industries/",
};

const NAV_LINKS = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "services", label: "Services", href: "services.html" },
  { id: "trust", label: "About & Trust", href: "trust.html" },
  { id: "reviews", label: "Reviews", href: "reviews.html" },
  { id: "contact", label: "Contact", href: "contact.html" },
  // { id: "resources", label: "Resources", href: "resources.html" },
];

export function mount(component) {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    return;
  }
  createRoot(rootElement).render(component);
}

function Header({ activePage }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const closeOnWideScreens = () => {
      if (window.innerWidth > 860) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnWideScreens);

    return () => {
      window.removeEventListener("resize", closeOnWideScreens);
    };
  }, []);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [activePage]);

  const closeMenu = () => setIsMenuOpen(false);

  return html`
    <header className=${isMenuOpen ? "top-header menu-open" : "top-header"} aria-label="Main navigation">
      <div className="container">
        <div className="header-shell">
          <div className="header-bar">
            <a className="brand" href="index.html" aria-label="Buddy's Handyman Services home" onClick=${closeMenu}>
              <span className="brand-mark" aria-hidden="true">
                <img className="brand-logo" src="images/bhs-favicon.png" alt="" />
              </span>
              <span className="brand-copy">
                <strong>${COMPANY.name}</strong>
                <small>${COMPANY.cityLine}</small>
              </span>
            </a>

            <button
              className="nav-toggle"
              type="button"
              aria-expanded=${isMenuOpen}
              aria-controls="primary-nav"
              onClick=${() => setIsMenuOpen((open) => !open)}
            >
              <span className="nav-toggle-label">Menu</span>
              <span className="nav-toggle-lines" aria-hidden="true">
                <span></span>
                <span></span>
              </span>
            </button>
          </div>

          <div id="primary-nav" className=${isMenuOpen ? "header-panel is-open" : "header-panel"}>
            <nav className="nav-bar" aria-label="Primary">
              <ul className="nav-list">
                ${NAV_LINKS.map(
                  (link) => html`
                    <li key=${link.id}>
                      <a
                        className=${link.id === activePage ? "nav-link is-active" : "nav-link"}
                        href=${link.href}
                        aria-current=${link.id === activePage ? "page" : undefined}
                        onClick=${closeMenu}
                      >
                        ${link.label}
                      </a>
                    </li>
                  `,
                )}
              </ul>
            </nav>

            <div className="quick-contact">
              <a className="phone-link" href=${`tel:${COMPANY.phoneDigits}`} onClick=${closeMenu}>
                Call ${COMPANY.phoneDisplay}
              </a>
              <a className="btn btn-solid header-cta" href="contact.html" onClick=${closeMenu}>
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function Hero({ eyebrow, title, lead, primaryCta, secondaryCta, note }) {
  const trustPoints = ["Free estimates", "Licensed and insured", COMPANY.cityLine];

  return html`
    <section className="hero">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">${eyebrow}</p>
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

          <aside className="hero-aside" aria-label="Business highlights">
            <p className="hero-aside-label">Simple, local, dependable</p>

            <div className="hero-aside-card">
              <img className="hero-badge-mark" src="images/bhs-logo.png" alt="" aria-hidden="true" />
              <ul className="hero-points">
                ${trustPoints.map((point) => html`<li key=${point}>${point}</li>`)}
              </ul>
            </div>

            <div className="hero-contact-card">
              <span className="hero-contact-label">Prefer to talk first?</span>
              <a className="hero-inline-link" href=${`tel:${COMPANY.phoneDigits}`}>
                ${COMPANY.phoneDisplay}
              </a>
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
      <div className="container footer-grid">
        <section>
          <h2>${COMPANY.name}</h2>
          <p>${COMPANY.cityLine}</p>
          <p>Owner: ${COMPANY.owner}</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p><a href=${`tel:${COMPANY.phoneDigits}`}>${COMPANY.phoneDisplay}</a></p>
          <p><a href=${`mailto:${COMPANY.email}`}>${COMPANY.email}</a></p>
        </section>
        <section>
          <h2>License</h2>
          <p>${COMPANY.licenseLabel}</p>
          <p>
            <a href=${COMPANY.licenseUrl} target="_blank" rel="noreferrer">Verify with New Mexico RLD</a>
          </p>
        </section>
      </div>
      <p className="copyright">(c) ${year} ${COMPANY.name}. All rights reserved.</p>
    </footer>
  `;
}

export function SiteLayout({ activePage, hero, children }) {
  return html`
    <${React.Fragment}>
      <${Header} activePage=${activePage} />
      <main className="site-shell">
        <${Hero}
          eyebrow=${hero.eyebrow}
          title=${hero.title}
          lead=${hero.lead}
          primaryCta=${hero.primaryCta}
          secondaryCta=${hero.secondaryCta}
          note=${hero.note}
        />
        ${children}
      </main>
      <${Footer} />
    <//>
  `;
}

export function Section({ title, lead, id, children }) {
  return html`
    <section id=${id} className="section">
      <div className="container">
        <div className="section-head">
          <h2>${title}</h2>
          ${lead ? html`<p>${lead}</p>` : null}
        </div>
        ${children}
      </div>
    </section>
  `;
}

export function InfoCard({ title, text }) {
  return html`
    <article className="card">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}

export function TestimonialCard({ quote, author, context }) {
  return html`
    <article className="card testimonial-card">
      <p className="quote">"${quote}"</p>
      <p className="author">${author}</p>
      <p className="context">${context}</p>
    </article>
  `;
}

export function ResourceCard({ title, summary, href }) {
  return html`
    <article className="card resource-card">
      <h3>${title}</h3>
      <p>${summary}</p>
      <a className="text-link" href=${href}>Read article idea</a>
    </article>
  `;
}

export function ContactStrip({ title, text, buttonLabel, buttonHref }) {
  return html`
    <section className="section section-accent">
      <div className="container strip-row">
        <div>
          <h2>${title}</h2>
          <p>${text}</p>
        </div>
        <a className="btn btn-solid" href=${buttonHref}>${buttonLabel}</a>
      </div>
    </section>
  `;
}

export function EstimateForm() {
  const [status, setStatus] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Thanks. This demo form captured your request locally. The next step is wiring it to email or a CRM.");
    event.target.reset();
  }

  return html`
    <form className="estimate-form" onSubmit=${handleSubmit}>
      <label>
        Full Name
        <input type="text" name="name" required autocomplete="name" />
      </label>

      <label>
        Phone Number
        <input type="tel" name="phone" required autocomplete="tel" />
      </label>

      <label>
        Email
        <input type="email" name="email" required autocomplete="email" />
      </label>

      <label>
        Service Needed
        <select name="service" required>
          <option value="">Choose one</option>
          <optgroup label="Top 6 Most Requested Services">
            <option>Tape and Texture Wall Repair</option>
            <option>Interior or Exterior Residential Painting</option>
            <option>Tile Repair or Installation</option>
            <option>Water Heater Maintenance or Replacement</option>
            <option>Faucet, Shower Valve, P-Trap, or Disposal Repair</option>
            <option>Interior Trim and Baseboard Work</option>
          </optgroup>
          <optgroup label="Additional Services">
            <option>Drywall Installation</option>
            <option>Drywall Repair</option>
            <option>Electrical Work</option>
            <option>Exterior Painting</option>
            <option>Fan Installation</option>
            <option>Fan Repair</option>
            <option>Flooring Repair</option>
            <option>Furniture Assembly</option>
            <option>General Construction</option>
            <option>General Repairs</option>
            <option>Gutter Cleaning</option>
            <option>Home Maintenance and Repairs</option>
            <option>Install Flooring</option>
            <option>Interior Painting</option>
            <option>Moving Assistance</option>
            <option>Paint Indoors</option>
            <option>Painting</option>
            <option>Plumbing Fixture Installation</option>
            <option>Remodeling</option>
            <option>Repair Flooring</option>
            <option>Repair Water Fixtures</option>
            <option>Tile Work Installation</option>
            <option>Tile Work Replacement</option>
            <option>TV Mounting</option>
            <option>Evaporative Cooler Service</option>
            <option>Swamp Cooler Service</option>
            <option>Cabinets</option>
            <option>Flooring</option>
            <option>Interior Structural Repairs</option>
          </optgroup>
        </select>
      </label>

      <label>
        Project Details
        <textarea name="message" rows="5" placeholder="Tell us what needs to get done."></textarea>
      </label>

      <button className="btn btn-solid" type="submit">Request Free Estimate</button>
      ${status ? html`<p className="form-status" role="status">${status}</p>` : null}
    </form>
  `;
}
