import { html } from "./react-lib.js";
import {
  COMPANY,
  EstimateForm,
  Section,
  SiteLayout,
  getCallHref,
  getTextHref,
  mount,
} from "./site-shell.js";

function ContactPage() {
  return html`
    <${SiteLayout}
      activePage="contact"
      hero=${{
        eyebrow: "Contact Buddy's Handyman Services",
        title: "Call, text, or send the estimate form.",
        lead:
          "This contact page keeps only the essentials: how to reach Buddy, when to expect a response, and a form that captures the basics without wasting time.",
        primaryCta: { label: "Call Buddy", href: getCallHref() },
        secondaryCta: { label: "Text Buddy", href: getTextHref() },
        note: "If a family member is helping with the repair, they can use this form too.",
      }}
    >
      <${Section}
        id="contact-options"
        title="Choose the easiest way to start"
        lead="The funnel should never force someone into a form when a phone call or quick text is the better option."
      >
        <div className="card-grid three-col">
          <article className="card">
            <h3>Call</h3>
            <p>Best for people who want to describe the job out loud and ask questions right away.</p>
            <a className="text-link" href=${getCallHref()}>${COMPANY.phoneDisplay}</a>
          </article>

          <article className="card">
            <h3>Text</h3>
            <p>Useful when you want to send a short note first or follow up from a mobile device.</p>
            <a className="text-link" href=${getTextHref()}>Text ${COMPANY.textDisplay}</a>
          </article>

          <article className="card">
            <h3>Service area</h3>
            <p>${COMPANY.cityLine}</p>
            <p className="inline-note">${COMPANY.responseLine}</p>
          </article>
        </div>
      <//>

      <${Section}
        id="estimate-form"
        title="Send the job details online"
        lead="This form is wired for Netlify form handling and collects the key details Buddy needs for follow-up."
      >
        <div className="split-layout">
          <aside className="contact-panel">
            <p className="panel-eyebrow">Business hours</p>
            <h3>When to expect a reply</h3>
            <div className="detail-list">
              ${COMPANY.businessHours.map(
                (item) => html`
                  <div key=${item}>
                    <strong>Hours</strong>
                    <span>${item}</span>
                  </div>
                `,
              )}
            </div>

            <div className="action-row is-stacked">
              <a className="btn btn-solid" href=${getCallHref()}>Call ${COMPANY.phoneDisplay}</a>
              <a className="btn btn-ghost" href=${getTextHref()}>Text ${COMPANY.textDisplay}</a>
            </div>
          </aside>

          <div>
            <${EstimateForm} contextLabel="Contact Page" submitLabel="Send Contact Request" />
          </div>
        </div>
      <//>
    <//>
  `;
}

mount(html`<${ContactPage} />`);
