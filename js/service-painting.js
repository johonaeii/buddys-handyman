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
          "This page supports painting leads by keeping the message simple: explain the room or surface, talk through timing, and get a straightforward next step.",
        primaryCta: { label: "Call About Painting", href: getCallHref() },
        secondaryCta: { label: "Text the Paint Project", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Painting work people usually ask about"
        lead="Use homeowner language and keep the page focused on practical, visible improvements."
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common requests</h3>
            <ul className="bullet-list">
              ${JOBS.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </article>

          <article className="card">
            <h3>Photo slots for real projects</h3>
            <div className="photo-grid">
              <div className="photo-placeholder">Room before photo placeholder</div>
              <div className="photo-placeholder">Room after photo placeholder</div>
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
