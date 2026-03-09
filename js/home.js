import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, InfoCard, Section, SiteLayout, mount } from "./site-shell.js";

const TOP_REVENUE_SERVICES = [
  {
    title: "Tape and Texture Wall Repair",
    text: "Patch wall damage and blend texture so repaired areas match the original finish.",
  },
  {
    title: "Residential Interior and Exterior Painting",
    text: "High-quality painting and touch-up work to refresh rooms, trim, and curb appeal.",
  },
  {
    title: "Tile Repair and Installation",
    text: "Repair cracked tile, replace damaged sections, and complete clean tile installations.",
  },
  {
    title: "Water Heater Service",
    text: "Maintenance and replacement services for reliable hot water performance.",
  },
  {
    title: "Faucet, Shower, and Drain Repairs",
    text: "Faucet and shower valve work, p-trap fixes, and garbage disposal replacements.",
  },
  {
    title: "Interior Trim and Baseboards",
    text: "Install and repair baseboards and trim with clean, professional finishing.",
  },
];

const ADDITIONAL_SERVICE_HIGHLIGHTS = [
  "Drywall installation and repair",
  "Electrical work",
  "Fan installation and fan repair",
  "Flooring installation and flooring repair",
  "Furniture assembly",
  "General construction and general repairs",
  "Gutter cleaning",
  "Home maintenance and repairs",
  "Plumbing fixture installation",
  "TV mounting",
  "Evaporative cooler service",
  "Swamp cooler service",
  "Cabinets and interior structural repairs",
  "Moving assistance",
];

function HomePage() {
  return html`
    <${SiteLayout}
      activePage="home"
      hero=${{
        eyebrow: "Most Requested Local Services",
        title: "Focused on doing it right the first time.",
        lead:
          "Buddy's Handyman Services in Albuquerque and Rio Rancho is centered on reliability, trust, and highest return on your investment.",
        primaryCta: { label: "Get Your Free Estimate", href: "contact.html" },
        secondaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        note: "Licensed and insured. Fast quotes for core repair and finish work.",
      }}
    >
      <${Section}
        id="featured"
        title="Buddy's in Action"
        lead="Professional results, clear communication, and clean job sites across Albuquerque and Rio Rancho."
      >
        <figure className="splash-figure">
          <img
            className="splash-image"
            src="images/splash.jpg"
            alt="Buddy's Handyman Services completing a residential repair project."
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Quality-first handyman support for repairs, upgrades, and ongoing home maintenance.
          </figcaption>
        </figure>
      <//>

      <${Section}
        id="highlights"
        title="These are the most requested services from Buddy"
        lead="These are the most called and most quoted jobs from last year."
      >
        <div className="card-grid three-col">
          ${TOP_REVENUE_SERVICES.map(
            (service) => html`<${InfoCard} key=${service.title} title=${service.title} text=${service.text} />`,
          )}
        </div>
      <//>

      <${Section}
        id="additional"
        title="Also Available Services"
        lead="Buddy's also provides a wider range of home repair and maintenance support across Albuquerque and Rio Rancho."
      >
        <div className="chip-row">
          ${ADDITIONAL_SERVICE_HIGHLIGHTS.map((service) => html`<span className="chip" key=${service}>${service}</span>`)}
        </div>
        <p>
          See the full service menu on <a className="text-link" href="services.html">the Services page</a>.
        </p>
      <//>

      <${Section}
        id="audience"
        title="Don't know where to start? Give us a call!"
        lead="Phone calls, mobile forms, and digital scheduling."
      >
        <div className="card-grid two-col">
          <${InfoCard}
            title="Senior-Friendly Experience"
            text="Don't want to deal with webpages and internet connection? Give us a call"
          />
          <${InfoCard}
            title="Digital Convenience"
            text="Online forms and review highlights. Book with confidence."
          />
        </div>
      <//>

      <${Section}
        id="process"
        title="Simple 3-Step Service Process"
        lead="Here's exactly what you can expect from first call to finished work."
      >
        <ol className="process-list">
          <li>
            <h3>1. Share Your Project</h3>
            <p>Call or submit the estimate form with photos, priority level, and ideal timeline.</p>
          </li>
          <li>
            <h3>2. Receive a Clear Plan</h3>
            <p>Get scope, pricing expectations, and next available appointment window.</p>
          </li>
          <li>
            <h3>3. Get It Done Right</h3>
            <p>Buddy arrives on time, completes the work professionally, and leaves the area clean.</p>
          </li>
        </ol>
      <//>

      <${ContactStrip}
        title="Need help this week?"
        text="Call now for a free estimate and same-week availability options in Albuquerque and Rio Rancho."
        buttonLabel=${`Call ${COMPANY.phoneDisplay}`}
        buttonHref=${`tel:${COMPANY.phoneDigits}`}
      />
    <//>
  `;
}

mount(html`<${HomePage} />`);
