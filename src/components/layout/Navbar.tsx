import { ArrowUpRight, PanelLeft, X } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { contactLink, navigationLinks } from "../../data/navigationData";

export function Navbar() {
  const { toggleSidebar, open, openMobile, isMobile } = useSidebar();
  const isOpen = isMobile ? openMobile : open;

  return (
    <header className="topbar">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleSidebar}
          className="sidebar-toggle-btn"
          aria-label={isOpen ? "Cerrar menú lateral" : "Abrir menú lateral"}
          title={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className="size-4 text-accent-lime" />
          ) : (
            <PanelLeft className="size-4 text-accent-lime" />
          )}
          <span className="sidebar-toggle-label">Menu</span>
        </button>

        <a className="brand" href="#top" aria-label="Pablo Dev — Inicio">
          <img
            src="/transparent-light.png"
            alt="Pablo Dev Logo"
            className="brand-logo-img"
          />
          <span>Pablo Dev</span>
        </a>
      </div>

      <nav className="nav-links" aria-label="Navegación principal">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href={contactLink.href}
        >
          {contactLink.label} <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  );
}
