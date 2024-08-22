import BentoLayout from "@/app/projects/(components)/BentoLayout";
import majorProjectsData from '../api/project/major/data';
import minorProjectsData from '../api/project/minor/data';

const Projects = async () => {
  const [majorProjRes, minorProjRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/project/major`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/project/minor`)
  ]);

  const majorProjData = await majorProjRes.json();
  const minorProjData = await minorProjRes.json();

  return (
    <section className="pt-4 w-[96%] mx-auto">
      <BentoLayout 
        majorData={majorProjData.majorProjectsData} 
        minorData={minorProjData.minorProjectsData}
        />
    </section>
  )
}

export default Projects;
