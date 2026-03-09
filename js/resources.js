import { html } from "./react-lib.js";
import { ContactStrip, ResourceCard, Section, SiteLayout, mount } from "./site-shell.js";

const RESOURCE_IDEAS = [
  {
    title: "How to Choose a Trustworthy Handyman for Your Parent",
    summary:
      "Checklist for credentials, estimates, communication standards, and in-home professionalism.",
    href: "#",
  },
  {
    title: "Senior Home Safety Upgrades That Make a Big Difference",
    summary:
      "Grab bars, lighting, no-slip flooring, door hardware, and smart locks for safer daily living.",
    href: "#",
  },
  {
    title: "What to Include in a Handyman Punch List Before Selling",
    summary:
      "Small pre-sale repairs that improve buyer confidence and listing photos.",
    href: "#",
  },
  {
    title: "Smart-Home Tools That Help Families Support Aging Relatives",
    summary:
      "Simple devices and installation priorities that blend safety with convenience.",
    href: "#",
  },
  {
    title: "Annual Home Maintenance Calendar for Albuquerque Homes",
    summary:
      "Seasonal maintenance planning for weather shifts, exterior wear, and HVAC efficiency.",
    href: "#",
  },
  {
    title: "How to Prepare for a Contractor Visit",
    summary:
      "How to document issues, gather photos, and define project priorities in under 10 minutes.",
    href: "#",
  },
];

function ResourcesPage() {
  return html`
    <${SiteLayout}
      activePage="resources"
      hero=${{
        eyebrow: "Helpful Content",
        title: "Resource ideas that support trust, SEO, and referral sharing.",
        lead:
          "Use this page as a starter blog hub for maintenance tips and family-focused guidance.",
        primaryCta: { label: "See Contact Options", href: "contact.html" },
        secondaryCta: { label: "Explore Services", href: "services.html" },
        note: "Post one article per month to keep search visibility active.",
      }}
    >
      <${Section}
        id="resource-grid"
        title="Article Starters"
        lead="These topics were chosen from the audience insights in your competitor research summary."
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
        title="Want this section turned into a live blog next?"
        text="A lightweight CMS or static markdown workflow can power this without hurting site speed."
        buttonLabel="Plan Next Step"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${ResourcesPage} />`);
