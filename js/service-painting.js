import { html } from "./react-lib.js";
import { ContactStrip, Section, SiteLayout, getCallHref, getTextHref, mount } from "./site-shell.js";

const JOBS = [
  "Interior room painting and touch-ups",
  "Trim, baseboards, and door refreshes",
  "Exterior paint work where a homeowner needs reliable follow-through",
  "Prep and finish details that keep the final result looking clean",
];

function PaintingPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Interior and exterior painting",
        title: "Clean paint work with a clear plan before the job starts.",
        lead:
          "From touch-ups to room refreshes, Buddy handles painting work with careful prep and clean finish details.",
        primaryCta: { label: "Call About Painting", href: getCallHref() },
        secondaryCta: { label: "Text the Paint Project", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Painting work people usually ask about"
        lead="Common painting projects include the following:"
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common requests</h3>
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
        title="Want help deciding if it is a touch-up or a full repaint?"
        text="Call or text with the room, surface, or paint concern and Buddy can talk through it."
        buttonLabel="Go to Contact"
        buttonHref="contact.html#estimate-form"
      />
    <//>
  `;
}

mount(html`<${PaintingPage} />`);
