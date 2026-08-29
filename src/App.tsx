import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/HeroSection";
import { WorkSection } from "./components/sections/WorkSection";
import "./App.css";

function App() {
  return (
    <main className="portfolio-shell">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

export default App;