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
        <div className="intro-summary">
          <p>{siteMetadata.bio}</p>
          <a className="scroll-cue" href="#work">
            Explorar <span>↓</span>
          </a>
        </div>
        <div className="hero-ide" aria-label="Vista de código de Pablo Dev">
          <div className="ide-titlebar">
            <div className="ide-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="ide-filename">pablo.config.ts</span>
            <span className="ide-status">● online</span>
          </div>
          <div className="ide-tabs" aria-hidden="true">
            <span className="ide-tab active">pablo.config.ts</span>
            <span className="ide-tab">README.md</span>
          </div>
          <div className="ide-code" aria-hidden="true">
            <span className="code-line"><b>01</b> <i>const</i> <strong>developer</strong> = {'{'}</span>
            <span className="code-line"><b>02</b>  name: <em>"Pablo Dev"</em>,</span>
            <span className="code-line"><b>03</b>  focus: <em>"digital products"</em>,</span>
            <span className="code-line"><b>04</b>  stack: [<em>"React"</em>, <em>"TypeScript"</em>],</span>
            <span className="code-line"><b>05</b>  available: <mark>true</mark>,</span>
            <span className="code-line"><b>06</b> {'}'};</span>
            <span className="code-line code-prompt"><b>07</b> <i>$</i> npm run build<span className="cursor" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}