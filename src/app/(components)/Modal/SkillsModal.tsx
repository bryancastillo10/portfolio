import Modal from "@/app/(components)/Modal";
import { TechSkillsTypes } from "@/app/api/skills/data";

interface SkillsModalProps{
    openModal:boolean;
    handleCloseModal:()=>void;
    skills: TechSkillsTypes | null;
}

const SkillsModal = ({openModal, handleCloseModal,skills}:SkillsModalProps) => {
  
  const bodyContent = (
    <>
        <h1>Test Modal</h1>
        <p>{skills?.name!}</p>
    </>
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
