import { html } from "./react-lib.js";
import { COMPANY, EstimateForm, Section, SiteLayout, mount } from "./site-shell.js";

function ContactPage() {
  return html`
    <${SiteLayout}
      activePage="contact"
      hero=${{
        eyebrow: "Free Estimates on Core Services",
        title: "Call now or send a quick request.",
        lead:
          "Get a fast quote for tape and texture, painting, tile, water heater work, plumbing fixture repairs, or interior trim and baseboards.",
        primaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        secondaryCta: { label: "Jump to Form", href: "#estimate-form" },
        note: "Response target: same business day.",
      }}
    >
      <${Section}
        id="contact-options"
        title="Contact Options"
        lead="Choose the method that works best for you or your family."
      >
        <div className="card-grid three-col">
          <article className="card">
            <h3>Phone</h3>
            <p>
              Best for urgent repairs or older homeowners who prefer direct communication.
            </p>
            <a className="text-link" href=${`tel:${COMPANY.phoneDigits}`}>${COMPANY.phoneDisplay}</a>
          </article>
          <article className="card">
            <h3>Email</h3>
            <p>
              Ideal for project details, attachments, and out-of-state family coordination.
            </p>
            <a className="text-link" href=${`mailto:${COMPANY.email}`}>${COMPANY.email}</a>
          </article>
          <article className="card">
            <h3>Service Area</h3>
            <p>
              Albuquerque and Rio Rancho, with scheduling based on project scope and urgency.
            </p>
            <p className="text-link">Local and reliable coverage</p>
          </article>
        </div>
      <//>

      <${Section}
        id="estimate-form"
        title="Request Your Free Estimate"
        lead="This starter form is front-end only. Connect it to your email platform, CRM, or scheduling tool next."
      >
        <${EstimateForm} />
      <//>
    <//>
  `;
}

mount(html`<${ContactPage} />`);
