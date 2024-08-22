"use client";
import Image from "next/image";
import { CircleEllipsis, PlayCircle, FolderCode } from "lucide-react";
import { MinorProjectTypes } from "@/app/api/project/minor/data";
import IconButton from "@/app/(reusables)/IconButton";
import { useAppSelector } from "@/app/redux";
interface MinorProjectProps{
  project: MinorProjectTypes;
  backgroundColor?:string;
  order:string;
  isLayoutLeft:boolean;
}

const MinorProject = ({order,backgroundColor,isLayoutLeft,project}:MinorProjectProps) => {
  const theme = useAppSelector((state)=>state.global.theme);
  return (
    <section className={`${order} ${backgroundColor} col-span-1  lg:order-none row-span-2 rounded-xl shadow-md duration-500 ease-in-out hover:scale-110`}>
      <div className={`flex ${isLayoutLeft ? "flex-col-reverse": "flex-col"}  p-4`}>
            <Image  
              src={project.imgPath} 
              className="rounded-xl shadow-md self-center h-[220px] max-h-auto"
              alt="Project Preview-1"
              height="180"
              width="330"
               />
        <article className="flex flex-col max-w-[85%] mx-auto">
        {/* Header */}
        <div className="my-4 text-center">
          <h1 className="text-2xl tracking-wide">{project.title}</h1>
          <h3 className="text-xl">{project.subtitle}</h3>
        </div>
        {/* Programming Language */}
        <div className={`flex justify-between items-center gap-2 ${isLayoutLeft ? "my-0": "my-4"}`}>
        <h3 className="font-semibold xl:text-xl">Language</h3>
              <ul className="flex lg:flex-col items-center gap-1.5">
                {project.language.map((lang,index)=>(
                    <li key={index} className={`${theme ?"bg-dark-primary text-teal-400" :"bg-secondary text-primary"} 
                      text-nowrap w-fit font-light shadow-lg px-4 py-1 xl:text-xl rounded-2xl`}>{lang}</li>
                ))}
              </ul>
            </div>
            {/* Skills Learned */}
            <div className="my-2">
            <h3 className="font-semibold text-xl">Skills Learned</h3>
              <p className="xl:max-w-[80%] text-pretty line-clamp-2 pt-2">{project.skillLearned}</p>
            </div>
            {/* Links */}
            <div className="flex justify-center gap-10 items-center m-4">
              <IconButton icon={CircleEllipsis} link={()=>{}} />
              <IconButton icon={PlayCircle} link={project.demoLink}/>
              {project.gitRepo ? (<IconButton icon={FolderCode} link={project.gitRepo}/>):
                <span className="text-center cursor-not-allowed">Private <br/> Repository</span>
              }
            </div>
          </article>
      </div>      
    </section>
  )
}

export default MinorProject;
