import { useState } from "react";
import type { ProjectDetail, ProjectSummary } from "../../types/project";
import { useProjects } from "../../hooks/useProjects";
import { ProjectGrid } from "../projects/ProjectGrid";
import { ProjectModal } from "../projects/ProjectModal";
import { FilterPills } from "../ui/FilterPills";
import { SectionHeading } from "../ui/SectionHeading";

export function WorkSection() {
  const { projects, categories, activeCategory, setActiveCategory, getProjectDetail } =
    useProjects();
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const handleSelectProject = (summary: ProjectSummary) => {
    const detail = getProjectDetail(summary.id);
    if (detail) {
      setSelectedProject(detail);
    }
  };

  const projectCountDetail = `${String(projects.length).padStart(2, "0")} projects`;

  return (
    <section className="work-section" id="work" aria-label="Selected Work">
      <SectionHeading label="01 — Selected work" detail={projectCountDetail} />
      <FilterPills
        options={categories}
        activeOption={activeCategory}
        onChange={setActiveCategory}
      />
      <ProjectGrid projects={projects} onSelectProject={handleSelectProject} />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}