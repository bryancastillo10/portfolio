"use client";
import { adventPro } from "@/utils/font";
import techStacks from "../techStack";

const TechStack = () => {
    
  return (
    <div className="mt-4">
    <div className="py-4 w-full border">
    <h1 className={`text-left mt-4 text-5xl ${adventPro.className}`}>My Tools for Development</h1>
    <div className="mt-8 flex flex-wrap">
      {techStacks.map((stack) => (
        <div key={stack.id} className="">
          <stack.iconComponent fill={stack.fillColor}  />
        </div>
      ))}
    </div>
    
    </div>

  </div>
  )
}

export default TechStack;
