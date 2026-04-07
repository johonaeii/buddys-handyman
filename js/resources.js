import { html } from "./react-lib.js";
import { ContactStrip, ResourceCard, Section, SiteLayout, mount } from "./site-shell.js";

const RESOURCE_IDEAS = [
  {
    title: "When to Patch and Texture vs Replace Entire Drywall Sections",
    summary:
      "Guide homeowners through cost, appearance, and durability tradeoffs for wall damage repair.",
    href: "#",
  },
  {
    title: "Interior vs Exterior Painting: Budget and Timeline Planning",
    summary:
      "Set clear expectations for prep, weather timing, and finish quality in residential paint projects.",
    href: "#",
  },
  {
    title: "How to Spot Early Tile Failure Before It Spreads",
    summary:
      "Help homeowners identify grout cracks, moisture issues, and loose tile before bigger repairs are needed.",
    href: "#",
  },
  {
    title: "Water Heater Maintenance Checklist for Albuquerque Homes",
    summary:
      "Seasonal checklist to improve reliability and know when replacement is the better choice.",
    href: "#",
  },
  {
    title: "Common Faucet, Shower Valve, and Disposal Problems Explained",
    summary:
      "Simple breakdown of repair options, replacement triggers, and ways to avoid recurring plumbing issues.",
    href: "#",
  },
  {
    title: "Baseboards and Interior Trim: Small Upgrades with Big Visual Impact",
    summary:
      "Show homeowners how trim and baseboard improvements sharpen room appearance and resale appeal.",
    href: "#",
  },
];

function ResourcesPage() {
  return html`
    <${SiteLayout}
      activePage="resources"
      hero=${{
        eyebrow: "Helpful Content",
        title: "Helpful tips for common home repair questions.",
        lead:
          "This section can share simple advice, repair tips, and project ideas for homeowners in Albuquerque and Rio Rancho.",
        primaryCta: { label: "See Contact Options", href: "contact.html" },
        secondaryCta: { label: "Explore Services", href: "services.html" },
        note: "Simple advice for common repair and maintenance questions.",
      }}
    >
      <${Section}
        id="resource-grid"
        title="Featured article ideas"
        lead="These topics can help homeowners learn more about repairs before they call."
      >
        <div className="card-grid three-col">
          ${RESOURCE_IDEAS.map(
            (item) => html`
              <${ResourceCard}
                key=${item.title}
                title=${item.title}
                summary=${item.summary}
                href=${item.href}
              />
            `,
          )}
        </div>
      <//>

      <${ContactStrip}
        title="Need help with a repair now?"
        text="Call or text Buddy to talk through the project and get the next step."
        buttonLabel="Contact Buddy"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${ResourcesPage} />`);
