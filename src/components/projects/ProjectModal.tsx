import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../../data/projects";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

type ProjectModalProps = { project: Project; onClose: () => void };

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent aria-describedby="modal-description">
        <div className="modal-art" style={{ backgroundImage: `url(${project.image})` }} />
        <div className="modal-copy"><p className="section-label">{project.index} / {project.category}</p><h2 id="modal-title">{project.title}</h2><p id="modal-description">{project.longDescription}</p><div className="modal-tags">{project.tags.map((tag) => <span key={tag}><Check size={13} /> {tag}</span>)}</div><a className="modal-link" href={project.link} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16} /></a></div>
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}