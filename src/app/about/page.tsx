import AboutInfo from "@/app/about/(sections)/AboutInfo";
import TechStack from "@/app/about/(sections)/TechStack";
import Education from "@/app/about/(sections)/Education";
import Work from "@/app/about/(sections)/Work";
import SectionHeader from "../(reusables)/SectionHeader";

const  About = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/about`, {
    cache: 'no-store'
  });

  const workAndEducationData = await res.json();
  return (
    <section className='p-4'>
      <div className="max-w-[88%] mx-auto container">
      <SectionHeader title="About Bryan"/>
      <AboutInfo/>
      <TechStack/>
        <article className="mt-4 flex flex-col-reverse md:flex-row justify-center items-center w-full gap-4 ">
          <Education data={workAndEducationData}/>
          <Work data={workAndEducationData}/>
        </article>   
      </div> 
    </section>
  )
}

export default About;
