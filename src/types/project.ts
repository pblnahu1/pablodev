export interface ProjectSummary {
  id: string;
  index: string;
  title: string;
  description: string;
  category: string;
  year: string;
  color: string;
  image: string;
}

export interface ProjectDetail extends ProjectSummary {
  longDescription: string;
  tags: string[];
  link: string;
}

// Backward-compatible alias
export type Project = ProjectDetail;

export interface ProjectFilterCriteria {
  category?: string;
  searchQuery?: string;
  year?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'github' | 'globe' | 'twitter' | 'linkedin' | 'mail';
}
