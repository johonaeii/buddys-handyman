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
          "Replace damaged tile, improve worn areas, and clean up the finished look of kitchens, baths, and floors.",
        primaryCta: { label: "Call About Tile Work", href: getCallHref() },
        secondaryCta: { label: "Text the Tile Details", href: getTextHref() },
      }}
    >
      <${Section}
        id="typical-jobs"
        title="Common tile jobs"
        lead="Examples of tile work people often call about:"
      >
        <div className="split-layout">
          <article className="card">
            <h3>Common tile requests</h3>
            <ul className="bullet-list">
              ${JOBS.map((item) => html`<li key=${item}>${item}</li>`)}
            </ul>
          </article>

          <article className="card">
            <h3>Have a tile problem you want fixed?</h3>
            <p>Tell Buddy the room, the size of the area, and whether you already have the tile. You will get a clear estimate and a plan before any work starts.</p>
            <div className="action-row is-stacked">
              <a className="btn btn-solid" href=${getCallHref()}>Call Buddy</a>
              <a className="btn btn-ghost" href=${getTextHref()}>Text Buddy</a>
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
