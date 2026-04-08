import { html } from "./react-lib.js";
import {
  COMPANY,
  EstimateForm,
  FEATURED_SERVICES,
  InfoCard,
  Section,
  SiteLayout,
  TRUST_PROMISES,
  getCallHref,
  getTextHref,
  mount,
} from "./site-shell.js";

const PROCESS_STEPS = [
  {
    title: "1. Call or text Buddy",
    text: "Describe the repair or project in your own words. No forms required.",
  },
  {
    title: "2. Get a clear estimate",
    text: "Buddy explains the work, the cost, and the timeline before anything starts.",
  },
  {
    title: "3. Schedule the job",
    text: "Pick a time that works. Buddy shows up on time and finishes the work right.",
  },
];

const TRUST_FACTS = [
  {
    title: "Clear estimates, no surprises",
    text: "You know the cost and the plan before any work begins. If something changes, Buddy tells you first.",
  },
  {
    title: "Built for families",
    text: "Adult children and caregivers can call, text, or send the estimate form on behalf of a parent or grandparent.",
  },
  {
    title: "Respectful of your home",
    text: "Clean work areas, careful handling, and a tidy finish every time.",
  },
  {
    title: "Easy to reach, easy to understand",
    text: "Call or text and get a real person. No phone trees, no waiting days for a callback.",
  },
];

function HomePage() {
  return html`
    <${SiteLayout}
      activePage="home"
      hero=${{
        eyebrow: "Free estimates — call or text today",
        title: "Reliable handyman help in Albuquerque and Rio Rancho.",
        lead:
          "Drywall, painting, tile, plumbing, trim, and general repairs. Call or text for a free estimate from a local handyman who shows up on time and communicates clearly.",
        primaryCta: { label: "Call for a Free Estimate", href: getCallHref() },
        secondaryCta: { label: "Text Buddy Now", href: getTextHref() },
        note: "Or scroll down to send your project details online.",
        highlights: TRUST_PROMISES,
      }}
    >
      <${Section}
        id="services-summary"
        title="What Buddy can help with"
        lead="From wall repairs to plumbing fixes, these are the jobs Albuquerque and Rio Rancho homeowners ask about most."
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
                linkLabel="See details"
              />
            `,
          )}
        </div>
        <div className="section-cta">
          <a className="text-link" href="services.html">See all services Buddy handles</a>
        </div>
      <//>

      <${Section}
        id="trust-flow"
        title="Why families choose Buddy"
        lead="Clear communication, honest estimates, and careful work. Here is how it works."
      >
        <div className="split-layout">
          <div className="stack-list">
            ${TRUST_FACTS.map(
              (item) => html`
                <article className="card" key=${item.title}>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>
              `,
            )}
          </div>

          <div className="process-stack">
            ${PROCESS_STEPS.map(
              (step) => html`
                <article className="step-card" key=${step.title}>
                  <h3>${step.title}</h3>
                  <p>${step.text}</p>
                </article>
              `,
            )}
          </div>
        </div>
      <//>

      <${Section}
        id="estimate"
        title="Request a free estimate"
        lead="Call or text if that is easiest. You can also send the basics here and Buddy will follow up."
      >
        <div className="split-layout">
          <aside className="contact-panel">
            <p className="panel-eyebrow">Quick contact</p>
            <h3>Talk to a real person fast</h3>
            <p>${COMPANY.responseLine}</p>

            <div className="action-row is-stacked">
              <a className="btn btn-solid" href=${getCallHref()}>Call ${COMPANY.phoneDisplay}</a>
              <a className="btn btn-ghost" href=${getTextHref()}>Text ${COMPANY.textDisplay}</a>
            </div>

            <div className="detail-list">
              <div>
                <strong>Service area</strong>
                <span>${COMPANY.cityLine}</span>
              </div>
              ${COMPANY.businessHours.map(
                (item, index) => html`
                  <div key=${`${item}-${index}`}>
                    <strong>${index === 0 ? "Hours" : " "}</strong>
                    <span>${item}</span>
                  </div>
                `,
              )}
            </div>
          </aside>

          <div>
            <${EstimateForm} contextLabel="Home Page" submitLabel="Send Estimate Request" />
          </div>
        </div>
      <//>
    <//>
  `;
}

mount(html`<${HomePage} />`);
