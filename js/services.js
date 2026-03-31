import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, Section, SiteLayout, mount } from "./site-shell.js";

const TOP_ROI_SERVICE_GROUPS = [
  {
    title: "Tape, Texture, and Wall Patch Repair",
    items: [
      "Patch drywall holes and damaged sections",
      "Match existing wall texture",
      "Return walls to original finish quality",
    ],
  },
  {
    title: "Interior and Exterior Residential Painting",
    items: [
      "Interior room and trim painting",
      "Exterior paint refreshes",
      "Surface prep, touch-ups, and clean lines",
    ],
  },
  {
    title: "Tile Installation and Repair",
    items: [
      "Tile replacement for cracked or loose sections",
      "Backsplash, floor, and wall tile work",
      "Grout touch-up and finish detailing",
    ],
  },
  {
    title: "Water Heater Maintenance and Replacement",
    items: [
      "Water heater checks and routine maintenance",
      "Diagnose common hot water issues",
      "Replace units when repair is no longer cost-effective",
    ],
  },
  {
    title: "Faucet, Shower, P-Trap, and Disposal Repairs",
    items: [
      "Faucet and shower head repair or replacement",
      "Shower valve diagnostics and replacement",
      "P-trap fixes and garbage disposal replacement",
    ],
  },
  {
    title: "Interior Trim and Baseboards",
    items: [
      "Baseboard install and replacement",
      "Interior trim repairs and finish carpentry",
      "Seamless paint-ready finishing",
    ],
  },
];

const ADDITIONAL_SERVICE_GROUPS = [
  {
    title: "Drywall, Construction, and Structural",
    items: [
      "Drywall installation",
      "Drywall repair",
      "General construction",
      "General repairs",
      "Interior structural repairs",
      "Remodeling",
    ],
  },
  {
    title: "Electrical, Fans, and Mounting",
    items: [
      "Electrical work",
      "Fan installation",
      "Fan repair",
      "TV mounting",
      "Furniture assembly",
    ],
  },
  {
    title: "Flooring, Cabinets, and Finish Work",
    items: [
      "Install flooring",
      "Flooring installation",
      "Flooring repair",
      "Repair flooring",
      "Cabinets",
    ],
  },
  {
    title: "Plumbing and Water Fixture Support",
    items: [
      "Plumbing fixture installation",
      "Repair water fixtures",
      "Home maintenance and repairs",
    ],
  },
  {
    title: "Painting and Tile Variations",
    items: [
      "Painting",
      "Paint indoors",
      "Interior painting",
      "Exterior painting",
      "Tile work installation",
      "Tile work replacement",
    ],
  },
  {
    title: "Seasonal and Property Maintenance",
    items: [
      "Gutter cleaning",
      "Evaporative cooler service",
      "Swamp cooler service",
      "Moving assistance",
    ],
  },
];

function ServicesPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Top Rated Services in Albuquerque",
        title: "When you need a job done, call Buddy",
        lead:
          "These are the most called and most quoted jobs from last year, and the work Buddy's completes every week across Albuquerque and Rio Rancho.",
        primaryCta: { label: "Request a Free Estimate", href: "contact.html" },
        secondaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        note: "Trusted across Bernalillo County.",
      }}
    >
      <${Section}
        id="service-cards"
        title="Top 6 Most Called and Most Quoted Services"
        lead="If you need one of these six jobs, this is Buddy's core specialty list."
      >
        <div className="card-grid three-col">
          ${TOP_ROI_SERVICE_GROUPS.map(
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
        id="additional-services"
        title="Additional Services Also Available"
        lead="Along with the top 6 services above, Buddy's also handles the following jobs."
      >
        <div className="card-grid three-col">
          ${ADDITIONAL_SERVICE_GROUPS.map(
            (group) => html`
              <article className="card" key=${group.title}>
                <h3>${group.title}</h3>
                <ul className="bullet-list">
                  ${group.items.map((item) => html`<li key=${item}>${item}</li>`)}
                </ul>
              </article>
            `,
          )}
        </div>
      <//>

      <${Section}
        id="value-props"
        title="How Buddy's Works"
        lead="Built around top-performing service categories while still supporting broader home repair needs."
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
        text="Send a quick description and Buddy will match your project to one of the six core service categories."
        buttonLabel="Start Your Estimate"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${ServicesPage} />`);
