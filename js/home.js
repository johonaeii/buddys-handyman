import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, InfoCard, Section, SiteLayout, mount } from "./site-shell.js";

function HomePage() {
  return html`
    <${SiteLayout}
      activePage="home"
      hero=${{
        eyebrow: "Trusted Handyman Support in Albuquerque and Rio Rancho",
        title: "Reliable home repairs and maintenance for every generation.",
        lead:
          "Buddy's Handyman Services helps homeowners stay safe, comfortable, and up to date with dependable repairs, upgrades, and respectful in-home service.",
        primaryCta: { label: "Get Your Free Estimate", href: "contact.html" },
        secondaryCta: { label: `Call ${COMPANY.phoneDisplay}`, href: `tel:${COMPANY.phoneDigits}` },
        note: "Licensed and insured. No job too small.",
      }}
    >
      <${Section}
        id="highlights"
        title="What Top Competitor Websites Get Right"
        lead="Your starter site already includes the same high-converting patterns found across leading Albuquerque handyman websites."
      >
        <div className="card-grid three-col">
          <${InfoCard}
            title="Fast Contact Access"
            text="Phone and estimate CTAs stay visible in the header and repeat across each page."
          />
          <${InfoCard}
            title="Trust Signals"
            text="License and insurance messaging are clearly displayed with room for badges and verifiable links."
          />
          <${InfoCard}
            title="Clear Service Menus"
            text="Visitors can quickly find common tasks like plumbing fixes, painting, carpentry, and installations."
          />
        </div>
      <//>

      <${Section}
        id="audience"
        title="Built for Older Homeowners and Younger Relatives"
        lead="Content and layout support users who prefer phone calls and users who prefer mobile forms and digital scheduling."
      >
        <div className="card-grid two-col">
          <${InfoCard}
            title="Senior-Friendly Experience"
            text="Large text, high contrast, simple navigation, and straightforward language reduce friction for older visitors."
          />
          <${InfoCard}
            title="Digital Convenience"
            text="Quick forms, review highlights, and resource pages help younger family members research and book with confidence."
          />
        </div>
      <//>

      <${Section}
        id="process"
        title="Simple 3-Step Service Process"
        lead="Use this section to explain exactly what customers can expect from first call to finished work."
      >
        <ol className="process-list">
          <li>
            <h3>1. Share Your Project</h3>
            <p>Call or submit the estimate form with photos, priority level, and ideal timeline.</p>
          </li>
          <li>
            <h3>2. Receive a Clear Plan</h3>
            <p>Get scope, pricing expectations, and next available appointment window.</p>
          </li>
          <li>
            <h3>3. Get It Done Right</h3>
            <p>Buddy arrives on time, completes the work professionally, and leaves the area clean.</p>
          </li>
        </ol>
      <//>

      <${ContactStrip}
        title="Need help this week?"
        text="Call now for a free estimate and same-week availability options in Albuquerque and Rio Rancho."
        buttonLabel=${`Call:${COMPANY.phoneDisplay}`}
        buttonHref=${`tel:${COMPANY.phoneDigits}`}
      />
    <//>
  `;
}

mount(html`<${HomePage} />`);
