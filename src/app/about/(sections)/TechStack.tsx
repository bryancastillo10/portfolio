"use client";
import { useState } from "react";
import { useAppSelector } from "@/app/redux";
import techStacks from "../techStack";
import SectionHeader from "@/app/(reusables)/SectionHeader";
import RevealText from "@/app/(reusables)/RevealText";

const TechStack = () => {
  const [hoveredId, setHoveredId] = useState<number|null>(null); 
  const theme = useAppSelector((state)=> state.global.theme);
  return (
    <div className="mt-4">
      <div className="py-4 w-full">
        <SectionHeader title="My Tools for Development"/>
        <RevealText withSlider isLeft={false}>
          <p className="pt-4 text-base leading-relaxed w-fittext-center md:text-left lg:max-w-[70%]">
          Here are some of the technologies, libraries, and frameworks that I had
          experience to utilize in order to build meaningful software applications.</p>
        </RevealText>
        {/* TechStack Hexagons  */}
        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-y-6">
          {techStacks.map((stack) => (
            <div key={stack.id}
              className="relative"
              onMouseEnter={() => setHoveredId(stack.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <stack.iconComponent className="duration-500 ease-in-out hover:scale-110 " fill={theme ? "#050F0D" :"#3C6997"} />
              {hoveredId === stack.id && (
                <div className={`absolute z-10 top-full left-8 p-6 rounded-md shadow-lg w-80
                ${theme ? "bg-[#070066] text-white" :"bg-light-secondary/80 text-primary"}`}>
                  <h3 className="font-semibold">{stack.name}</h3>
                  <p className="mt-2 italic">{stack.category}</p>
                  <p className="mt-2 text-sm text-wrap text-left">{stack.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="my-8">
         <RevealText withSlider isLeft>
          <p className="mt-6 text-base text-center leading-relaxed md:text-left lg:max-w-[70%]">Learning these tech stacks 
            and collaborating with other developers on projects has significantly expanded my professional experience,
            enhancing my ability to tackle challenges and deliver innovative solutions effectively.
          </p>
         </RevealText>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
