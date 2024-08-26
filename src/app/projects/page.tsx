import BentoLayout from "@/app/projects/(components)/BentoLayout";
import majorProjectsData from "@/app/api/project/major/data";
import minorProjectsData from "@/app/api/project/minor/data";
import techSkills from "@/app/api/skills/data";

const Projects = async () => {

  return (
    <section className="pt-10 w-[94%] mx-auto">
      <BentoLayout 
        majorData={majorProjectsData}
        minorData={minorProjectsData}
        skillsData={techSkills}
      />
    </section>
  )
}

export default Projects;