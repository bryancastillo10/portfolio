"use client";
import Image from "next/image";
import { ExternalLink , FileJson, LucideIcon } from "lucide-react";
import { useAppSelector } from "@/app/redux";
import { projectsProps } from "./projectInfo";
import IconButton from "@/app/(reusables)/IconButton";
import ClipContainer from "@/app/(reusables)/ClipContainer";
import {motion, useScroll, useSpring, useTransform } from "framer-motion";

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
  const {scrollYProgress} = useScroll();

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 50,
  });

  const lineHeight = useTransform(scaleProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 grid-rows-6 gap-4 w-full">
      {/* Vertical Line */}
      <motion.div 
        style={{ height: lineHeight, top: 0,}}
        className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px]
        ${theme ? "bg-teal-400":"bg-secondary"}
        `} /> 

       
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
  const isMdScreen = window.matchMedia("(min-width: 768px)").matches;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isMdScreen ? (alignment === "left" ? 50 : -50) : 0, 
      y: !isMdScreen ? -30 : 0 
    },
    loaded: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="loaded"
      viewport={{once:true, amount:0.8}}
      className={`relative rounded-xl shadow-md p-2 w-full
        ${rowConfig}
        ${alignment === "left" ? `lg:col-start-1` : `lg:col-start-2`}
        ${theme ? "bg-dark-primary/90":"bg-sky-700/40"}
      `}
    >
      <ClipContainer overlayStyle={`${theme ? "bg-sky-500/80":"bg-secondary text-white"} rounded-2xl`}>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 ">
          {/*  Project Info Column */}
          <div className={`${alignment === "left" ? "md:order-2":"order-none"}`}>
            <div className="flex gap-4 items-center mb-4">
              <div className={`p-2.5 border rounded-full ${theme ? "bg-teal-main bg-sky-500/80":"border-secondary bg-sky-500/40"}  ${alignment === "right" ? "lg:ml-2.5":"lg:ml-1"}`}>
                <Icon size="20" />
              </div>
              <h1 className="font-semibold text-3xl  text-center xl:text-left xl:text-4xl tracking-wide">{projectTitle}</h1>
            </div>
              <h3 className="text-lg">{projectSubtitle}</h3>
              <div className="mt-8 mb-4 flex justify-evenly items-center">
                <ul className="flex gap-2 items-center">
                  {language.map((lang,index)=> (
                    <li key={index} className={`${theme ? "text-dark-primary bg-teal-400 ":"bg-teal-700 text-white"} tracking-wide rounded-2xl shadow-md px-4 py-2`}>
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
              width="400"
              height="350"
              />
          </div>
        </section>
      </ClipContainer>
      <CirclePoint theme={theme} position={alignment} />
    </motion.div>
    
  );
};

const CirclePoint = ({ position,theme }: CirclePointProps) => {
  const pointPos =
    position === "left"
      ? "right-[-4%]"
      : "left-[-4%]";

  const circleVariants = {
    start:{rotate:"0deg"}, 
    loaded:{rotate:"360deg"}
  };


  return (
    <motion.div
      variants={circleVariants}
      initial="start"
      animate="loaded"
      transition={{duration:2, ease:"easeOut"}}
      className={`hidden xl:block absolute top-1 transform  ${pointPos} size-14 p-2 rounded-full
      ${theme ? "bg-sky-900 text-teal-400":"bg-white"}
      `}
    >
      <FileJson className="absolute top-3 left-3"/>
    </motion.div>
  );
};

export default Timeline;