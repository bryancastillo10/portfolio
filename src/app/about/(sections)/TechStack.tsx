"use client";
import { useState } from "react";
import { useAppSelector } from "@/app/redux";
import { adventPro } from "@/utils/font";
import techStacks from "../techStack";

const TechStack = () => {
  const [hoveredId, setHoveredId] = useState<number|null>(null); 
  const theme = useAppSelector((state)=> state.global.theme);
  return (
    <div className="mt-4">
      <div className="py-4 w-full border">
        <h1 className={`text-left mt-4 text-5xl ${adventPro.className}`}>My Tools for Development</h1>

        {/* TechStack Hexagons  */}
        <div className="mt-8 flex flex-wrap gap-y-6">
          {techStacks.map((stack) => (
            <div key={stack.id}
              className="relative"
              onMouseEnter={() => setHoveredId(stack.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <stack.iconComponent className="duration-500 ease-in-out hover:scale-110 " fill={stack.fillColor} />
              {hoveredId === stack.id && (
                <div className={`absolute z-10 top-full left-8 p-6 rounded-md shadow-lg w-80
                ${theme ? "bg-dark-primary/80 text-white" :"bg-light-secondary/80 text-primary"}`}>
                  <h3 className="font-semibold">{stack.name}</h3>
                  <p className="mt-2 italic">{stack.category}</p>
                  <p className="mt-2 text-sm text-wrap text-left">{stack.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
