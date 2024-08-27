import AboutInfo from "@/app/about/(sections)/AboutInfo";
import TechStack from "@/app/about/(sections)/TechStack";
import Education from "@/app/about/(sections)/Education";
import Work from "@/app/about/(sections)/Work";
import SectionHeader from "../(reusables)/SectionHeader";

import { workExperienceData } from "@/app/api/about/data";
import { educationData } from "@/app/api/about/data";


const  About = async () => {
  return (
    <section className='p-4 overflow-x-hidden'>
      <div className="max-w-[88%] mx-auto container">
      <SectionHeader title="About Bryan"/>
      <AboutInfo/>
      <TechStack/>
        <article className="mt-4 flex flex-col-reverse xl:flex-row justify-center gap-4 ">
          <Education data={educationData}/>
          <Work data={workExperienceData}/>
        </article>   
      </div> 
    </section>
  )
}

export default About;
