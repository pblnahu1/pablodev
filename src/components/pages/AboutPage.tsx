import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { contactLink, siteMetadata, socialLinks } from "../../data/navigationData";

const strengths = [
  {
    title: "Interfaces claras",
    description: "Diseño experiencias fáciles de entender, con jerarquía visual y detalles que ayudan a completar cada tarea.",
  },
  {
    title: "Código mantenible",
    description: "Construyo componentes reutilizables y estructuras simples para que cada proyecto pueda crecer sin perder claridad.",
  },
  {
    title: "Aprendizaje continuo",
    description: "Combino la práctica diaria con mi formación en Análisis de Sistemas para tomar mejores decisiones técnicas.",
  },
];

const technologies = ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "Git"];

export function AboutPage() {
  return (
    <article className="about-page">
      <a className="about-page-back" href="#about">
        <ArrowLeft size={15} /> Volver al inicio
      </a>

      <header className="about-page-header">
        <p className="section-label">02 — Sobre mí</p>
        <h1>
          Desarrollo con curiosidad,
          <span> diseño con intención.</span>
        </h1>
        <p className="about-page-lead">{siteMetadata.aboutDescription}</p>
      </header>

      <div className="about-page-grid">
        <section className="about-page-block" aria-labelledby="about-story-title">
          <p className="section-label">Mi recorrido</p>
          <h2 id="about-story-title">Entre el código y las personas</h2>
          <p>
            Mi forma de trabajar parte de una pregunta sencilla: ¿cómo puede una solución digital
            hacerle más fácil la vida a alguien? Desde ahí, convierto ideas y necesidades en
            productos funcionales, cuidados y preparados para evolucionar.
          </p>
          <p>
            Actualmente estudio Análisis de Sistemas mientras desarrollo proyectos web. Esa mezcla
            me permite mirar cada desafío desde dos lugares: la experiencia que recibe la persona y
            la estructura que sostiene el producto.
          </p>
        </section>

        <section className="about-page-block" aria-labelledby="about-strengths-title">
          <p className="section-label">Cómo trabajo</p>
          <h2 id="about-strengths-title">Una base para cada proyecto</h2>
          <div className="about-strengths">
            {strengths.map((strength, index) => (
              <div className="about-strength" key={strength.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="about-page-stack" aria-labelledby="about-stack-title">
        <div>
          <p className="section-label">Herramientas</p>
          <h2 id="about-stack-title">Tecnologías que uso</h2>
        </div>
        <div className="about-tech-list">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>

      <section className="about-page-contact" aria-labelledby="about-contact-title">
        <div>
          <p className="section-label">Siguiente paso</p>
          <h2 id="about-contact-title">¿Construimos algo juntos?</h2>
        </div>
        <div className="about-page-contact-links">
          <a className="text-link" href={contactLink.href}>
            Hablemos <ArrowUpRight size={15} />
          </a>
          {socialLinks.map((link) => (
            <a className="text-link" key={link.name} href={link.href} target="_blank" rel="noreferrer">
              {link.name} <ArrowUpRight size={15} />
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
