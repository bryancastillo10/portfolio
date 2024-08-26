"use client";
import Image from "next/image";
import { ExternalLink , FileJson, LucideIcon } from "lucide-react";
import { useAppSelector } from "@/app/redux";
import { projectsProps } from "./projectInfo";
import IconButton from "@/app/(reusables)/IconButton";

interface TimelineBlockProps {
  alignment: "left" | "right";
  projectTitle: string;
  theme:boolean;
  projectSubtitle: string;
  demoLink: string;
  imgPath:string;
  language:string[];
  icon: LucideIcon;
  rowConfig:string;
}

interface TimelineProps {
  projects: projectsProps[];
}

interface CirclePointProps {
  theme:boolean;
  position: "left" | "right";
}

const Timeline = ({ projects }: TimelineProps) => {
  const theme = useAppSelector((state)=>state.global.theme);

  return (
    <section className="relative grid grid-cols-1 xl:grid-cols-2 grid-rows-6 gap-4 w-full">
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-400" />
       
      {projects.map((proj) => (
        <TimelineBlock
          key={proj.id}
          theme={theme}
          alignment={proj.id % 2 === 0 ? "left" : "right"}
          projectTitle={proj.projectTitle}
          projectSubtitle={proj.projectSubtitle}
          imgPath={proj.imgPath}
          demoLink={proj.demoLink}
          rowConfig={proj.rowConfig}
          icon={proj.icon}
          language={proj.language}
        />
      ))}
    </section>
  );
};

const TimelineBlock = ({
  alignment,
  theme,
  projectTitle,
  projectSubtitle,
  imgPath,
  demoLink,
  icon: Icon,
  rowConfig,
  language
}: TimelineBlockProps) => {

  return (
    
    <div
      className={`relative rounded-xl shadow-md p-2 w-full 
        ${rowConfig}
        ${alignment === "left" ? `xl:col-start-1` : `xl:col-start-2`}
        ${theme ? "bg-dark-primary":"bg-gray-400/40"}
      `}
    >
      <section className="grid grid-cols-2 gap-2 p-4 ">
        {/*  Project Info Column */}
        <div className={`${alignment === "left" ? "order-2":"order-none"}`}>
          <div className="flex gap-4 items-center mb-4">
            <div className={`p-3 border rounded-full ${theme ? "bg-teal-500 bg-sky-500/80":"border-secondary bg-sky-500/40"}`}>
              <Icon size="28" />
            </div>
            <h1 className="font-semibold text-3xl  text-center xl:text-left xl:text-4xl tracking-wide">{projectTitle}</h1>
          </div>
            <h3 className="text-lg">{projectSubtitle}</h3>
            <div className="mt-8 flex justify-evenly items-center">
              <ul className="flex gap-2 items-center">
                {language.map((lang,index)=> (
                  <li key={index} className={`${theme ? "text-dark-primary bg-teal-400 ":"bg-secondary text-white"} rounded-2xl shadow-md px-4 py-2`}>
                    {lang}
                  </li>
                ))}
              </ul>
              <div className={`w-fit py-2 px-2.5 rounded-full border ${theme ? "bg-amber-500/80 text-white":"bg-yellow-400/60 text-dark-primary"}`}>
                <IconButton icon={ExternalLink} link={demoLink} tooltip="Live Demo 🍿" iconSize="25" />
              </div>
            </div>
        </div>

        {/* Image Column */}
        <div className="rounded-xl shadow-md">
          <Image 
            src={imgPath} 
            alt={`preview-${projectTitle}`}
            width="600"
            height="500"
            />
        </div>
      </section>
      <CirclePoint theme={theme} position={alignment} />
    </div>
    
  );
};

const CirclePoint = ({ position,theme }: CirclePointProps) => {
  const pointClasses =
    position === "left"
      ? "left-full -translate-x-1/2"
      : "right-full translate-x-1/2";

  return (
    <div
      className={`hidden xl:block absolute top-1/2 transform -translate-y-1/2 ${pointClasses} size-14 p-2 rounded-full
      ${theme ? "bg-sky-900 text-teal-400":"bg-white"}
      `}
    >
      <FileJson className="absolute top-3 left-3"/>
    </div>
  );
};

export default Timeline;