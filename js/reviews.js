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
        eyebrow: "Customer Feedback",
        title: "Social proof that helps visitors book with confidence.",
        lead:
          "Feature reviews from clients who hired Buddy for the six most-requested jobs: wall repair, painting, tile, water heaters, fixture repairs, and trim.",
        primaryCta: { label: "Leave a Review", href: "#google-reviews" },
        secondaryCta: { label: "Request Service", href: "contact.html" },
        note: "Add your Google review widget or screenshot block below.",
      }}
    >
      <${Section}
        id="testimonial-grid"
        title="Featured Testimonials"
        lead="Use real customer quotes that reinforce punctuality, affordability, and work quality."
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
        title="Ratings Section Starter"
        lead="Embed Google reviews here, or link to your profile so younger relatives can verify reputation quickly."
      >
        <div className="rating-panel">
          <p className="rating-score">4.9 / 5.0</p>
          <p>Average satisfaction target based on completed local jobs.</p>
          <a className="btn btn-ghost" href="https://www.google.com" target="_blank" rel="noreferrer">
            Connect Real Google Reviews
          </a>
        </div>
      <//>

      <${ContactStrip}
        title="Ready to become the next 5-star review?"
        text=${`Call ${COMPANY.phoneDisplay} or request a free estimate online.`}
        buttonLabel="Get Estimate"
        buttonHref="contact.html"
      />
    <//>
  `;
}

mount(html`<${ReviewsPage} />`);
