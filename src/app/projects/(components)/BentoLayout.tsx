"use client";
import MajorProject from "@/app/projects/(components)/MajorProject";
import FillerSection from '@/app/projects/(components)/FillerSection';
import MinorProject from "@/app/projects/(components)/MinorProject";

import ProjectPageHeader from "@/app/projects/ProjectPageHeader";
import ProjectModal from "@/app/(components)/Modal/ProjectModal";
import ProjectPageFooter from "@/app/projects/ProjectPageFooter";
import { MajorProjectTypes } from "@/app/api/project/major/data";
import { MinorProjectTypes } from '@/app/api/project/minor/data';

import { useAppSelector, useAppDispatch } from "@/app/redux";
import { setOpenProjectModal, setOpenSkillsModal, setSelectedProject } from "@/state";
import SkillsModal from "@/app/(components)/Modal/SkillsModal";

interface BentoLayoutProps{
  majorData: MajorProjectTypes[];
  minorData: MinorProjectTypes[];
}

const BentoLayout = ({majorData,minorData}:BentoLayoutProps) => {
  const dispatch = useAppDispatch();
  
  // Theme State
  const theme = useAppSelector((state)=>state.global.theme);

  // Modal States
  const openProjectModal = useAppSelector((state) => state.global.openProjectModal);
  const openSkillsModal = useAppSelector((state)=> state.global.openSkillsModal);
  
  // Setter Function for States
  const toggleProjectModal = (project:  MajorProjectTypes | MinorProjectTypes | null) => {
    dispatch(setSelectedProject(project));
    dispatch(setOpenProjectModal(!openProjectModal));
  }; 

  const handleSkillsModal = () => {
    dispatch(setOpenSkillsModal(!openSkillsModal));
  }

  return (
<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

    <MajorProject 
      project={majorData[0]} 
      order="order-2" 
      backgroundColor={`${theme ? "bg-gray-400/40" :"bg-gray-300"}`} 
      isLayoutRight={false}  
      toggleModal={()=> toggleProjectModal(majorData[0])}
    />

    <FillerSection order="order-1"><ProjectPageHeader toggleModal={handleSkillsModal}/></FillerSection>

    <MinorProject 
      project={minorData[0]} 
      order="order-3" 
      backgroundColor={`${theme ? "bg-blue-900/50":"bg-sky-700/50"}`} 
      isLayoutLeft={false}
      toggleModal={()=>toggleProjectModal(minorData[0])}  
    />

    <MinorProject
      project={minorData[1]} 
      order="order-4" 
      backgroundColor={`${theme ? "bg-rose-200/50":"bg-pink-500/50"}`} 
      isLayoutLeft={false}
      toggleModal={()=>toggleProjectModal(minorData[1])}
    />

    <MinorProject 
      project={minorData[2]} 
      order="order-8" 
      backgroundColor={`${theme ? "bg-slate-400/50":"bg-stone-500/50"}`} 
      isLayoutLeft
      toggleModal={()=>toggleProjectModal(minorData[2])}
    />

    <MinorProject 
      project={minorData[3]} 
      order="order-7" 
      backgroundColor={`${theme ? "bg-emerald-700/50":"bg-teal-700/50"}`} 
      isLayoutLeft
      toggleModal={()=>toggleProjectModal(minorData[3])}
    />

    <MajorProject 
      project={majorData[1]} 
      order="order-5" 
      backgroundColor={`${theme ? "bg-amber-400/50":"bg-amber-500/50"}`} 
      isLayoutRight 
      toggleModal={()=>toggleProjectModal(majorData[1])}
    />

    <FillerSection order="order-6"><ProjectPageFooter/></FillerSection>

    {/* Modals */}
    <ProjectModal 
      openModal={openProjectModal} 
      handleCloseModal={()=>toggleProjectModal(null)} 
      project={useAppSelector((state)=> state.global.selectedProject)}
      />
    <SkillsModal
      openModal={openSkillsModal}
      handleCloseModal={handleSkillsModal}
    />
</main>
  )
}

export default BentoLayout;
