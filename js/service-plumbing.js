import { html } from "./react-lib.js";
import { ContactStrip, Section, SiteLayout, getCallHref, getTextHref, mount } from "./site-shell.js";

const JOBS = [
  "Water heater maintenance or replacement questions",
  "Faucet, shower, or disposal repair",
  "P-trap, drain hardware, and plumbing fixture issues",
  "Simple plumbing repairs a homeowner wants handled without calling multiple people",
];

function PlumbingPage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Water heaters and plumbing fixes",
        title: "Get the plumbing issue described clearly and moving toward a fix.",
        lead:
          "This page combines water heater and common plumbing repair messaging so homeowners can quickly tell Buddy the problem and ask the right next-step questions.",
        primaryCta: { label: "Call About the Plumbing Issue", href: getCallHref() },
        secondaryCta: { label: "Text the Problem", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Examples this page should speak to"
        lead="Keep the copy specific enough to feel helpful but simple enough to read quickly on a phone."
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common repair needs</h3>
            <ul className="bullet-list">
              ${JOBS.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </article>

          <article className="card">
            <h3>Project photo area</h3>
            <div className="photo-grid">
              <div className="photo-placeholder">Problem fixture photo placeholder</div>
              <div className="photo-placeholder">Completed fix photo placeholder</div>
            </div>
          </article>
        </div>
      <//>

      <${ContactStrip}
        title="Need to talk through a leak, fixture problem, or water heater issue?"
        text="Call or text the symptoms, the fixture, and how urgent the problem feels."
        buttonLabel="Go to Contact"
        buttonHref="contact.html#estimate-form"
      />
    <//>
  `;
}

mount(html`<${PlumbingPage} />`);
