import { useMemo, useState } from 'react';
import type { IProjectRepository } from '../repositories/projectRepository';
import { defaultProjectRepository } from '../repositories/projectRepository';
import type { ProjectSummary } from '../types/project';

interface UseProjectsOptions {
  repository?: IProjectRepository;
  initialCategory?: string;
}

export function useProjects({
  repository = defaultProjectRepository,
  initialCategory = 'All',
}: UseProjectsOptions = {}) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const categories = useMemo(() => repository.getCategories(), [repository]);

  const visibleProjects = useMemo<ProjectSummary[]>(() => {
    return repository.filter({ category: activeCategory });
  }, [repository, activeCategory]);

  return {
    projects: visibleProjects,
    categories,
    activeCategory,
    setActiveCategory,
    getProjectDetail: (id: string) => repository.getById(id),
  };
}