import { ArrowUpRight } from "lucide-react";
import { siteMetadata } from "../../data/navigationData";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="about-section scroll-reveal"
      id="about"
      aria-label="Sobre mí"
    >
      <SectionHeading label="02 — Sobre mí" />
      <div className="about-content">
        <h2>
          {siteMetadata.aboutHeadline} <span>{siteMetadata.aboutHighlight}</span>
        </h2>
        <div>
          <p>{siteMetadata.aboutDescription}</p>
          <a className="text-link" href="#sobre-mi">
            Ver más <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}