import { adventPro } from "@/utils/font";
import AboutInfo from "@/app/about/(sections)/AboutInfo";
import TechStack from "@/app/about/(sections)/TechStack";

const  About = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/about`, {
    cache: 'no-store'
  });

  const workAndEducationData = await res.json();
  console.log(workAndEducationData);
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
       
          </div>
        </div> 
    </section>
  )
}

export default About;
