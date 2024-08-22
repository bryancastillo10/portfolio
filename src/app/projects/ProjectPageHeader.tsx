import SectionHeader from "@/app/(reusables)/SectionHeader";

const ProjectPageHeader = () => {
  const textLinkClassName="text-lg text-center md:text-left cursor-pointer hover:underline hover:text-teal-600"
  return (
    <div className="md:py-4 px-6 rounded-xl shadow-md border border-light-secondary">
      <SectionHeader title="My Tech Projects"/>
      <div className="mt-4 md:mt-6 flex flex-col lg:flex-row items-center gap-y-2 gap-x-4">
        <h3 className="text-xl font-semibold">Categories</h3>
        <ul className="my-4 xl:my-0 flex flex-wrap gap-4 items-center text-wrap">
            <li className={`${textLinkClassName}`}>All</li>
            <li className={`${textLinkClassName}`}>Frontend Web Design</li>
            <li className={`${textLinkClassName}`}>Full Stack</li>
            <li className={`${textLinkClassName}`}>Data Science</li>
            <li className={`${textLinkClassName}`}>Bioinformatics</li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectPageHeader;
