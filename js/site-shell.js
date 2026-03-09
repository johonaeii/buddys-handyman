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
  return html`
    <header className="top-header" aria-label="Main navigation">
      <div className="container header-row">
        <a className="brand" href="index.html" aria-label="Buddy's Handyman Services home">
          <span className="brand-mark" aria-hidden="true">BH</span>
          <span>
            <strong>${COMPANY.name}</strong>
            <small>${COMPANY.cityLine}</small>
          </span>
        </a>

        <div className="quick-contact">
          <a className="phone-link" href=${`tel:${COMPANY.phoneDigits}`}>Call ${COMPANY.phoneDisplay}</a>
          <a className="btn btn-solid" href="contact.html">Free Estimate</a>
        </div>
      </div>

      <nav className="container nav-bar" aria-label="Primary">
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
    </header>
  `;
}

function Hero({ eyebrow, title, lead, primaryCta, secondaryCta, note }) {
  return html`
    <section className="hero">
      <div className="container hero-panel">
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

function ParallaxBackground() {
  const bgRef = React.useRef(null);

  React.useEffect(() => {
    if (!bgRef.current) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let rafId = 0;
    const update = () => {
      rafId = 0;
      const speed = window.innerWidth <= 760 ? 0.08 : 0.14;
      const y = -window.scrollY * speed;
      bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.2)`;
    };

    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return html`<div className="parallax-bg" ref=${bgRef} aria-hidden="true"></div>`;
}

export function SiteLayout({ activePage, hero, children }) {
  return html`
    <${React.Fragment}>
      <${ParallaxBackground} />
      <${Header} activePage=${activePage} />
      <main>
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
    setStatus("Thanks. Your request was captured in this demo UI. Connect this form to your email or CRM next.");
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
