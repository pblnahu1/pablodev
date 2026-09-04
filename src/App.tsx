import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Footer } from "./components/layout/Footer";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/HeroSection";
import { WorkSection } from "./components/sections/WorkSection";
import "./App.css";

function App() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset className="bg-transparent min-h-screen overflow-x-hidden">
        <header className="mobile-topbar md:hidden">
          <SidebarTrigger className="mobile-trigger" aria-label="Abrir menú" />
          <a className="brand" href="#top" aria-label="Pablo Dev - Inicio">
            <img
              src="/transparent-light.png"
              alt="Pablo Dev Logo"
              className="brand-logo-img"
            />
            <span>{"Pablo Dev"}</span>
          </a>
        </header>

        <div className="portfolio-shell w-full">
          <main id="main-content">
            <HeroSection />
            <WorkSection />
            <AboutSection />
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;