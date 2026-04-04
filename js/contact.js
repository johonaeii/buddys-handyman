import { html } from "./react-lib.js";
import { COMPANY, EstimateForm, Section, SiteLayout, mount } from "./site-shell.js";

function ContactPage() {
  return html`
    <${SiteLayout}
      activePage="contact"
      hero=${{
        eyebrow: "Free Estimates",
        title: "Call now or send a simple request.",
        lead:
          "If you would rather speak to a person, call. If a family member is helping with the repair, they can also use the form below.",
        primaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        secondaryCta: { label: "Jump to Form", href: "#estimate-form" },
        note: "We aim to respond the same business day.",
      }}
    >
      <${Section}
        id="contact-options"
        title="Contact Options"
        lead="Choose the easiest way to reach Buddy."
      >
        <div className="card-grid three-col">
          <article className="card">
            <h3>Phone</h3>
            <p>
              Best if you want to explain the job out loud and ask questions right away.
            </p>
            <a className="text-link" href=${`tel:${COMPANY.phoneDigits}`}>${COMPANY.phoneDisplay}</a>
          </article>
          <article className="card">
            <h3>Email</h3>
            <p>
              Helpful when you want to send photos or coordinate for a parent, relative, or rental property.
            </p>
            <a className="text-link" href=${`mailto:${COMPANY.email}`}>${COMPANY.email}</a>
          </article>
          <article className="card">
            <h3>Service Area</h3>
            <p>
              Serving Albuquerque and Rio Rancho, with scheduling based on the job and how urgent it is.
            </p>
            <p className="support-note">Local, dependable service</p>
          </article>
        </div>
      <//>

      <${Section}
        id="estimate-form"
        title="Request Your Free Estimate"
        lead="If forms are easier for you, this is the information Buddy needs to get started. This demo version is not connected to email yet."
      >
        <${EstimateForm} />
      <//>
    <//>
  `;
}

mount(html`<${ContactPage} />`);
