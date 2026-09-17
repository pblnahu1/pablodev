import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Footer } from "./components/layout/Footer";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/HeroSection";
import { WorkSection } from "./components/sections/WorkSection";
import { AboutPage } from "./components/pages/AboutPage";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAboutPage, setIsAboutPage] = useState(() => window.location.hash === "#sobre-mi");

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 700);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setIsAboutPage(window.location.hash === "#sobre-mi");

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
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
              {isAboutPage ? (
                <AboutPage />
              ) : (
                <>
                  <HeroSection />
                  <WorkSection />
                  <AboutSection />
                </>
              )}
            </main>
            <Footer />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;