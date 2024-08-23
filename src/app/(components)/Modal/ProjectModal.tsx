import Image from "next/image";
import Modal from "@/app/(components)/Modal";
import { MajorProjectTypes } from "@/app/api/project/major/data";
import { MinorProjectTypes } from "@/app/api/project/minor/data";
import { isMajorProject, splitIntoParagraphs } from "./utils";

interface ProjectModalProps{
    openModal:boolean;
    handleCloseModal:()=>void;
    project: MajorProjectTypes | MinorProjectTypes | null;
}

const ProjectModal = ({openModal,handleCloseModal,project}:ProjectModalProps) => {
    
    const getImagePath = () => {
        if (!project) return "";
        if (isMajorProject(project)) {
          return project.imgPath[0] || "";
        }
        return project.imgPath;
      };

      const paragraphs = project?.skillLearned ? splitIntoParagraphs(project.skillLearned) : [];
    const bodyContent=(
        <div className="grid grid-cols-1 xl:grid-cols-2 justify items-center gap-4">
            <div className="max-w-[90%]">
                {paragraphs.map((para,index)=> (
                    <p className="indent-2 my-2 text-justify" key={index}>{para}</p>
                ))}
            </div>
            <div className="max-w-[90%] mx-auto">
                <Image src={getImagePath()} alt="project-preview" width="450" height="320"/>
            </div>
        </div>
    )

    return (
    <Modal
       title={project?.title!}
       openModal={openModal}
       onClose={handleCloseModal}
       body={bodyContent} 
    />
  )
}

export default ProjectModal;
