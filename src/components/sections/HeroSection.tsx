import { siteMetadata } from "../../data/navigationData";

export function HeroSection() {
  return (
    <section className="intro" id="top" aria-label="Introducción">
      <div className="eyebrow">
        <span className="status-dot" aria-hidden="true" /> {siteMetadata.role}{" "}
        <span className="year">/ {siteMetadata.yearsActive}</span>
      </div>
      <h1>
        {siteMetadata.headline.start} <em>{siteMetadata.headline.emphasis}</em>
        <br />
        {siteMetadata.headline.middle} <span>{siteMetadata.headline.highlight}</span>
      </h1>
      <div className="intro-bottom">
        <p>{siteMetadata.bio}</p>
        <a className="scroll-cue" href="#work">
          Explorar <span>↓</span>
        </a>
      </div>
    </section>
  );
}