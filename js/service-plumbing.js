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
          "From fixture repairs to water heater help, Buddy handles many of the plumbing problems homeowners want fixed quickly and clearly.",
        primaryCta: { label: "Call About the Plumbing Issue", href: getCallHref() },
        secondaryCta: { label: "Text the Problem", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Common plumbing jobs"
        lead="Examples of repairs homeowners often call about:"
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common repair needs</h3>
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
        title="Need to talk through a leak, fixture problem, or water heater issue?"
        text="Call or text the symptoms, the fixture, and how urgent the problem feels."
        buttonLabel="Go to Contact"
        buttonHref="contact.html#estimate-form"
      />
    <//>
  `;
}

mount(html`<${PlumbingPage} />`);
