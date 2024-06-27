"use client";
import About from "@/components/about/About";
import Project from "@/components/projects/Project";

import WaveDown from "@/components/ui/WaveDown";
import { useThemeContext } from "@/context/useContext";
export default function Home() {
  const { theme } = useThemeContext();
  return (
    <main>
      <About />
      <div className={`${theme ? "bg-primary text-secondary": "bg-[#F4F3F2] text-primary"}`}>
      <div className="w-full md:min-h-auto">
          <WaveDown/>
        </div>
      <Project/>


      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est molestias
        alias dolor, suscipit accusantium quam fuga quaerat modi, sapiente
        minima error unde iusto architecto, saepe numquam sint a beatae non
        deleniti exercitationem. Possimus labore et nulla perspiciatis corrupti
        alias doloribus vitae ipsa nemo iusto qui repellendus tenetur, beatae
        voluptas voluptatem.
        </p>
      </div>
    </main>
  );
}
