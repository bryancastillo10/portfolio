"use client";
import Headers from "../ui/Headers";
import TechCard from "./TechCard";
import { techRows } from "./techStackGroupSplit";
import ParagraphContent from "../ui/ParagraphContent";

const TechStackPage = () => {


  return (
    <section className="bg-accent pt-10">
      <div className="max-w-[80%] mx-auto">
        <Headers>My Tools for Development</Headers>
        <div className="md:grid  md:grid-cols-2 items-start mt-8">
          <article className="">
          {techRows.map((row, index) => (
            <div 
              key={index} 
              className={`flex flex-shrink-0 md:flex-wrap gap-2  md:justify-start ${
                index === 1 || index === 3 ? 'mt-4 ml-8' : 'mt-4'
              }`}
            >
              {row.map((tech) => (
                <TechCard key={tech.id} tech={tech} />
              ))}
            </div>
          ))}
        </article>
          <article className="p-8">
            <Headers>Versatile, Reliable, Scalable</Headers>
            <ParagraphContent paragraph="Here are some of the technologies, libraries, and frameworks that I had
            experience to utilize in order to build meaningful software applications."/>

            <ParagraphContent paragraph="Learning these tech stacks and collaborating with other developers on projects has significantly expanded my professional experience,
             enhancing my ability to tackle challenges and deliver innovative solutions effectively."/>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TechStackPage;