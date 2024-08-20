interface ProjectInfo{
  id:number;
  projectTitle:string;
  projectSubtitle:string;
  description:string;
  techStack:string[];
  image:string;
  demoLink:string;
  gitRepo:string;
}

export type TopProjectsProps = {
  projectInfo: ProjectInfo[];
}

export type IndicatorProps = {
  projectInfo: ProjectInfo[];
  cardIndex:number;
  setCardIndex:(idx:number) => void;
}

const One_Second = 1000;
const Auto_Delay = One_Second * 10;
const Drag_Buffer = 50;

const Spring_Config = {
  type: "spring",
  mass:3,
  stiffness:400,
  damping:50
};



export { Auto_Delay, Drag_Buffer, Spring_Config};