import AboutInfo from "@/app/about/(sections)/AboutInfo";
import TechStack from "@/app/about/(sections)/TechStack";
import Education from "@/app/about/(sections)/Education";
import Work from "@/app/about/(sections)/Work";
import SectionHeader from "../(reusables)/SectionHeader";
import { baseUrl } from "@/utils/baseUrl";

const  About = async () => {
  const res = await fetch(`${baseUrl}/api/about`, {
    cache: 'no-store',next: {revalidate: 0}
  });

  const workAndEducationData = await res.json();
  return (
    <section className='p-4'>
      <div className="max-w-[88%] mx-auto container">
      <SectionHeader title="About Bryan"/>
      <AboutInfo/>
      <TechStack/>
        <article className="mt-4 flex flex-col-reverse xl:flex-row justify-center gap-4 ">
          <Education data={workAndEducationData.education}/>
          <Work data={workAndEducationData.workExperience}/>
        </article>   
      </div> 
    </section>
  )
}

export default About;
