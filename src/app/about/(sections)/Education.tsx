"use client";
import SectionHeader from "@/app/(reusables)/SectionHeader";
import { WorkAndEducationType } from "@/app/api/about/route";

interface EducationProps{
    data: WorkAndEducationType;
}

const Education = ({data}:EducationProps) => {
  console.log(data.education);
  return (
    <section className="w-full h-[300px]">
        <SectionHeader title="Educational Background"/>
    </section>
  )
}

export default Education;
