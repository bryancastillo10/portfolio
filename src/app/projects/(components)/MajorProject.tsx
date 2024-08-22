"use client";
import { CircleEllipsis, CirclePlay, FolderCode } from "lucide-react";
import Image from "next/image";
import ProjectPreview from "@/asset/projectpreview/chmstash.png";
import ProjectPreview2 from "@/asset/projectpreview/chmstash2.png";
import ProjectPreview3 from "@/asset/projectpreview/chmstash3.png"
import ProjectPreview4 from "@/asset/projectpreview/chmstash4.png"
interface MajorProjectProps {
  backgroundColor?: string;
  order: string;
  isLayoutRight:boolean;
}

const MajorProject = ({ order, backgroundColor,isLayoutRight }: MajorProjectProps) => {
  


  return (
    <section
      className={`${order} ${backgroundColor} col-span-1 md:col-span-2 xl:order-none row-span-2 xl:row-span-3 rounded-xl shadow-md`}
    >
      <div className="grid grid-cols-2 max-w-[95%] gap-y-1 gap-x-4 mx-auto py-2">
        <article className={`mt-4 ${isLayoutRight ? "order-2":"order-none"}`}>
          {/* Header */}
          <h1 className="text-4xl">Project Title</h1>
          <h3 className="text-2xl">Project Subtitle</h3>
          <p className="">Addressing common issues in a chemical laboratory</p>

          {/* Tech Stack */}
          <div className="w-[95%]">
            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-2 items-center my-2">
              <li className="bg-light-secondary text-nowrap w-fit font-light shadow-lg text-primary px-4 py-1 rounded-2xl">MERN Stack</li>
              <li className="bg-light-secondary text-nowrap w-fit font-light shadow-lg text-primary px-4 py-1 rounded-2xl">Recharts</li>
              <li className="bg-light-secondary text-nowrap w-fit font-light shadow-lg text-primary px-4 py-1 rounded-2xl">Socket IO</li>
              <li className="bg-light-secondary text-nowrap w-fit font-light shadow-lg text-primary px-4 py-1 rounded-2xl">Tailwind CSS</li>
            </ul>
            {/* Programming Language */}
            <div className="flex items-center gap-2 my-4">
              <h3 className="font-semibold">Programming Language</h3>
              <p>JavaScript</p>
            </div>
            {/* Skills Learned */}
            <div className="mt-4 mb-1">
              <h3 className="font-semibold">Skills Learned</h3>
              <p className="text-pretty line-clamp-2">This project helps me improve my usage of Git since it is a collaboration with another developer.
                It also provide some insights on backend development by crafting API endpoints using Express at Node JS.
              </p>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-10 items-center mt-8 xl:mt-10 mb-4">
              <CircleEllipsis className=""/>
              <CirclePlay className="" />
              <FolderCode className="" />
            </div>
          </div>
        </article>

        {/* Preview Images */}
        <div className={`overflow-hidden h-[320px] ${isLayoutRight ? "order-1":"order-none"}`}>
          <div className="flex flex-col">
            <Image src={ProjectPreview} alt="Project Preview 1" />
            <Image src={ProjectPreview2} alt="Project Preview 2" />
            <Image src={ProjectPreview3} alt="Project Preview 3" />
            <Image src={ProjectPreview4} alt="Project Preview 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProject;