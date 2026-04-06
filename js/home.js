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
    title: "1. Call or text the job",
    text: "Explain what needs attention in plain language. Family members can reach out too.",
  },
  {
    title: "2. Get a clear next step",
    text: "Buddy talks through the repair, timing, and whether an estimate or visit makes sense next.",
  },
  {
    title: "3. Move the project forward",
    text: "Once the job is approved, scheduling stays simple and communication stays direct.",
  },
];

const TRUST_FACTS = [
  {
    title: "Easy to understand",
    text: "The site is built around plain language, simple next steps, and direct contact options.",
  },
  {
    title: "Helpful for family helpers",
    text: "Adult children and caregivers can call, text, or send the estimate form for a parent or grandparent.",
  },
  {
    title: "Focused on local jobs",
    text: "The message stays centered on the repair work homeowners in Albuquerque and Rio Rancho ask for most.",
  },
  {
    title: "Built to turn visits into calls",
    text: "Every major section points back to a call, text, or estimate request instead of sending people in circles.",
  },
];

function HomePage() {
  return html`
    <${SiteLayout}
      activePage="home"
      hero=${{
        eyebrow: "Free estimates by phone or text",
        title: "Handyman services you can trust in Albuquerque and Rio Rancho.",
        lead:
          "Buddy's Handyman Services helps homeowners and family helpers get repairs moving without a confusing website or a long back-and-forth process.",
        primaryCta: { label: "Call for an Estimate", href: getCallHref() },
        secondaryCta: { label: "Text Buddy Now", href: getTextHref() },
        note: "Prefer to send details online first? Scroll down and request an estimate in a few simple fields.",
        highlights: TRUST_PROMISES,
      }}
    >
      <${Section}
        id="services-summary"
        title="Start with the most requested jobs"
        lead="These are the service categories the site now pushes to the front so visitors can see right away that Buddy handles the work they need."
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
                linkLabel="See service details"
              />
            `,
          )}
        </div>
      <//>

      <${Section}
        id="trust-flow"
        title="A simpler path from question to estimate"
        lead="The home page now guides visitors from what Buddy does, to why they should feel comfortable calling, to the next step."
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
        title="Request an estimate without the runaround"
        lead="Call or text if that is easiest. If you want to send the details first, the form below is Netlify-ready and built to capture the basics Buddy needs."
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
