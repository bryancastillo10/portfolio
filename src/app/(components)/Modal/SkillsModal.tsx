import Modal from "@/app/(components)/Modal";
import { TechSkillsTypes } from "@/app/api/skills/data";
import Image from "next/image";
import { splitIntoParagraphs } from "./utils";
interface SkillsModalProps{
    openModal:boolean;
    handleCloseModal:()=>void;
    skills: TechSkillsTypes | null;
}

const SkillsModal = ({openModal, handleCloseModal,skills}:SkillsModalProps) => {
  
  const paragraphs = skills?.description ? splitIntoParagraphs(skills.description) : [];
  const bodyContent = (
    <section className="grid grid-cols-1 xl:grid-cols-2 justify items-center gap-4">
      <div className="max-w-[90%] mx-auto">
        {skills ? 
          <Image src={skills.imgPath} 
                 alt="project-preview" 
                 width="450" 
                 height="320"
                 className="rounded-2xl shadow-sm"
                 /> : null}
      </div>
      <div className="max-w-[90%]">
        {paragraphs.map((para,index)=> (
          <p className="text-lg indent-2 my-2 text-justify" key={index}>{para}</p>
        ))}
      </div>
    </section>
  )
  
    return (
    <Modal
        openModal={openModal}
        onClose={handleCloseModal}
        body={bodyContent}
        title={skills?.name!}
        modalLabel="Tech Skills"
    />
  )
}

export default SkillsModal;
