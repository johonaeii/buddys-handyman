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
          "Baseboards, trim, and finishing details help a room look complete and well cared for.",
        primaryCta: { label: "Call About Trim Work", href: getCallHref() },
        secondaryCta: { label: "Text the Room Details", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Common trim and finish work"
        lead="Examples of jobs Buddy can help with:"
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common trim requests</h3>
            <ul className="bullet-list">
              ${JOBS.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </article>

          <article className="card">
            <h3>Recent work</h3>
            <div className="photo-grid">
              <div className="photo-placeholder">Before photo</div>
              <div className="photo-placeholder">After photo</div>
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
