import type { ProjectDetail, Project } from '../types/project';

export type { Project, ProjectDetail };

export const projectCategories = ['All', 'Product', 'Brand', 'Web'];

export const projects: ProjectDetail[] = [
  {
    id: 'northstar',
    index: '01',
    title: 'Northstar',
    description: 'A calmer way to plan big work.',
    longDescription:
      'Northstar turns complex planning into a focused daily rhythm. I shaped the product language, interaction system and launch experience for a small team building for thoughtful teams.',
    category: 'Product',
    year: '2024',
    tags: ['Strategy', 'Product design', 'Development'],
    color: '#d9f99d',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85',
    link: 'https://example.com',
  },
  {
    id: 'monument',
    index: '02',
    title: 'Monument',
    description: 'A new identity for modern craft.',
    longDescription:
      'Monument is a visual identity for objects made to last. The system pairs a strong typographic voice with a flexible digital storefront and quiet editorial details.',
    category: 'Brand',
    year: '2023',
    tags: ['Art direction', 'Identity', 'Web design'],
    color: '#f5b8d1',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=85',
    link: 'https://example.com',
  },
  {
    id: 'field-notes',
    index: '03',
    title: 'Field Notes',
    description: 'Digital tools for getting outside.',
    longDescription:
      'Field Notes makes the landscape easier to read. The app combines route planning, local knowledge and a playful visual language for people who prefer the long way around.',
    category: 'Product',
    year: '2023',
    tags: ['UX/UI', 'Research', 'Prototyping'],
    color: '#a5d8ff',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
    link: 'https://example.com',
  },
  {
    id: 'common-ground',
    index: '04',
    title: 'Common Ground',
    description: 'A digital home for shared ideas.',
    longDescription:
      'Common Ground is a publishing platform for independent voices. I designed a reading experience that gives long-form work room to breathe while keeping discovery alive.',
    category: 'Web',
    year: '2022',
    tags: ['Creative direction', 'Editorial', 'Frontend'],
    color: '#ffc078',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    link: 'https://example.com',
  },
];
