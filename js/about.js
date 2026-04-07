import { html } from "./react-lib.js";
import {
  COMPANY,
  ContactStrip,
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
    text: "Buddy's Handyman Services is centered on clear communication, dependable scheduling, and careful work from start to finish.",
  },
  {
    title: "Helpful for homeowners and families",
    text: "Homeowners, adult children, and caregivers can all reach out to ask questions and coordinate repairs.",
  },
];

const TRUST_POINTS = [
  {
    title: "Clear estimates",
    text: "Talk through the job, ask questions, and understand the next step before work begins.",
  },
  {
    title: "Respectful service",
    text: "Friendly communication, careful work, and a clean finish matter on every job.",
  },
  {
    title: "Licensed and insured",
    text: "Business details, coverage information, and other credentials can be shared as soon as they are finalized.",
  },
  {
    title: "Local service area",
    text: "Serving Albuquerque and Rio Rancho with practical repair help for everyday home projects.",
  },
];

function AboutPage() {
  return html`
    <${SiteLayout}
      activePage="about"
      hero=${{
        eyebrow: "About Buddy's Handyman Services",
        title: "Trust is easier when the next step is clear.",
        lead:
          "Buddy's Handyman Services is built around clear communication, dependable service, and careful work in the home.",
        primaryCta: { label: "Call Buddy", href: getCallHref() },
        secondaryCta: { label: "Text Buddy", href: getTextHref() },
        note: "Clear communication, careful work, and dependable follow-through matter on every job.",
      }}
    >
      <${Section}
        id="story"
        title="Straightforward, neighborly service"
        lead="Home repair should feel simple and comfortable from the first call."
      >
        <div className="card-grid two-col">
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
          ${COMPANY.licenseLabel
            ? html`
                <article className="card">
                  <h3>License information</h3>
                  <p>${COMPANY.licenseLabel}</p>
                  <a className="text-link" href=${COMPANY.licenseUrl} target="_blank" rel="noreferrer">
                    Verify with New Mexico RLD
                  </a>
                </article>
              `
            : html`
                <article className="card">
                  <h3>License information</h3>
                  <p>License details available on request.</p>
                </article>
              `}
          ${COMPANY.warrantyLabel
            ? html`
                <article className="card">
                  <h3>Warranty or workmanship coverage</h3>
                  <p>${COMPANY.warrantyLabel}</p>
                </article>
              `
            : html`
                <article className="card">
                  <h3>Workmanship coverage</h3>
                  <p>Warranty details available on request.</p>
                </article>
              `}
        </div>
      <//>

      <${Section}
        id="reviews"
        title="Reviews and project photos"
        lead="Customer feedback and project photos help show the quality of the work."
      >
        <div className="split-layout">
          <article className="card">
            <h3>Customer reviews</h3>
            <p>
              Customer reviews help homeowners feel comfortable before they call.
            </p>
            ${COMPANY.googleReviewsUrl
              ? html`
                  <a className="btn btn-ghost" href=${COMPANY.googleReviewsUrl} target="_blank" rel="noreferrer">
                    See Reviews on Google
                  </a>
                `
              : html`<p className="inline-note">Recent customer feedback will appear here.</p>`}
          </article>

          <article className="card">
            <h3>Recent project photos</h3>
            <p>
              Project photos can show repair quality, finished work, and the kinds of jobs Buddy handles most often.
            </p>
            <div className="photo-grid">
              <div className="photo-placeholder">Project photo</div>
              <div className="photo-placeholder">Finished result</div>
            </div>
          </article>
        </div>
      <//>

      <${ContactStrip}
        title="Have a job you'd like to talk through?"
        text="Call or text Buddy and explain what needs to be done."
        buttonLabel="Contact Buddy"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${AboutPage} />`);
