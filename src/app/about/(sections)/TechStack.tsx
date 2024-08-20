"use client";
import { adventPro } from "@/utils/font";
// import techStacks from "../techStack";

const TechStack = () => {
    
  return (
    <div className="mt-4">
    <div className="py-4 w-full h-[600px] md:h-[300px] border">
    <h1 className={`text-left mt-4 text-5xl ${adventPro.className}`}>My Tools for Development</h1>
    <div>
      {/* {techStacks.map((stack) => (
        <div key={stack.id}>
          <stack.iconComponent fill={stack.fillColor} width={50} height={50} />
          <h3>{stack.name}</h3>
          <p>{stack.category}</p>
          <p>{stack.description}</p>
        </div>
      ))} */}
    </div>
    
    </div>

  </div>
  )
}

export default TechStack;
