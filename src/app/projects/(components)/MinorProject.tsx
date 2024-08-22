"use client";
import Image from "next/image";
import { CircleEllipsis, CirclePlay, FolderCode } from "lucide-react";
import NPKAppImg from "@/asset/projectpreview/npkcalcapp.png";
import { MinorProjectTypes } from "@/app/api/project/minor/data";

interface MinorProjectProps{
  project: MinorProjectTypes;
  backgroundColor?:string;
  order:string;
  isLayoutLeft:boolean;
}

const MinorProject = ({order,backgroundColor,isLayoutLeft,project}:MinorProjectProps) => {

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
        <article className="flex flex-col">
        {/* Header */}
        <div className="my-4 text-center">
          <h1 className="text-2xl tracking-wide">{project.title}</h1>
          <h3 className="text-xl">{project.subtitle}</h3>
        </div>
        {/* Programming Language */}
        <div className={`flex justify-between items-center gap-2 ${isLayoutLeft ? "my-0": "my-4"}`}>
            <h3 className="font-semibold">Language/App</h3>
              <ul className="flex gap-1.5">
                {project.language.map((lang,index)=>(
                    <li key={index} className="bg-light-secondary text-nowrap w-fit 
                    font-light shadow-lg text-primary px-4 py-1 rounded-2xl">{lang}</li>
                ))}
              </ul>
            </div>
            {/* Skills Learned */}
            <div className="my-2">
              <h3 className="font-semibold">Skills Learned</h3>
              <p className="text-pretty line-clamp-2">{project.skillLearned}</p>
            </div>
            {/* Links */}
            <div className="flex justify-center gap-10 items-center m-4">
              <CircleEllipsis className=""/>
              <CirclePlay className="" />
              <FolderCode className="" />
            </div>
          </article>
      </div>      
    </section>
  )
}

export default MinorProject;
