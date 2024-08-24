"use client";
import { Atom,Dna, Leaf, LucideIcon } from "lucide-react";
import { useAppSelector } from "@/app/redux";
import SectionHeader from "@/app/(reusables)/SectionHeader";
import { EducationDataProps } from '../../api/about/data';
import ClipContainer from "@/app/(reusables)/ClipContainer";
interface EducationProps{
    data: EducationDataProps[];

}

const iconMap: { [key: string]: LucideIcon } = {
    dna: Dna,
    atom: Atom,
    leaf: Leaf,
}

const Education = ({data}: EducationProps) => {
    const theme = useAppSelector((state)=> state.global.theme);

    return (
      <section className="w-full">
          <SectionHeader title="Educational Background"/>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
              {data.slice().reverse().map((educ) => {
                const Icon = iconMap[educ.icon.toLowerCase()];
                return (
                 <div className={`my-6 rounded-xl shadow-md w-[90%] xl:w-[75%] ${theme ?"bg-dark-primary": "bg-gray-200"}`} key={educ.id}>
                    <ClipContainer overlayStyle="bg-emerald-800 text-white rounded-xl">
                        <section className="p-6">
                            <div className="flex flex-col xl:flex-row gap-y-2 xl:justify-between gap-x-10 items-center">
                                <h1 className="text-2xl text-center xl:text-left font-semibold">{educ.degree} in {educ.field}</h1>
                                <p className="my-2 italic">{educ.dateRange}</p>
                            </div>
                            <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-center">
                                <div className="my-4 flex flex-col items-center xl:items-start space-y-4 md:space-y-4">
                                    <h3 className={`${theme ?"bg-teal-400 text-dark-primary" :"bg-light-secondary text-primary"} shadow-md  w-fit py-2 px-4 rounded-2xl`}>{educ.school}</h3>
                                    <h3 className={`${theme ?"bg-teal-400 text-dark-primary" :"bg-light-secondary text-primary"} shadow-md  w-fit py-2 px-4 rounded-2xl`}>{educ.location}</h3>
                                </div>
                                <div className={`my-4 md:my-0 p-4 rounded-full border shadow-sm ${theme ? "bg-teal-500/80" :"bg-teal-500/20"}`} >
                                    {Icon && <Icon className="size-10 xl:size-12" />}
                                </div>
                            </div>                   
                            <div className="p-3 lg:max-w-[90%] xl:max-w-[80%] w-fit">
                                <p className="text-wrap lg:text-lg text-center xl:text-left">{educ.description}</p>
                            </div>                       
                        </section>
                    </ClipContainer>
                </div> 
                )
              })}
          </div>    
      </section>
    )
  }

export default Education;

