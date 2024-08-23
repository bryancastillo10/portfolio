import BentoLayout from "@/app/projects/(components)/BentoLayout";

const Projects = async () => {
  const [majorProjRes, minorProjRes, techSkillsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/project/major`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/project/minor`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/skills`),
    {cache: 'no-store'}
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
