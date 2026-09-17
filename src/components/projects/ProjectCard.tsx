import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import type { ProjectSummary } from "../../types/project";
import { Card, CardContent } from "../ui/card";

interface ProjectCardProps {
  project: ProjectSummary;
  onSelect: (project: ProjectSummary) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card
      className="project-card"
      style={{ "--card-color": project.color } as CSSProperties}
    >
      <CardContent>
        <button
          className="project-card-button"
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`Ver detalles de ${project.title}`}
        >
          <div
            className="project-art"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="art-overlay" />
            <span className="project-index">{project.index}</span>
            <span className="view-project">
              Ver proyecto <ArrowUpRight size={16} />
            </span>
          </div>
          <div className="project-meta">
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <span>{project.category}</span>
          </div>
        </button>
      </CardContent>
    </Card>
  );
}