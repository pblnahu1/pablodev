import type { NavigationItem, SocialLink } from '../types/project';

export const navigationLinks: NavigationItem[] = [
  { label: 'Selected work', href: '#work' },
  { label: 'About', href: '#about' },
];

export const contactLink: NavigationItem = {
  label: "Let's talk",
  href: 'mailto:hello@pablo.dev',
  isExternal: true,
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
  { name: 'Personal Web', href: 'https://pablo.dev', icon: 'globe' },
];

export const siteMetadata = {
  name: 'Pablo Dev',
  role: 'Independent designer & developer',
  yearsActive: '2024—now',
  headline: {
    start: 'Ideas with',
    emphasis: 'character.',
    middle: 'Products with',
    highlight: 'purpose.',
  },
  bio: 'I build distinctive digital experiences for people and teams who care about the details.',
  aboutHeadline: 'Designing for the',
  aboutHighlight: 'in-between.',
  aboutDescription:
    "I'm Pablo, a multidisciplinary designer and developer based in Madrid. I work across brand, product, and code to make digital things feel a little more human.",
  copyrightYear: '2024',
  availabilityStatus: 'Available for selected projects',
};
