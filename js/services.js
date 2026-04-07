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
        eyebrow: "Local handyman services",
        title: "See what Buddy handles before you even make the call.",
        lead:
          "From small repairs to finish work, Buddy helps with the kinds of jobs homeowners need done carefully and clearly.",
        primaryCta: { label: "Call to Talk It Through", href: getCallHref() },
        secondaryCta: { label: "Jump to the Contact Page", href: "contact.html#estimate-form" },
        note: "If you are not sure which service fits your project, call or text and ask.",
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
        title="Need help deciding where your project fits?"
        text="Call first, describe the job in plain language, and Buddy can tell you the best next step."
        buttonLabel="Call Buddy Now"
        buttonHref=${getCallHref()}
      />
    <//>
  `;
}

mount(html`<${ServicesPage} />`);
