"use client";
import Html from "../../../public/techstack/HTML.svg";
import Tailwind from "../../../public/techstack/Tailwind CSS.svg";
import React from "../../../public/techstack/React.svg";
import Python from "../../../public/techstack/Python.svg";

import TechStackIcon from "./TechStackIcon";

const TechStackPage = () => {


  return (
    <section className="bg-accent pt-10">
      <div className="flex flex-col gap-2 max-w-[80%] mx-auto">
<div className="grid grid-cols-3">
          <TechStackIcon
           svgIcon={React} 
          techStackName="React"
          />
          <TechStackIcon
           svgIcon={Html} 
          techStackName="HTML"
          />
          <TechStackIcon
           svgIcon={Tailwind} 
          techStackName="Tailwind"
          />
          <TechStackIcon
           svgIcon={Python} 
          techStackName="Python"
          />
</div>
      </div>
    </section>
  );
};

export default TechStackPage;
