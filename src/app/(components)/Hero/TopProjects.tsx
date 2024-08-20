"use client";
import { PlayCircle, GitForkIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useMotionValue, motion } from 'framer-motion';
import { TopProjectsProps, 
          Auto_Delay, 
          Drag_Buffer, 
          Spring_Config,
          IndicatorProps, 
           } from './useCardCarousel';



export const TopProjects = ({projectInfo}:TopProjectsProps) => {
  const [cardIndex, setCardIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setCardIndex((pv) => {
          if (pv === projectInfo.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, Auto_Delay);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -Drag_Buffer && cardIndex < projectInfo.length - 1) {
      setCardIndex((pv) => pv + 1);
    } else if (x >= Drag_Buffer && cardIndex > 0) {
      setCardIndex((pv) => pv - 1);
    }
  };
  return (
    <div className="relative overflow-hidden pb-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${cardIndex * 100}%`,
        }}
        transition={Spring_Config}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Cards projectInfo={projectInfo} />
      </motion.div>

      <Indicator projectInfo={projectInfo} cardIndex={cardIndex} setCardIndex={setCardIndex} />

    </div>
  );
};


const Cards = ({projectInfo}:TopProjectsProps) => {
  return (
    <>
      {projectInfo.map((project,idx)=> {
        return (
          <motion.div
            key={project.id}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${project.image})`,
              backgroundSize:"cover",
              backgroundPosition:"center"
            }}

            animate={{
              scale: project.id === idx ? 0.95 : 0.85,
            }}

            transition={Spring_Config}
            className="w-full h-[71vh] shrink-0 rounded-xl object-cover"
          >
            <div className="p-6 md:p-10 space-y-2 text-white">
                <h1 className="text-4xl md:text-7xl font-semibold tracking-wider">{project.projectTitle}</h1>
                <h3 className="py-4 text-3xl">{project.projectSubtitle}</h3>
                {/* Description */}
                <p className="pt-4 text-xl text-balance">{project.description}</p>

                {/* Tech Stack */}
                <div className="pt-4">
                  <ul className="grid grid-cols-2 md:flex gap-4 items-center">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="md:text-2xl max-w-fit font-light shadow-lg bg-secondary text-primary px-4 py-2 rounded-2xl"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="pt-8 md:pt-12 flex  justify-start gap-10  mx-2 md:max-w-[50%]">
                  <div className="flex flex-col items-center gap-2 duration-500 ease-out p-4 ">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer ">
                      <PlayCircle size={50} className="" />
                    </a>
                    <p className="text-2xl">Demo</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 duration-500 ease-out p-4">
                    <a href={project.gitRepo} target="_blank" rel="noopener noreferrer">
                      <GitForkIcon size={50} />
                    </a>
                    <p className="text-2xl">Repository</p>
                  </div>
                </div>
             </div>         
          </motion.div>
        )
      })}
    </>
  )
}

const Indicator = ({ projectInfo, cardIndex, setCardIndex }:IndicatorProps) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {projectInfo.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setCardIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === cardIndex ? "bg-light-secondary" : "bg-neutral-500"
            }`}
          />
        )
      })}
    </div>
  );
};



