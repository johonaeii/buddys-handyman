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
        eyebrow: "Get a free estimate",
        title: "Call, text, or send the form. It is that simple.",
        lead:
          "Choose whatever is easiest for you. Buddy responds to most inquiries within a few hours during business hours.",
        primaryCta: { label: "Call Now", href: getCallHref() },
        secondaryCta: { label: "Text Buddy", href: getTextHref() },
        note: "A family member helping with the repair? They can use this page too.",
      }}
    >
      <${Section}
        id="contact-options"
        title="Three easy ways to reach Buddy"
        lead="Pick whatever feels most comfortable. All three get you the same fast response."
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
        title="Send your project details online"
        lead="Fill out the basics and Buddy will follow up with a clear estimate."
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
