import { html } from "./react-lib.js";
import { ContactStrip, Section, SiteLayout, getCallHref, getTextHref, mount } from "./site-shell.js";

const JOBS = [
  "Patch wall holes and damaged drywall sections",
  "Blend orange peel, knockdown, or similar wall texture",
  "Repair spots before repainting or listing photos",
  "Clean up the wall so the repair does not stand out",
];

function DrywallPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Drywall and texture repair",
        title: "Repair wall damage without making the room feel torn apart.",
        lead:
          "Patch wall damage, match texture, and get the room looking clean again with one clear plan.",
        primaryCta: { label: "Call About Wall Repair", href: getCallHref() },
        secondaryCta: { label: "Text the Job Details", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Typical drywall and texture jobs"
        lead="Common drywall and texture repairs include the following:"
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common drywall repairs</h3>
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
        title="Need a wall fixed before paint or move-in?"
        text="Call or text Buddy and describe the wall damage, the room, and how soon you need it handled."
        buttonLabel="Request an Estimate"
        buttonHref="contact.html#estimate-form"
      />
    <//>
  `;
}

mount(html`<${DrywallPage} />`);
