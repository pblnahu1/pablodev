import { contactLink, navigationLinks, siteMetadata, socialLinks } from "@/data/navigationData";
import { projects } from "@/data/projects";
import {
  NavigationSection,
  ProjectsSection,
  SocialLinksSection,
} from "@/components/sidebar/SidebarSections";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
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
                    Portafolio
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
        <NavigationSection
          links={navigationLinks}
          contactLink={contactLink}
          onNavigate={handleClose}
        />
        <ProjectsSection projects={projects} onNavigate={handleClose} />
        <SocialLinksSection links={socialLinks} />
      </SidebarContent>

      {/* Footer: status indicator */}
      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <span
            className="size-2 rounded-full bg-accent-blue shrink-0 shadow-[0_0_8px_var(--accent-blue)]"
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
