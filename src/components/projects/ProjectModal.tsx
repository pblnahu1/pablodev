import { ArrowUpRight, Check, X } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectModalProps = { project: Project; onClose: () => void };

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close icon-button" aria-label="Cerrar detalle" onClick={onClose}><X size={20} /></button>
        <div className="modal-art" style={{ backgroundImage: `url(${project.image})` }} />
        <div className="modal-copy"><p className="section-label">{project.index} / {project.category}</p><h2 id="modal-title">{project.title}</h2><p>{project.longDescription}</p><div className="modal-tags">{project.tags.map((tag) => <span key={tag}><Check size={13} /> {tag}</span>)}</div><a className="modal-link" href={project.link} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16} /></a></div>
      </article>
    </div>
  );
}