import SectionHeader from "@/app/(reusables)/SectionHeader";
import { TechSkillsTypes } from "@/app/api/skills/data";
import { useAppSelector } from "@/app/redux";
import RevealText from "@/app/(reusables)/RevealText";

interface ProjectPageHeaderProps {
  skillsData: TechSkillsTypes[];
  handleSkillsModal: (skill: TechSkillsTypes | null) => void;
}

const ProjectPageHeader = ({handleSkillsModal, skillsData}:ProjectPageHeaderProps) => {
  const theme = useAppSelector((state)=>state.global.theme);

  const textLinkClassName=`text-lg text-center md:text-left ${theme ?"hover:text-amber-400" :"hover:text-teal-700"} hover:underline cursor-pointer`;
  return (
    <div className="md:py-4 px-6 rounded-xl shadow-md border border-light-secondary">
    <SectionHeader title="My Tech Projects" />
    <RevealText isLeft>
      <div className="mt-4 md:mt-6 flex flex-col lg:flex-row items-center gap-y-2 gap-x-4">
            <h3 className="text-xl md:text-center font-semibold">
              Technical Skills
            </h3>
          <ul className="my-4 xl:my-0 flex flex-wrap gap-4 justify-center items-center text-wrap">
            {skillsData.map((skill) => (
              <li
                key={skill.id}
                onClick={() => handleSkillsModal(skill)}
                className={`${textLinkClassName} xl:text-xl`}
              >
                {skill.name}
              </li>
            ))}
          </ul>
      </div>
      </RevealText>
  </div>
  )
}

export default ProjectPageHeader;
