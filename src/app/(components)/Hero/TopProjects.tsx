"use client";
import Image from "next/image";
import { PlayCircle, GitForkIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { projectInfo } from "./projectInfo"; 
import useCardCarousel from "./useCardCarousel";

const TopProjects = () => {
  const { slideIndex, handlePrevious, handleNext } = useCardCarousel(projectInfo);
  return (
    <section className="mt-8 max-w-[80%] mx-auto space-y-10">
      <h1 className="pt-10 text-4xl tracking-wider">Top Projects</h1>
      <div className="p-12 flex flex-col justify-center items-center gap-4 mb-12 md:mb-6">
        <div className="flex relative transition-transform ease-out duration-1000">
          {/* Card Container */}
          {projectInfo.map((project, i) => (
            <div
              key={project.id}
              className={`p-6 flex justify-between shrink-0 gap-2 mx-auto shadow-md w-[300px] h-[430px] md:w-[700px] md:h-[300px] relative rounded-2xl transition-transform ${
                i === slideIndex ? "block" : "hidden"
              }`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image || "https://placehold.co/550x300"}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover rounded-2xl "
                  unoptimized
                  alt={`${project.projectTitle}-img`}
                />
                {/* Teal Overlay */}
                <div className="absolute inset-0 bg-teal-500/50" />
              </div>
              {/* Header */}
              <div className="relative z-10 space-y-2">
                <h1 className="text-2xl font-semibold tracking-wide">{project.projectTitle}</h1>
                <h3 className="text-lg">{project.projectSubtitle}</h3>
                {/* Description */}
                <p className="pt-4 text-sm text-balance">{project.description}</p>

                {/* Tech Stack */}
                <div className="pt-4">
                  <ul className="grid grid-cols-2 md:flex gap-4 items-center">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="max-w-fit font-light shadow-lg bg-secondary text-primary px-4 py-2 rounded-2xl"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="pt-6 md:pt-4 grid grid-cols-2 md:justify-evenly mx-2 md:max-w-[50%] ">
                  <div className="flex flex-col gap-1">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <PlayCircle size={28} />
                    </a>
                    <small>Demo</small>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <a href={project.gitRepo} target="_blank" rel="noopener noreferrer">
                      <GitForkIcon size={28} />
                    </a>
                    <small>Repository</small>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Arrows */}
          <div
            className="flex items-center justify-between left-[-80px] right-[-80px]
            md:right-[-60px] md:left-[-60px]  p-4 absolute z-0 inset-0"
          >
            <button
              onClick={handlePrevious}
              className="p-1 rounded-full text-black shadow-md bg-white/50 hover:bg-white"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={handleNext}
              className="p-1 rounded-full text-black shadow-md bg-white/50 hover:bg-white"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          {/* Carousel Indicator */}
          <div className="absolute bottom-0 md:bottom-0 left-0 right-0">
            <div className="flex justify-center items-center gap-2">
              {projectInfo.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all size-3 bg-white rounded-full ${
                    slideIndex === i ? "p-2" : "bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProjects;
