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
        eyebrow: "Handyman services in Albuquerque and Rio Rancho",
        title: "See what Buddy handles — then call or text for an estimate.",
        lead:
          "From small repairs to finish work. Browse the services below or call Buddy directly to talk through your project.",
        primaryCta: { label: "Call for a Free Estimate", href: getCallHref() },
        secondaryCta: { label: "Request Estimate Online", href: "contact.html#estimate-form" },
      }}
    >
      <${Section}
        id="featured-services"
        title="Core service categories"
        lead="Browse the main service categories below to see how Buddy can help with your project."
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
        title="Other handyman help is available too"
        lead="If your project is not listed here, reach out anyway. Many smaller repairs and follow-up jobs still fit the work Buddy handles."
      >
        <div className="chip-row">
          ${ADDITIONAL_HELP.map((item) => html`<span className="chip" key=${item}>${item}</span>`)}
        </div>
      <//>

      <${ContactStrip}
        title="Not sure where your project fits?"
        text="Call or text Buddy. Describe the job in plain language and get a straight answer about the best next step."
        buttonLabel="Call Buddy Now"
        buttonHref=${getCallHref()}
      />
    <//>
  `;
}

mount(html`<${ServicesPage} />`);
