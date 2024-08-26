import BentoLayout from "@/app/projects/(components)/BentoLayout";
import { baseUrl } from "@/utils/baseUrl";

const Projects = async () => {
  const [majorProjRes, minorProjRes, techSkillsRes] = await Promise.all([
    fetch(`${baseUrl}/api/project/major`, {next: {revalidate: 0}}),
    fetch(`${baseUrl}/api/project/minor`, {next: {revalidate: 0}}),
    fetch(`${baseUrl}/api/skills`, {next: {revalidate: 0}})
  ]);


  const majorProjData = await majorProjRes.json();
  const minorProjData = await minorProjRes.json();
  const techSkillsData = await techSkillsRes.json();

  return (
    <section className="pt-10 w-[94%] mx-auto">
      <BentoLayout 
        majorData={majorProjData.responseData}
        minorData={minorProjData.responseData}
        skillsData={techSkillsData.responseData}
      />
    </section>
  )
}

export default Projects;