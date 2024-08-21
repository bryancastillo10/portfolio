import SectionHeader from "@/app/(reusables)/SectionHeader";

const ProjectPageHeader = () => {
  return (
    <div className="md:py-4 px-6 rounded-xl shadow-md border border-indigo-500">
      <SectionHeader title="My Tech Projects"/>
      <div className="mt-4 md:mt-6 flex flex-col lg:flex-row items-center gap-y-2 gap-x-4">
        <h3 className="text-xl font-semibold">Categories</h3>
        <ul className="my-4 xl:my-0 flex flex-col md:flex-row justify-center  items-center gap-4 text-wrap">
            <li className="text-lg text-center md:text-left cursor-pointer">All</li>
            <li className="text-lg text-center md:text-left cursor-pointer">Frontend</li>
            <li className="text-lg text-center md:text-left cursor-pointer">Full Stack</li>
            <li className="text-lg text-center md:text-left cursor-pointer">Data Science</li>
            <li className="text-lg text-center md:text-left cursor-pointer">Bioinformatics</li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectPageHeader;
