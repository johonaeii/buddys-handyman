import { html } from "./react-lib.js";
import {
  ContactStrip,
  FEATURED_SERVICES,
  InfoCard,
  Section,
  SiteLayout,
  getCallHref,
  mount,
} from "./site-shell.js";

const ADDITIONAL_HELP = [
  "General home repairs",
  "Fixture swaps and small updates",
  "Fan installation and replacement",
  "Flooring touch-ups",
  "Cabinet adjustments",
  "Punch-list style repairs",
  "Property prep before photos or move-in",
  "Seasonal maintenance items",
];

function ServicesPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Services built for a faster yes-or-no decision",
        title: "See what Buddy handles before you even make the call.",
        lead:
          "This page keeps the services organized in homeowner language so visitors can quickly tell whether Buddy is the right fit for the job.",
        primaryCta: { label: "Call to Talk It Through", href: getCallHref() },
        secondaryCta: { label: "Jump to the Contact Page", href: "contact.html#estimate-form" },
        note: "Every service page ends with a simple contact path so visitors are never stranded.",
      }}
    >
      <${Section}
        id="featured-services"
        title="Core service categories"
        lead="These are the major pages the funnel now routes people into from the home page and service overview."
      >
        <div className="card-grid three-col">
          ${FEATURED_SERVICES.map(
            (service) => html`
              <${InfoCard}
                key=${service.id}
                eyebrow=${service.eyebrow}
                title=${service.title}
                text=${service.text}
                href=${service.href}
                linkLabel="Open service page"
              />
            `,
          )}
        </div>
      <//>

      <${Section}
        id="additional-help"
        title="Other handyman help still fits the conversation"
        lead="If the project is not an exact match for one of the main categories, the site still makes room for smaller repair needs and follow-up questions."
      >
        <div className="chip-row">
          ${ADDITIONAL_HELP.map((item) => html`<span className="chip" key=${item}>${item}</span>`)}
        </div>
      <//>

      <${ContactStrip}
        title="Need help deciding where your project fits?"
        text="Call first, describe the job in plain language, and Buddy can tell you the best next step."
        buttonLabel="Call Buddy Now"
        buttonHref=${getCallHref()}
      />
    <//>
  `;
}

mount(html`<${ServicesPage} />`);
