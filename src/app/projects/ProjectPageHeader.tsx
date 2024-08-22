import SectionHeader from "@/app/(reusables)/SectionHeader";

const ProjectPageHeader = () => {
  const textLinkClassName="text-lg text-center md:text-left hover:text-teal-600"
  return (
    <div className="md:py-4 px-6 rounded-xl shadow-md border border-light-secondary">
      <SectionHeader title="My Tech Projects"/>
      <div className="mt-4 md:mt-6 flex flex-col lg:flex-row items-center gap-y-2 gap-x-4">
        <h3 className="text-xl font-semibold">Technical Skills</h3>
        <ul className="my-4 xl:my-0 flex flex-wrap gap-4 items-center text-wrap">
            <li className={`${textLinkClassName} xl:text-xl`}>Frontend Development</li>
            <li className={`${textLinkClassName} xl:text-xl`}>Backend Development</li>
            <li className={`${textLinkClassName} xl:text-xl`}>Project Conceptualization</li>
            <li className={`${textLinkClassName} xl:text-xl`}>Database Design</li>
            <li className={`${textLinkClassName} xl:text-xl`}>Bioinformatics</li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectPageHeader;
