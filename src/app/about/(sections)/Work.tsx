"use client";
import { TestTubeDiagonal, Wrench, LucideIcon } from "lucide-react";
import SectionHeader from "@/app/(reusables)/SectionHeader";
import { useAppSelector } from "@/app/redux";
import { WorkExpDataProps } from "@/app/api/about/data";

interface WorkProps{
    data: WorkExpDataProps[];
}

const iconMap: {[key:string]: LucideIcon} = {
    testubediagonal:TestTubeDiagonal,
    wrench:Wrench
}

const Work = ({data}:WorkProps) => {
  const theme = useAppSelector((state)=> state.global.theme);
  return (
    <section className="w-full">
      <SectionHeader title="Professional Experience"/>
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
              {data.slice().reverse().map((work) => {
                const Icon = iconMap[work.icon.toLowerCase()];
                return (
                 <div className={`my-6 rounded-xl shadow-md w-[90%] xl:w-[75%] ${theme ?"bg-sky-900": "bg-slate-200"}`} key={work.id}>
                    <section className="p-6">
                        <div className="flex flex-col xl:flex-row gap-y-2 xl:justify-between gap-x-10 items-center">
                            <h1 className="text-2xl text-center xl:text-left font-semibold">{work.position}</h1>
                            <p className="my-2 italic">{work.dateRange}</p>
                        </div>
                        <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-center">
                            <div className="my-4 flex flex-col items-center xl:items-start space-y-4 md:space-y-4">
                                <h3 className={`${theme ?"bg-dark-primary text-teal-400" :"bg-secondary text-primary"} shadow-md  w-fit py-2 px-4 rounded-2xl`}>{work.company}</h3>
                                <h3 className={`${theme ?"bg-dark-primary text-teal-400" :"bg-secondary text-primary"} shadow-md  w-fit py-2 px-4 rounded-2xl`}>{work.location}</h3>
                            </div>
                            <div className={`my-4 md:my-0 p-4 rounded-full border shadow-sm ${theme ? "bg-slate-500/80" :"bg-teal-500/20"}`} >
                                {Icon && <Icon className="size-10 xl:size-12" />}
                            </div>
                        </div>                   
                        <div className="p-3 lg:max-w-[90%] xl:max-w-[90%] w-fit">
                            <p className="text-wrap lg:text-lg text-center xl:text-left">{work.description}</p>
                        </div>                       
                    </section>
                </div> 
                )
              })}
          </div>    
    </section>
  )
}

export default Work;