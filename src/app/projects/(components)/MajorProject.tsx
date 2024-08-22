"use client";
import { MajorProjectTypes } from "@/app/api/project/major/data";
import { CircleEllipsis, FolderCode, PlayCircle } from "lucide-react";
import { useAppSelector } from "@/app/redux";
import Image from "next/image";
import IconButton from '../../(reusables)/IconButton';

interface MajorProjectProps {
  project:MajorProjectTypes;
  backgroundColor?: string;
  order: string;
  isLayoutRight:boolean;
}

const MajorProject = ({ order, backgroundColor,isLayoutRight,project }: MajorProjectProps) => {
  const theme= useAppSelector((state)=>state.global.theme);
  return (
    <section
      className={`${order} ${backgroundColor} col-span-1 md:col-span-2 xl:order-none row-span-2 xl:row-span-3 rounded-xl shadow-md duration-500 ease-in-out hover:scale-110`}
    >
      <div className="grid grid-cols-2 max-w-[95%] gap-y-1 gap-x-4 mx-auto py-2">
        <article className={`mt-4 ${isLayoutRight ? "order-2":"order-none"}`}>
          {/* Header */}
          <h1 className="text-4xl tracking-wide">{project.title}</h1>
          <h3 className="text-2xl xl:my-4">{project.subtitle}</h3>
          <p className="py-3 xl:py-6 xl:text-xl">{project.objective}</p>

          {/* Tech Stack */}
          <div className="w-[95%]">
            <ul className="grid grid-cols-2 xl:grid-cols-3 items-center gap-2 my-2">
                {project.techStack.map((stack,index)=> (
                    <li key={index}
                    className={`${theme ?"bg-dark-primary text-teal-400" :"bg-secondary text-primary"} text-nowrap text-xs xl:text-xl w-fit font-light shadow-lg px-4 py-1 rounded-2xl`}>{stack}</li>                  
                ))}
            </ul>
            {/* Programming Language */}
            <div className="my-8">
              <h3 className="font-semibold text-xl">Programming Language</h3>
              <ul className="grid grid-cols-2  gap-2 items-center my-2">
                {project.language.map((lang,index)=> (
                  <li key={index} className={`${theme ?"bg-dark-primary text-teal-400" :"bg-secondary text-primary"} text-nowrap w-fit font-light shadow-lg  xl:text-xl
                   px-4 py-1 rounded-2xl`}>{lang}</li>
                ))}
              </ul>
            </div>
            {/* Skills Learned */}
            <div className="mt-4 mb-1">
              <h3 className="font-semibold text-xl">Skills Learned</h3>
              <p className="pt-4 text-pretty line-clamp-3 text-xl">{project.skillLearned}</p>              
            </div>

            {/* Links */}
            <div className="flex justify-center gap-10 items-center mt-8 xl:mt-10 mb-4">
              <IconButton icon={CircleEllipsis} link={()=>{}} />
              <IconButton icon={PlayCircle} link={project.demoLink}/>
              {project.gitRepo ? (<IconButton icon={FolderCode} link={project.gitRepo}/>):
                <span className="text-center cursor-not-allowed">Private <br/> Repository</span>
              }
            </div>
          </div>
        </article>

        {/* Preview Images */}
        <div className={`mt-10 overflow-hidden h-[400px] xl:h-[440px] ${isLayoutRight ? "order-1":"order-none"} `}>
          <div className="flex flex-col">
            {project.imgPath.map((img,index)=>(
              <Image width="400" height="250"
              key={index} src={img} alt={`${img}-pathname`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProject;