import Modal from "@/app/(components)/Modal";
import { MajorProjectTypes } from "@/app/api/project/major/data";
import { MinorProjectTypes } from "@/app/api/project/minor/data";


interface ProjectModalProps{
    openModal:boolean;
    handleCloseModal:()=>void;
    project: MajorProjectTypes | MinorProjectTypes | null;
}

const ProjectModal = ({openModal,handleCloseModal,project}:ProjectModalProps) => {
    console.log(project);
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
