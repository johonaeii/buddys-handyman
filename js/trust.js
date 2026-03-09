import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, InfoCard, Section, SiteLayout, mount } from "./site-shell.js";

function TrustPage() {
  return html`
    <${SiteLayout}
      activePage="trust"
      hero=${{
        eyebrow: "About Buddy's",
        title: "Professional standards that build long-term trust.",
        lead:
          "Buddy's Handyman Services is designed around dependable scheduling, quality craftsmanship, and respectful service in every home.",
        primaryCta: { label: "Book a Consultation", href: "contact.html" },
        secondaryCta: { label: "See Reviews", href: "reviews.html" },
        note: `${COMPANY.licenseLabel} | Licensed and insured`,
      }}
    >
      <${Section}
        id="trust-signals"
        title="Trust and Legitimacy Signals"
        lead="High-performing local competitors lead with proof of reliability. This starter page follows the same structure."
      >
        <div className="card-grid two-col">
          <${InfoCard}
            title="License Verification"
            text="Display your active New Mexico contractor license number and provide a direct verification link."
          />
          <${InfoCard}
            title="Insurance Coverage"
            text="State that Buddy's carries liability coverage and follows safe work practices on every job."
          />
          <${InfoCard}
            title="Local Service Identity"
            text="Reinforce Albuquerque and Rio Rancho coverage to improve local trust and search relevance."
          />
          <${InfoCard}
            title="Consistent Communication"
            text="Set expectations early: clear scope, timeline updates, and transparent pricing discussions."
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
        lead="Older homeowners prioritize safety, professionalism, and straightforward communication."
      >
        <ul className="bullet-list large-list">
          <li>Large, readable website text and clear call-to-action buttons.</li>
          <li>Phone-first booking for customers who prefer speaking directly.</li>
          <li>Respectful in-home conduct, careful cleanup, and on-time arrivals.</li>
          <li>Optional senior discount messaging and aging-in-place service packages.</li>
        </ul>
      <//>

      <${ContactStrip}
        title="Need dependable help for a parent or grandparent?"
        text="Buddy's can coordinate directly with family members and keep everyone updated."
        buttonLabel="Schedule a Call"
        buttonHref=${`tel:${COMPANY.phoneDigits}`}
      />
    <//>
  `;
}

mount(html`<${TrustPage} />`);
