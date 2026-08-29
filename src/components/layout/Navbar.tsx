import { ArrowUpRight, Menu, X } from "lucide-react";
import { useDisclosure } from "../../hooks/useDisclosure";

export function Navbar() {
  const menu = useDisclosure();
  const closeMenu = () => menu.close();

  return (
    <nav className="topbar">
      <a className="brand" href="#top" aria-label="Pablo Dev inicio"><span>p</span> pablo.dev</a>
      <div className={`nav-links ${menu.isOpen ? "is-open" : ""}`}>
        <a href="#work" onClick={closeMenu}>Selected work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a className="nav-contact" href="mailto:hello@pablo.dev" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
      </div>
      <button className="icon-button menu-button" aria-label={menu.isOpen ? "Cerrar menú" : "Abrir menú"} onClick={menu.toggle}>
        {menu.isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
}