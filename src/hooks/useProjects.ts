import { useMemo, useState } from 'react'
import { projectCategories, projects } from '../data/projects'

export function useProjects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleProjects = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  return { projects: visibleProjects, categories: projectCategories, activeCategory, setActiveCategory }
}