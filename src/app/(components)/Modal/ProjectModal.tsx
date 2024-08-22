import Modal from "@/app/(components)/Modal";
import { setOpenProjectModal } from "@/state";
import { useAppSelector, useAppDispatch } from "@/app/redux";

interface ProjectModalProps{
    openModal:boolean;
    handleCloseModal:()=>void;
}

const ProjectModal = ({openModal,handleCloseModal}:ProjectModalProps) => {
    const bodyContent=(
        <>
        <h1>Project Here</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, excepturi!</p>
        </>
    )

    return (
    <Modal
       title="Project Title"
       openModal={openModal}
       onClose={handleCloseModal}
       body={bodyContent} 
    />
  )
}

export default ProjectModal;
