"use client";
import MajorProject from "@/app/projects/(components)/MajorProject";
import FillerSection from '@/app/projects/(components)/FillerSection';
import MinorProject from "@/app/projects/(components)/MinorProject";

import ProjectPageHeader from "@/app/projects/ProjectPageHeader";
import ProjectModal from "@/app/(components)/Modal/ProjectModal";
import ProjectPageFooter from "../ProjectPageFooter";
import { MajorProjectTypes } from "@/app/api/project/major/data";
import { MinorProjectTypes } from '@/app/api/project/minor/data';

import { useAppSelector, useAppDispatch } from "@/app/redux";
import { setOpenProjectModal } from "@/state";
interface BentoLayoutProps{
  majorData: MajorProjectTypes[];
  minorData: MinorProjectTypes[];
}

const BentoLayout = ({majorData,minorData}:BentoLayoutProps) => {
  const theme = useAppSelector((state)=>state.global.theme);
  const dispatch = useAppDispatch();
 const openProjectModal = useAppSelector((state) => state.global.openProjectModal);
  
  const toggleProjectModal = () => {
    dispatch(setOpenProjectModal(!openProjectModal));
  }; 

  return (
<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

    <MajorProject 
      project={majorData[0]} 
      order="order-2" 
      backgroundColor={`${theme ? "bg-gray-400/40" :"bg-gray-300"}`} 
      isLayoutRight={false}  
      toggleModal={toggleProjectModal}
    />

    <FillerSection order="order-1"><ProjectPageHeader/></FillerSection>

    <MinorProject 
      project={minorData[0]} 
      order="order-3" 
      backgroundColor={`${theme ? "bg-blue-900/50":"bg-sky-700/50"}`} 
      isLayoutLeft={false}
      toggleModal={toggleProjectModal}  
    />

    <MinorProject
      project={minorData[1]} 
      order="order-4" 
      backgroundColor={`${theme ? "bg-rose-200/50":"bg-pink-500/50"}`} 
      isLayoutLeft={false}
      toggleModal={toggleProjectModal}
    />

    <MinorProject 
      project={minorData[2]} 
      order="order-8" 
      backgroundColor={`${theme ? "bg-slate-400/50":"bg-stone-500/50"}`} 
      isLayoutLeft
      toggleModal={toggleProjectModal}
    />

    <MinorProject 
      project={minorData[3]} 
      order="order-7" 
      backgroundColor={`${theme ? "bg-emerald-700/50":"bg-teal-700/50"}`} 
      isLayoutLeft
      toggleModal={toggleProjectModal}
    />

    <MajorProject 
      project={majorData[1]} 
      order="order-5" 
      backgroundColor={`${theme ? "bg-amber-400/50":"bg-amber-500/50"}`} 
      isLayoutRight 
      toggleModal={toggleProjectModal}
    />

    <FillerSection order="order-6"><ProjectPageFooter/></FillerSection>

    <ProjectModal openModal={openProjectModal} handleCloseModal={toggleProjectModal} />
</main>
  )
}

export default BentoLayout;
