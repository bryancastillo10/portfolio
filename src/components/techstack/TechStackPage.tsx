"use client";
import Headers from "../ui/Headers";
import TechCard from "./TechCard";
import TechArticle from "./TechArticle";
import { techRows } from "./techStackGroupSplit";

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
        <article className="pt-8">
            <TechArticle/>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TechStackPage;