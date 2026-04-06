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
    title: "Built for busy homeowners",
    text: "The funnel now puts the most important answers up front so people can tell quickly whether Buddy is the right person to call.",
  },
  {
    title: "Helpful for adult children too",
    text: "The copy and contact flow also support family members who are helping parents or grandparents arrange repairs.",
  },
];

const TRUST_POINTS = [
  {
    title: "Call or text first",
    text: "Visitors do not have to decode a complicated website before they reach out.",
  },
  {
    title: "Clear estimate path",
    text: "Every major page ends with the same simple next step: call, text, or send the estimate form.",
  },
  {
    title: "Local service area",
    text: "The messaging stays focused on Albuquerque and Rio Rancho instead of trying to sound broad or generic.",
  },
  {
    title: "Ready for proof assets",
    text: "This page is structured to accept verified reviews, licensing details, photos, and warranty information as soon as they are supplied.",
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
          "The About page now combines story, trust-building details, and review-ready sections so visitors can feel comfortable reaching out without digging through multiple pages.",
        primaryCta: { label: "Call Buddy", href: getCallHref() },
        secondaryCta: { label: "Text Buddy", href: getTextHref() },
        note: "As verified reviews, license details, and project photos come in, this page is ready to hold them in one place.",
      }}
    >
      <${Section}
        id="story"
        title="What this page needs to communicate"
        lead="The client wanted a simpler site that still feels trustworthy, family-friendly, and easy to understand."
      >
        <div className="card-grid two-col">
          ${STORY_POINTS.map(
            (item) => html`<${InfoCard} key=${item.title} title=${item.title} text=${item.text} />`,
          )}
        </div>
      <//>

      <${Section}
        id="trust-signals"
        title="Trust details the funnel can hold"
        lead="These blocks replace the old split between trust and reviews so the site can tell one consistent story."
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
            : null}
          ${COMPANY.warrantyLabel
            ? html`
                <article className="card">
                  <h3>Warranty or workmanship coverage</h3>
                  <p>${COMPANY.warrantyLabel}</p>
                </article>
              `
            : null}
        </div>
      <//>

      <${Section}
        id="reviews"
        title="Reviews and proof"
        lead="Verified customer reviews should live here as soon as the Google Business Profile link and approved testimonials are available."
      >
        <div className="split-layout">
          <article className="card">
            <h3>Google review link</h3>
            <p>
              Add the official review or profile URL here so visitors can confirm Buddy's reputation without leaving the funnel feeling unfinished.
            </p>
            ${COMPANY.googleReviewsUrl
              ? html`
                  <a className="btn btn-ghost" href=${COMPANY.googleReviewsUrl} target="_blank" rel="noreferrer">
                    See Reviews on Google
                  </a>
                `
              : html`<p className="inline-note">Google review link can be connected here when ready.</p>`}
          </article>

          <article className="card">
            <h3>Job photos and customer proof</h3>
            <p>
              Before-and-after photos, short job stories, and approved testimonials can be dropped into this layout without changing the rest of the page structure.
            </p>
            <div className="photo-grid">
              <div className="photo-placeholder">Before photo placeholder</div>
              <div className="photo-placeholder">After photo placeholder</div>
            </div>
          </article>
        </div>
      <//>

      <${ContactStrip}
        title="Want to talk through the job instead of reading more?"
        text="Call or text Buddy and explain the repair in your own words."
        buttonLabel="Go to Contact"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${AboutPage} />`);
