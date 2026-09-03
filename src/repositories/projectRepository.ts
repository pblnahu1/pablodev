import type { ProjectDetail, ProjectFilterCriteria, ProjectSummary } from '../types/project';
import { projects } from '../data/projects';

export interface IProjectRepository {
  getAll(): ProjectSummary[];
  getById(id: string): ProjectDetail | undefined;
  getCategories(): string[];
  filter(criteria: ProjectFilterCriteria): ProjectSummary[];
}

export class StaticProjectRepository implements IProjectRepository {
  private items: ProjectDetail[];

  constructor(initialProjects: ProjectDetail[] = projects) {
    this.items = initialProjects;
  }

  getAll(): ProjectSummary[] {
    return this.items.map(this.toSummary);
  }

  getById(id: string): ProjectDetail | undefined {
    return this.items.find((project) => project.id === id);
  }

  getCategories(): string[] {
    const categoriesSet = new Set<string>();
    categoriesSet.add('All');
    for (const p of this.items) {
      if (p.category) {
        categoriesSet.add(p.category);
      }
    }
    return Array.from(categoriesSet);
  }

  filter(criteria: ProjectFilterCriteria): ProjectSummary[] {
    return this.items
      .filter((project) => {
        if (criteria.category && criteria.category !== 'All' && project.category !== criteria.category) {
          return false;
        }
        if (criteria.year && project.year !== criteria.year) {
          return false;
        }
        if (criteria.searchQuery) {
          const query = criteria.searchQuery.toLowerCase();
          const matchesTitle = project.title.toLowerCase().includes(query);
          const matchesDesc = project.description.toLowerCase().includes(query);
          const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(query));
          if (!matchesTitle && !matchesDesc && !matchesTags) {
            return false;
          }
        }
        return true;
      })
      .map(this.toSummary);
  }

  private toSummary(project: ProjectDetail): ProjectSummary {
    return {
      id: project.id,
      index: project.index,
      title: project.title,
      description: project.description,
      category: project.category,
      year: project.year,
      color: project.color,
      image: project.image,
    };
  }
}

export const defaultProjectRepository = new StaticProjectRepository();
