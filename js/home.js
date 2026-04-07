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
    title: "1. Call or text",
    text: "Tell Buddy what needs attention and share any details that would help with the estimate.",
  },
  {
    title: "2. Get a clear estimate",
    text: "Talk through the repair, the next step, and the best timing for the job.",
  },
  {
    title: "3. Schedule the work",
    text: "Once everything looks right, Buddy can get your project on the calendar.",
  },
];

const TRUST_FACTS = [
  {
    title: "Easy to understand",
    text: "Clear service descriptions and simple contact options make it easier to get started.",
  },
  {
    title: "Helpful for family helpers",
    text: "Adult children and caregivers can call, text, or send the estimate form for a parent or grandparent.",
  },
  {
    title: "Respectful service",
    text: "Friendly communication, careful work, and clean-up matter on every job.",
  },
  {
    title: "Straightforward next steps",
    text: "Call, text, or send the form and get a clear response about what to do next.",
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
        lead="From wall repairs to trim work, these are some of the jobs homeowners ask about most often."
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
        title="How it works"
        lead="From the first call to the finished job, the process stays simple and easy to understand."
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
        lead="Call or text if that is easiest. You can also send the basics here and Buddy can follow up with the next step."
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
