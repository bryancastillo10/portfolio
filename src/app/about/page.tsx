import React from 'react'

const About = () => {
  return (
    <section className='p-4'>
      <div className="max-w-[88%] mx-auto container">
      <h1 className='text-center mt-4 text-2xl'>About Page</h1>
        <div className="mt-8">
          {/* Layout Draft */}
          <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-4 ">
            <div className="w-full h-[150px] bg-slate-500">
              <p className='my-8 text-xl text-primary text-center'>About Description</p>
              <p className='ml-20 mt-4 text-primary'>View Projects Button</p>
              <p className='ml-20 mt-4 text-primary'>Contact Me Button</p>
            </div>
            <div className="w-full h-[150px] bg-slate-500">
              <p className='my-8 text-xl text-primary text-center'>Image</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full h-[400px] md:h-[300px] bg-slate-500">
            <p className='pt-8 text-xl text-primary text-center'>Tech Stack Section</p>
            <p className='ml-10 mt-4 text-primary'>Short description</p>
            <p className='ml-10 mt-4 text-primary'>Hexagon Logos with Tooltip</p>
            </div>
          </div>
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
              <h1 className='text-2xl font-semibold pb-2'>About Bryan</h1>
              <p className='text-base text-center md:text-left'>Bryan adapts to the rapidly changing digital world and discovers 
              that producing and maintaining software can solve some real-world problems.</p>
              <p className='text-base text-center md:text-left mt-4'>He became a self-taught programmer capable 
                of creating valuable software applications due to his resourcefulness and perseverance in his 
                career development.</p>
            </div>
            
            <div className="p-4">
              <h1 className='text-2xl font-semibold pb-2'>Tech Stack</h1>
              <p className='text-base text-center md:text-left mt-4'>Here are some of the technologies, libraries, 
                and frameworks he learned and used to build applications</p>
            </div>
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
