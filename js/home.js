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
        eyebrow: "Home Repair You Can Trust",
        title: "Clear, careful help for repairs around the house.",
        lead:
          "Buddy helps homeowners in Albuquerque and Rio Rancho with repairs, painting, tile, trim, and everyday home projects. You can call first, ask questions, and get a clear estimate before work begins.",
        primaryCta: { label: "Request a Free Estimate", href: "contact.html" },
        secondaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        note: "Licensed, insured, respectful in your home, and easy to reach by phone.",
      }}
    >
      <${Section}
        id="highlights"
        title="Common jobs Buddy handles"
        lead="These are some of the repair and finish jobs homeowners ask for most often."
      >
        <div className="card-grid three-col">
          ${TOP_REVENUE_SERVICES.map(
            (service) => html`<${InfoCard} key=${service.title} title=${service.title} text=${service.text} />`,
          )}
        </div>
      <//>

      <${Section}
        id="additional"
        title="Other help is available too"
        lead="If your project is not listed here, call and ask. If it fits Buddy's work, you will get a clear answer."
      >
        <div className="chip-row">
          ${ADDITIONAL_SERVICE_HIGHLIGHTS.map((service) => html`<span className="chip" key=${service}>${service}</span>`)}
        </div>
        <p>
          See the full service list on <a className="text-link" href="services.html">the Services page</a>.
        </p>
      <//>

      <${Section}
        id="audience"
        title="Prefer to talk by phone?"
        lead="That is completely okay. You do not need to figure everything out online first."
      >
        <div className="card-grid two-col">
          <${InfoCard}
            title="Easy To Reach"
            text="If forms feel frustrating, just call. You can explain the job in your own words and ask questions."
          />
          <${InfoCard}
            title="Helpful For Family Members"
            text="Adult children, caregivers, or neighbors can also use the form and reviews when helping with a repair."
          />
        </div>
      <//>

      <${Section}
        id="process"
        title="What working with Buddy looks like"
        lead="Simple steps, clear communication, and no pressure."
      >
        <ol className="process-list">
          <li>
            <h3>1. Tell Buddy What You Need</h3>
            <p>Call or send a short request and describe the repair in plain language.</p>
          </li>
          <li>
            <h3>2. Get A Clear Estimate</h3>
            <p>You will hear what the job involves, what it may cost, and when it can be scheduled.</p>
          </li>
          <li>
            <h3>3. Have The Work Done Carefully</h3>
            <p>Buddy shows up on time, does the work carefully, and leaves the area clean.</p>
          </li>
        </ol>
      <//>

      <${ContactStrip}
        title="Need help soon?"
        text="Call now to talk through the job and ask about the next available opening."
        buttonLabel=${`Call ${COMPANY.phoneDisplay}`}
        buttonHref=${`tel:${COMPANY.phoneDigits}`}
      />
    <//>
  `;
}

mount(html`<${HomePage} />`);
