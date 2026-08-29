import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <SectionHeading label="02 — A little about" />
      <div className="about-content">
        <h2>Designing for the <span>in-between.</span></h2>
        <div><p>I'm Pablo, a multidisciplinary designer and developer based in Madrid. I work across brand, product, and code to make digital things feel a little more human.</p><a className="text-link" href="mailto:hello@pablo.dev">More about me <ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}