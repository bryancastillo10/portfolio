"use client";
import HeroContainer from "@/components/container/HeroContainer";

// Landing Page Parent Compoent
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Project from "@/components/projects/Project";
import TechStackPage from "@/components/techstack/TechStackPage";
import Contact from "@/components/contact/Contact";

// Wave SVG
import WaveUp from "@/components/ui/WaveUp";
import WaveDown from "@/components/ui/WaveDown";
import { useThemeContext } from "@/context/useContext";
export default function Home() {
  const { theme } = useThemeContext();
  return (
    <main>
      <HeroContainer>
        <Hero />
        <div className="w-full md:min-h-auto">
          <WaveUp />
        </div>
      </HeroContainer>
      <About />
      <div
        className={`${
          theme ? "bg-primary text-secondary" : "bg-[#F4F3F2] text-primary"
        }`}
      >
        <div className="w-full md:min-h-auto">
          <WaveDown />
        </div>
        <Project />
        <div className="w-full md:min-h-auto">
          <WaveUp />
        </div>
        <TechStackPage />
        <div className="w-full md:min-h-auto">
          <WaveDown />
        </div>
        <Contact />
      </div>
    </main>
  );
}
