import { useState } from "react";
import type { Project } from "../../data/projects";
import { useProjects } from "../../hooks/useProjects";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";
import { FilterPills } from "../ui/FilterPills";
import { SectionHeading } from "../ui/SectionHeading";

export function WorkSection() {
  const { projects, categories, activeCategory, setActiveCategory } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="work-section" id="work">
      <SectionHeading label="01 — Selected work" detail={`${String(projects.length).padStart(2, "0")} projects`} />
      <FilterPills options={categories} activeOption={activeCategory} onChange={setActiveCategory} />
      <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />)}</div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}