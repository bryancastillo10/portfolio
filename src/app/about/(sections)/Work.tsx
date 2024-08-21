"use client";
import SectionHeader from "@/app/(reusables)/SectionHeader";
import { WorkAndEducationType } from "@/app/api/about/route";

interface WorkProps{
    data: WorkAndEducationType;
}

const Work = ({data}:WorkProps) => {
    console.log(data.workExperience);
  return (
    <section className="w-full h-[300px]">
      <SectionHeader title="Professional Experience"/>
    </section>
  )
}

export default Work;