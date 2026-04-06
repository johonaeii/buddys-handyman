import { html } from "./react-lib.js";
import { ContactStrip, Section, SiteLayout, getCallHref, getTextHref, mount } from "./site-shell.js";

const JOBS = [
  "Install or replace baseboards",
  "Repair trim that has wear, damage, or unfinished edges",
  "Tighten up finish details before a move, listing, or repaint",
  "Help a room feel complete again after larger repair work",
];

function TrimPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Trim, baseboards, and finish carpentry",
        title: "Finish the room with clean trim work and tighter details.",
        lead:
          "This page helps visitors understand that Buddy handles the finish-stage jobs that make a home look complete again.",
        primaryCta: { label: "Call About Trim Work", href: getCallHref() },
        secondaryCta: { label: "Text the Room Details", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Finish work this page should convert"
        lead="Use straightforward examples that homeowners recognize right away."
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common trim requests</h3>
            <ul className="bullet-list">
              ${JOBS.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </article>

          <article className="card">
            <h3>Photo placeholders</h3>
            <div className="photo-grid">
              <div className="photo-placeholder">Before trim photo placeholder</div>
              <div className="photo-placeholder">After trim photo placeholder</div>
            </div>
          </article>
        </div>
      <//>

      <${ContactStrip}
        title="Need baseboards or trim cleaned up before the room is finished?"
        text="Call or text Buddy with the room, the trim issue, and whether the materials are already on site."
        buttonLabel="Request an Estimate"
        buttonHref="contact.html#estimate-form"
      />
    <//>
  `;
}

mount(html`<${TrimPage} />`);
