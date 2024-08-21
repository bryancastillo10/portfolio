"use client";
import SectionHeader from "@/app/(reusables)/SectionHeader";
import { WorkExpDataProps } from "@/app/api/about/data";

interface WorkProps{
    data: WorkExpDataProps[];
}

const Work = ({data}:WorkProps) => {
    console.log(data);
  return (
    <section className="w-full h-[300px]">
      <SectionHeader title="Professional Experience"/>
    </section>
  )
}

export default Work;