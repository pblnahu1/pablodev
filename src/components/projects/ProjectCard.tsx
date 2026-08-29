import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "../../data/projects";

type ProjectCardProps = { project: Project; onSelect: (project: Project) => void };

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button className="project-card" onClick={() => onSelect(project)} style={{ "--card-color": project.color } as CSSProperties}>
      <div className="project-art" style={{ backgroundImage: `url(${project.image})` }}><div className="art-overlay" /><span className="project-index">{project.index}</span><span className="view-project">View project <ArrowUpRight size={18} /></span></div>
      <div className="project-meta"><div><h2>{project.title}</h2><p>{project.description}</p></div><span>{project.category}</span></div>
    </button>
  );
}