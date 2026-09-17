import { ArrowUpRight } from "lucide-react";
import { contactLink, siteMetadata } from "../../data/navigationData";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-label="Sobre mí">
      <SectionHeading label="02 — Sobre mí" />
      <div className="about-content">
        <h2>
          {siteMetadata.aboutHeadline} <span>{siteMetadata.aboutHighlight}</span>
        </h2>
        <div>
          <p>{siteMetadata.aboutDescription}</p>
          <a className="text-link" href={contactLink.href}>
            Ver más <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}