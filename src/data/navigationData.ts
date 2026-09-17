import type { NavigationItem, SocialLink } from '../types/project';

export const navigationLinks: NavigationItem[] = [
  { label: 'Proyectos', href: '#work' },
  { label: 'Sobre Mí', href: '#about' },
];

export const contactLink: NavigationItem = {
  label: "Hablemos",
  href: 'mailto:torrezpablo25@gmail.com',
  isExternal: true,
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/pblnahu1', icon: 'github' },
  { name: 'Personal Web', href: 'https://pablo.dev', icon: 'globe' },
];

export const siteMetadata = {
  name: 'Pablo Dev',
  role: 'Software Developer & Estudiante de Análisis de Sistemas',
  yearsActive: '2026',
  headline: {
    start: 'Bienvenidos a',
    emphasis: 'mi portfolio.',
    middle: 'Aplicaciones de',
    highlight: 'calidad.',
  },
  bio: 'Construyo productos digitales claros, funcionales y pensados para las personas.',
  aboutHeadline: 'Un poco',
  aboutHighlight: 'sobre mí',
  aboutDescription:
    "Soy un desarrollador de software y estudiante de Análisis de Sistemas. Me apasiona crear soluciones digitales que sean funcionales y estéticamente agradables.",
  copyrightYear: '2026',
  availabilityStatus: 'Disponible para nuevas oportunidades',
};
