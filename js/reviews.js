import { html } from "./react-lib.js";
import { COMPANY, ContactStrip, Section, SiteLayout, TestimonialCard, mount } from "./site-shell.js";

const TESTIMONIALS = [
  {
    quote:
      "Buddy patched and textured several wall holes, then painted the room. The finish matched perfectly and looked brand new.",
    author: "Maria T.",
    context: "Homeowner in Northeast Albuquerque",
  },
  {
    quote:
      "I booked service for my aunt in Rio Rancho. He replaced a shower valve and fixed the p-trap issue quickly with great communication.",
    author: "James R.",
    context: "Grandson coordinating family home repairs",
  },
  {
    quote:
      "We needed tile repair and new baseboards before listing photos. Buddy arrived on time and the quality was excellent.",
    author: "Denise and Carl P.",
    context: "Home sellers in Albuquerque",
  },
];

function ReviewsPage() {
  return html`
    <${SiteLayout}
      activePage="reviews"
      hero=${{
        eyebrow: "Customer Reviews",
        title: "See what local customers say.",
        lead:
          "These examples show the kind of feedback homeowners and family members share after repair, painting, tile, trim, and plumbing jobs.",
        primaryCta: { label: "See Review Details", href: "#google-reviews" },
        secondaryCta: { label: "Request Service", href: "contact.html" },
        note: "A live Google review profile can be linked here for extra peace of mind.",
      }}
    >
      <${Section}
        id="testimonial-grid"
        title="Featured Testimonials"
        lead="Short examples of the kind of comments customers and family members often share."
      >
        <div className="card-grid three-col">
          ${TESTIMONIALS.map(
            (testimonial) => html`
              <${TestimonialCard}
                key=${testimonial.author}
                quote=${testimonial.quote}
                author=${testimonial.author}
                context=${testimonial.context}
              />
            `,
          )}
        </div>
      <//>

      <${Section}
        id="google-reviews"
        title="Google Reviews"
        lead="This section can link directly to a live review profile so customers and family members can verify your reputation easily."
      >
        <div className="rating-panel">
          <p className="rating-score">4.9 / 5.0</p>
          <p>Example rating display for completed local jobs.</p>
          <a className="btn btn-ghost" href="https://www.google.com" target="_blank" rel="noreferrer">
            Open Google Reviews
          </a>
        </div>
      <//>

      <${ContactStrip}
        title="Ready to talk about your repair?"
        text=${`Call ${COMPANY.phoneDisplay} or request a free estimate online.`}
        buttonLabel="Request An Estimate"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${ReviewsPage} />`);
