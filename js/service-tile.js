import { html } from "./react-lib.js";
import { ContactStrip, Section, SiteLayout, getCallHref, getTextHref, mount } from "./site-shell.js";

const JOBS = [
  "Replace cracked or loose tile",
  "Repair small tile areas before they spread",
  "Handle backsplash, wall, or floor tile updates",
  "Improve the finished look of kitchens, baths, and entry areas",
];

function TilePage() {
  return html`
    <${SiteLayout}
      activePage="services"
      hero=${{
        eyebrow: "Tile repair and installation",
        title: "Fix broken tile and finish new tile work with a cleaner result.",
        lead:
          "This service page gives tile leads a focused landing spot without making the site feel cluttered or overly technical.",
        primaryCta: { label: "Call About Tile Work", href: getCallHref() },
        secondaryCta: { label: "Text the Tile Details", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Where this service page can help convert"
        lead="Keep the examples centered on visible repairs and practical upgrades."
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common tile requests</h3>
            <ul className="bullet-list">
              ${JOBS.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </article>

          <article className="card">
            <h3>Before and after gallery area</h3>
            <div className="photo-grid">
              <div className="photo-placeholder">Damaged tile photo placeholder</div>
              <div className="photo-placeholder">Finished tile photo placeholder</div>
            </div>
          </article>
        </div>
      <//>

      <${ContactStrip}
        title="Need to replace cracked tile or clean up an unfinished area?"
        text="Call or text Buddy with the room, the size of the repair, and whether you already have the tile."
        buttonLabel="Request an Estimate"
        buttonHref="contact.html#estimate-form"
      />
    <//>
  `;
}

mount(html`<${TilePage} />`);
