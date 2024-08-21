import SectionHeader from "@/app/(reusables)/SectionHeader";

const Projects = () => {
  return (
    <section className='p-4'>
       <div className="max-w-[88%] mx-auto container">
       <SectionHeader title="My Tech Projects" />
        <hr className="border-secondary my-5"/>
        {/* Project Content */}
       <div className="grid grid-cols-2 gap-4 mt-4">
          <section>
          <h1 className=" text-2xl font-semibold">Project Categories</h1>   
          <ul>
            <li className="ml-7 list-disc my-2">All</li>
            <li className="ml-7 list-disc my-2">Frontend Web Design</li>
            <li className="ml-7 list-disc my-2">Full Stack App</li>
            <li className="ml-7 list-disc my-2">Data Science</li>
            <li className="ml-7 list-disc my-2">Bioinformatics</li>
          </ul> 
          <div className="mt-8">
            <h1 className=" text-2xl font-semibold">Array of Object Properties</h1>
            <ul>
              <li className="ml-7 list-disc my-2">id</li>
              <li className="ml-7 list-disc my-2">projectTitle</li>
              <li className="ml-7 list-disc my-2">projectSubtitle</li>
              <li className="ml-7 list-disc my-2">imgPreview</li>
              <li className="ml-7 list-disc my-2">description</li>
              <li className="ml-7 list-disc my-2">category : array of strings</li>
              <li className="ml-7 list-disc my-2">techstack : array of strings</li>
              <li className="ml-7 list-disc my-2">demo (optional)</li>
              <li className="ml-7 list-disc my-2">gitRepo</li>
            </ul>    
          </div>
          </section>
          <section>
          <h1 className="text-2xl font-semibold">List of Projects</h1> 
          <ul>
            <li className="ml-7 list-disc my-2">QIIME2 AD Analysis</li>
            <li className="ml-7 list-disc my-2">AnaeroDash: Anaerobic Digestion Analysis Dashboard App</li>
            <li className="ml-7 list-disc my-2">Bioinfo Toolkit Scripts</li>
            <li className="ml-7 list-disc my-2">Biobytes PairSync</li>
            <li className="ml-7 list-disc my-2">Global CO<sub>2</sub> Emission Analysis</li>
            <li className="ml-7 list-disc my-2">NPK Calculator App</li>
            <li className="ml-7 list-disc my-2">Master Degree Thesis: My Data Analysis</li>
            <li className="ml-7 list-disc my-2">ChemStash</li>
            <li className="ml-7 list-disc my-2">SpaceChat</li>
            <li className="ml-7 list-disc my-2">Airbnb Clone</li>
            <li className="ml-7 list-disc my-2">Sushi Website Design</li>
            <li className="ml-7 list-disc my-2">Easybank Landing Page</li>
            <li className="ml-7 list-disc my-2">Manage Landing Page</li>
            <li className="ml-7 list-disc my-2">Bry's Tech Shop</li>
          </ul>
          </section>  
       </div>
       <hr className="border-secondary my-5"/>
        {/* Card Layout */}
        <div className="w-[350px] h-[400px] bg-gray-500 p-4">
          <div className="max-w-[90%] mx-auto h-[150px] bg-emerald-500">
              <p className="text-center">Image</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
