import {
  Briefcase,
  GitBranch,
  Globe,
  Home,
  Mail,
  User,
} from "lucide-react";
import { contactLink, navigationLinks, siteMetadata, socialLinks } from "@/data/navigationData";
import { projects } from "@/data/projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();

  const handleClose = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="icon">
      {/* ── Header: logo + toggle trigger ──────────────────────── */}
      <SidebarHeader className="border-b border-sidebar-border p-0 overflow-hidden">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="relative flex h-14 items-center justify-between px-2 group-data-[collapsible=icon]:justify-center">
              {/* Logo — hidden in icon mode */}
              <div className="flex items-center gap-2.5 group-data-[collapsible=icon]:hidden overflow-hidden">
                <img
                  src="/transparent-light.png"
                  alt="Pablo Dev Logo"
                  className="h-7 w-7 shrink-0 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-sans font-bold text-sm tracking-tight text-sidebar-foreground truncate">
                    {siteMetadata.name}
                  </span>
                  <span className="font-mono text-[9.5px] text-muted-foreground uppercase tracking-wider">
                    Portfolio
                  </span>
                </div>
              </div>

              {/* Icon-only logo — visible only when collapsed */}
              {/* Toggle button — only visible when expanded */}
              <SidebarTrigger
                className="group-data-[collapsible=icon]:hidden size-7 shrink-0 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                aria-label="Colapsar barra lateral"
              />
              <SidebarTrigger
                className="hidden group-data-[collapsible=icon]:flex absolute left-1/2 top-1/2 size-8 min-w-8 max-w-8 -translate-x-1/2 -translate-y-1/2 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                aria-label="Expandir barra lateral"
              />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="py-2">
        {/* Navigation Group */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Nav
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Inicio" size="default">
                  <a href="#top" onClick={handleClose} className="hover:text-accent-lime">
                    <Home className="size-4 shrink-0" />
                    <span>Inicio</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {navigationLinks.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild tooltip={item.label} size="default">
                    <a href={item.href} onClick={handleClose} className="hover:text-accent-lime">
                      {item.href === "#work" ? (
                        <Briefcase className="size-4 shrink-0" />
                      ) : (
                        <User className="size-4 shrink-0" />
                      )}
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={contactLink.label} size="default">
                  <a
                    href={contactLink.href}
                    onClick={handleClose}
                    className="text-accent-lime hover:opacity-80"
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

        {/* Selected Projects */}
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
                    <a
                      href="#work"
                      onClick={handleClose}
                      className="hover:text-accent-lime"
                    >
                      <span
                        className="size-2 rounded-full shrink-0"
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

        {/* Connect */}
        <SidebarGroup>
          <SidebarGroupLabel className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Links
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild tooltip={link.name} size="default">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent-lime"
                    >
                      {link.icon === "github" ? (
                        <GitBranch className="size-4 shrink-0" />
                      ) : (
                        <Globe className="size-4 shrink-0" />
                      )}
                      <span>{link.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer: status indicator */}
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <span
            className="size-2 rounded-full bg-accent-lime shrink-0 shadow-[0_0_8px_var(--accent-lime)]"
            title={siteMetadata.availabilityStatus}
          />
          <span className="font-mono text-[10px] text-muted-foreground truncate group-data-[collapsible=icon]:hidden">
            {siteMetadata.availabilityStatus}
          </span>
        </div>
      </SidebarFooter>

      {/* Rail: clickable drag handle on the right edge to resize */}
      <SidebarRail />
    </Sidebar>
  );
}
