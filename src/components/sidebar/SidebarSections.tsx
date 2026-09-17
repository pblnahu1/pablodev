import {
  Briefcase,
  GitBranch,
  Globe,
  Home,
  Mail,
  User,
} from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import type { NavigationItem, ProjectSummary, SocialLink } from "@/types/project";

interface SidebarSectionProps {
  onNavigate: () => void;
}

interface NavigationSectionProps extends SidebarSectionProps {
  links: NavigationItem[];
  contactLink: NavigationItem;
}

interface ProjectsSectionProps extends SidebarSectionProps {
  projects: ProjectSummary[];
}

interface SocialLinksSectionProps {
  links: SocialLink[];
}

function getNavigationIcon(href: string) {
  return href === "#work" ? Briefcase : User;
}

function getSocialIcon(icon: SocialLink["icon"]) {
  return icon === "github" ? GitBranch : Globe;
}

export function NavigationSection({ links, contactLink, onNavigate }: NavigationSectionProps) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Navegación
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Inicio" size="default">
                <a href="#top" onClick={onNavigate} className="hover:text-accent-blue">
                  <Home className="size-4 shrink-0" />
                  <span>Inicio</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {links.map((item) => {
              const Icon = getNavigationIcon(item.href);

              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild tooltip={item.label} size="default">
                    <a href={item.href} onClick={onNavigate} className="hover:text-accent-blue">
                      <Icon className="size-4 shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={contactLink.label} size="default">
                <a
                  href={contactLink.href}
                  onClick={onNavigate}
                  className="text-accent-blue hover:opacity-80"
                >
                  <Mail className="size-4 shrink-0" />
                  <span>{contactLink.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator className="bg-sidebar-border" />
    </>
  );
}

export function ProjectsSection({ projects, onNavigate }: ProjectsSectionProps) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Proyectos
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {projects.map((project) => (
              <SidebarMenuItem key={project.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={`${project.title} · ${project.category}`}
                  size="default"
                >
                  <a href="#work" onClick={onNavigate} className="hover:text-accent-blue">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: project.color }}
                      aria-hidden="true"
                    />
                    <span className="truncate">{project.title}</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuBadge className="font-mono text-[9.5px] text-muted-foreground group-data-[collapsible=icon]:hidden">
                  {project.category}
                </SidebarMenuBadge>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarSeparator className="bg-sidebar-border" />
    </>
  );
}

export function SocialLinksSection({ links }: SocialLinksSectionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Enlaces
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {links.map((link) => {
            const Icon = getSocialIcon(link.icon);

            return (
              <SidebarMenuItem key={link.name}>
                <SidebarMenuButton asChild tooltip={link.name} size="default">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent-blue"
                  >
                    <Icon className="size-4 shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
