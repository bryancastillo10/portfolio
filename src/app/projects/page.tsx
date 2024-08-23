import BentoLayout from "@/app/projects/(components)/BentoLayout";

const Projects = async () => {
  const [majorProjRes, minorProjRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/project/major`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/project/minor`),
    {cache: 'no-store'}
  ]);

  const majorProjData = await majorProjRes.json();
  const minorProjData = await minorProjRes.json();

  return (
    <section className="pt-10 w-[94%] mx-auto">
      <BentoLayout 
        majorData={majorProjData.responseData} 
        minorData={minorProjData.responseData}
        />
    </section>
  )
}

export default Projects;
