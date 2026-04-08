import { html } from "./react-lib.js";
import {
  COMPANY,
  ContactStrip,
  EstimateForm,
  InfoCard,
  Section,
  SiteLayout,
  getCallHref,
  getTextHref,
  mount,
} from "./site-shell.js";

const STORY_POINTS = [
  {
    title: "Local and dependable",
    text: "Buddy's Handyman Services is a local operation built on showing up when promised, communicating clearly, and doing careful work from start to finish.",
  },
  {
    title: "Helpful for homeowners and families",
    text: "Whether you are the homeowner or an adult child coordinating repairs for a parent, Buddy makes it easy to ask questions, get a clear estimate, and schedule the work.",
  },
  {
    title: "No job is too small",
    text: "A leaky faucet, a scuffed wall, a loose baseboard. Many handyman services skip small jobs. Buddy handles them all with the same care.",
  },
];

const TRUST_POINTS = [
  {
    title: "Clear estimates before work begins",
    text: "You will know the scope, the cost, and the timeline before Buddy picks up a tool. No surprises.",
  },
  {
    title: "Respectful of your home",
    text: "Clean work areas, careful handling, and a tidy finish. Your home is treated the way you would treat it.",
  },
  {
    title: "Easy to reach",
    text: "Call or text and get a real answer. No phone trees, no automated runaround, no waiting days for a callback.",
  },
  {
    title: "Local to Albuquerque and Rio Rancho",
    text: "Buddy lives and works in the community. Shorter response times, familiar with local homes, and accountable to neighbors.",
  },
];

function AboutPage() {
  return html`
    <${SiteLayout}
      activePage="about"
      hero=${{
        eyebrow: "About Buddy's Handyman Services",
        title: "A local handyman you can trust with your home.",
        lead:
          "Buddy's Handyman Services helps Albuquerque and Rio Rancho homeowners get repairs done right, with honest communication and respect for your home.",
        primaryCta: { label: "Call for an Estimate", href: getCallHref() },
        secondaryCta: { label: "Text Buddy Now", href: getTextHref() },
      }}
    >
      <${Section}
        id="story"
        title="Straightforward, neighborly service"
        lead="Home repair should feel simple and comfortable from the first call to the finished job."
      >
        <div className="card-grid three-col">
          ${STORY_POINTS.map(
            (item) => html`<${InfoCard} key=${item.title} title=${item.title} text=${item.text} />`,
          )}
        </div>
      <//>

      <${Section}
        id="trust-signals"
        title="What you can expect"
        lead="Clear answers, honest estimates, and work done with care."
      >
        <div className="card-grid two-col">
          ${TRUST_POINTS.map(
            (item) => html`<${InfoCard} key=${item.title} title=${item.title} text=${item.text} />`,
          )}
        </div>
      <//>

      <${Section}
        id="estimate"
        title="Ready to talk about a repair?"
        lead="Call, text, or fill out the form and Buddy will follow up with a clear next step."
      >
        <div className="split-layout">
          <aside className="contact-panel">
            <p className="panel-eyebrow">Quick contact</p>
            <h3>Talk to Buddy directly</h3>
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
            <${EstimateForm} contextLabel="About Page" submitLabel="Request Free Estimate" />
          </div>
        </div>
      <//>
    <//>
  `;
}

mount(html`<${AboutPage} />`);
