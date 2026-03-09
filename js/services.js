import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, Section, SiteLayout, mount } from "./site-shell.js";

const SERVICE_GROUPS = [
  {
    title: "General Handyman",
    items: ["Door and lock repairs", "Ceiling fan replacement", "Shelving and TV mounting", "Punch-list completion"],
  },
  {
    title: "Plumbing and Fixture Installs",
    items: ["Faucet and garbage disposal installs", "Toilet and vanity replacement", "Leak diagnostics", "Water-saving upgrades"],
  },
  {
    title: "Electrical and Lighting",
    items: ["Light fixture swaps", "Switch and outlet upgrades", "Smoke detector replacements", "Outdoor lighting"],
  },
  {
    title: "Painting and Drywall",
    items: ["Drywall patches", "Interior touch-up painting", "Trim refresh", "Wall prep and finishing"],
  },
  {
    title: "Carpentry and Trim",
    items: ["Baseboard repairs", "Cabinet hardware", "Fence and gate repairs", "Custom storage support"],
  },
  {
    title: "Smart-Home Installation",
    items: ["Video doorbells", "Smart locks", "Smart thermostats", "Safety-focused home tech"],
  },
];

function ServicesPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Service Categories",
        title: "One local team for repairs, maintenance, and practical upgrades.",
        lead:
          "From small repairs to planned improvements, Buddy's Handyman Services delivers clear communication and reliable timelines.",
        primaryCta: { label: "Request a Free Estimate", href: "contact.html" },
        secondaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        note: "Serving both residential and light commercial needs.",
      }}
    >
      <${Section}
        id="service-cards"
        title="Popular Services"
        lead="Competitor research shows visitors convert faster when services are listed in plain language."
      >
        <div className="card-grid three-col">
          ${SERVICE_GROUPS.map(
            (group) => html`
              <article className="card" key=${group.title}>
                <h3>${group.title}</h3>
                <ul className="bullet-list">
                  ${group.items.map((item) => html`<li key=${item}>${item}</li>`)}</ul>
              </article>
            `,
          )}
        </div>
      <//>

      <${Section}
        id="value-props"
        title="How Buddy's Works"
        lead="These value points align with the strongest contractor messaging in Albuquerque and Rio Rancho."
      >
        <div className="chip-row">
          <span className="chip">No job too small</span>
          <span className="chip">Transparent pricing</span>
          <span className="chip">Prompt arrivals</span>
          <span className="chip">Worksite cleanliness</span>
          <span className="chip">Respectful communication</span>
          <span className="chip">Free estimates</span>
        </div>
      <//>

      <${ContactStrip}
        title="Not sure which category fits your project?"
        text="Send a quick description and Buddy will recommend the best service plan."
        buttonLabel="Start Your Estimate"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${ServicesPage} />`);
