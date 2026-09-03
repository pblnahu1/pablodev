import type { ProjectSummary } from "../../types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  projects: ProjectSummary[];
  onSelectProject: (project: ProjectSummary) => void;
}

export function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={onSelectProject}
        />
      ))}
    </div>
  );
}
