import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, InfoCard, Section, SiteLayout, mount } from "./site-shell.js";

function TrustPage() {
  return html`
    <${SiteLayout}
      activePage="trust"
      hero=${{
        eyebrow: "About Buddy's",
        title: "Clear communication, respectful service, and dependable work.",
        lead:
          "Buddy's Handyman Services is built around showing up on time, explaining the work clearly, and treating every home with care.",
        primaryCta: { label: "Request a Free Estimate", href: "contact.html" },
        secondaryCta: { label: "Read Customer Reviews", href: "reviews.html" },
        note: `${COMPANY.licenseLabel}. Licensed and insured.`,
      }}
    >
      <${Section}
        id="trust-signals"
        title="Why families feel comfortable hiring Buddy"
        lead="The goal is simple: make it easy to know who you are hiring and what to expect."
      >
        <div className="card-grid two-col">
          <${InfoCard}
            title="License Verification"
            text="Buddy shares an active New Mexico contractor license number and a direct state verification link."
          />
          <${InfoCard}
            title="Insurance Coverage"
            text="Buddy carries liability coverage and follows safe work practices on every job."
          />
          <${InfoCard}
            title="Local Service Area"
            text="Buddy serves homeowners in Albuquerque and Rio Rancho."
          />
          <${InfoCard}
            title="Consistent Communication"
            text="You get clear explanations, honest updates, and straightforward pricing conversations."
          />
        </div>

        <p className="license-note">
          Verify licensing through the official state source:
          <a href=${COMPANY.licenseUrl} target="_blank" rel="noreferrer"> New Mexico Regulation & Licensing Department</a>
        </p>
      <//>

      <${Section}
        id="senior-focus"
        title="Senior-Friendly Service Commitments"
        lead="Calm, respectful service with easy communication."
      >
        <ul className="bullet-list large-list">
          <li>Phone-first scheduling for anyone who prefers talking instead of filling out forms.</li>
          <li>Respectful in-home conduct, careful cleanup, and on-time arrivals.</li>
          <li>Clear explanations before work starts, with time for questions.</li>
          <li>Family members can help coordinate if a parent or grandparent needs support.</li>
        </ul>
      <//>

      <${ContactStrip}
        title="Need dependable help for a parent or grandparent?"
        text="Buddy can coordinate directly with family members and keep everyone informed."
        buttonLabel="Call To Talk It Through"
        buttonHref=${`tel:${COMPANY.phoneDigits}`}
      />
    <//>
  `;
}

mount(html`<${TrustPage} />`);
