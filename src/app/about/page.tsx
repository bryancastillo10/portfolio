import { adventPro } from "@/utils/font";
import AboutInfo from "./(sections)/AboutInfo";
import TechStack from "./(sections)/TechStack";

const About = () => {
  return (
    <section className='p-4'>
      <div className="max-w-[88%] mx-auto container">
      <h1 className={`text-center lg:text-left mt-4 text-5xl ${adventPro.className}`}>About Bryan</h1>
      <AboutInfo/>
      <TechStack/>
        <div className="mt-8">
          {/* Layout Draft */}
         
     
          <div className="mt-4 flex flex-col-reverse md:flex-row justify-center items-center w-full gap-4 ">
            <div className="w-full h-[150px] bg-slate-500">
              <p className='my-8 text-xl text-primary text-center'>Educational Background</p>
            </div>
            <div className="w-full h-[150px] bg-slate-500">
              <p className='my-8 text-xl text-primary text-center'>Work Experience</p>
            </div>
          </div>
          {/* Content Draft */}  
            <div className="p-4">
              <h1 className='text-2xl font-semibold pb-2'>Work Experience and Education</h1>
              <p  className='text-base text-center md:text-left mt-4'>Associate Researcher</p>
              <p  className='text-base text-center md:text-left mt-4'>Laboratory Chemist</p>

              <p  className='text-base text-center md:text-left mt-4'>Master of Science in Environmental Engineering</p>
              <p  className='text-base text-center md:text-left mt-4'>Bachelor of Science in Biological Engineering</p>
              <p  className='text-base text-center md:text-left mt-4'>Bachelor of Science in Chemistry</p>
            </div>
          </div>
        </div> 
    </section>
  )
}

export default About;
