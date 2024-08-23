import Modal from "@/app/(components)/Modal";

interface SkillsModalProps{
    openModal:boolean;
    handleCloseModal:()=>void;
}

const SkillsModal = ({openModal, handleCloseModal}:SkillsModalProps) => {
  
  const bodyContent = (
    <>
        <h1>Test Modal</h1>
    </>
  )
  
    return (
    <Modal
        openModal={openModal}
        onClose={handleCloseModal}
        body={bodyContent}
        title="Technical Skills Name"
        modalLabel="Tech Skills"
    />
  )
}

export default SkillsModal;
