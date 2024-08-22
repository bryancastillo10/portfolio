"use client";
import Image from "next/image";
import { CircleEllipsis, CirclePlay, FolderCode } from "lucide-react";
import NPKAppImg from "@/asset/projectpreview/npkcalcapp.png";

interface MinorProjectProps{
  backgroundColor?:string;
  order:string;
  isLayoutLeft:boolean;
}

const MinorProject = ({order,backgroundColor,isLayoutLeft}:MinorProjectProps) => {
  return (
    <section className={`${order} ${backgroundColor} col-span-1 lg:order-none row-span-2 rounded-xl shadow-md`}>
      <div className={`flex ${isLayoutLeft ? "flex-col-reverse": "flex-col"} p-4`}>
        <Image src={NPKAppImg} className="rounded-xl shadow-md h-[150px]"
        alt="Project Preview 1" />
        <article className="flex flex-col">
        {/* Header */}
        <div className="my-4 text-center">
          <h1 className="text-2xl tracking-wide">Project Title</h1>
          <h3 className="text-xl">Project Subtitle</h3>
        </div>
        {/* Programming Language */}
        <div className={`flex justify-between items-center gap-2 ${isLayoutLeft ? "my-0": "my-4"}`}>
            <h3 className="font-semibold">Programming Language</h3>
              <p className="bg-light-secondary text-nowrap w-fit font-light shadow-lg text-primary px-4 py-1 rounded-2xl">TypeScript & Python</p>
            </div>
            {/* Skills Learned */}
            <div className="my-2">
              <h3 className="font-semibold">Skills Learned</h3>
              <p className="text-pretty line-clamp-2">This project helps me improve my usage of Git since it is a collaboration with another developer.
                It also provide some insights on backend development by crafting API endpoints using Express at Node JS.
              </p>
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
