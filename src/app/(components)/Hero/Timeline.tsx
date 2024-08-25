import { LucideIcon } from "lucide-react";
import { projectsProps } from "./projectInfo";

interface TimelineBlockProps {
  alignment: "left" | "right";
  index: number;
  projectTitle: string;
  projectSubtitle: string;
  demoLink: string;
  icon:LucideIcon;
}

interface TimelineProps {
  projects: projectsProps[];
}

interface CirclePointProps{
    position:"left"|"right";
}

const Timeline = ({ projects }: TimelineProps) => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 grid-rows-6 gap-4 w-full">
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-400" />
      {projects.map((project, index) => (
        <TimelineBlock
          key={project.id}
          alignment={index % 2 === 0 ? "left" : "right"}
          index={index}
          projectTitle={project.projectTitle}
          projectSubtitle={project.projectSubtitle}
          demoLink={project.demoLink}
          icon={project.icon}
        />
      ))}
    </section>
  );
};

export default Timeline;


const TimelineBlock = ({
  alignment,
  index,
  projectTitle,
  projectSubtitle,
  demoLink,
  icon:Icon,
}: TimelineBlockProps) => {
  const rowStart = index + 1;

  return (
    <div
      className={`relative bg-teal-500 h-[200px] w-full
          ${alignment === "left" ? `row-start-${rowStart} lg:col-start-1` : `row-start-${rowStart} lg:col-start-2`}
          `}
    >
      <div className="p-4 bg-gray-500">
        <h3 className="text-white font-bold">{projectTitle}</h3>
        <p className="text-white">{projectSubtitle}</p>
        <a
          href={demoLink}
          className="text-blue-300 underline"
          target="_blank"
        >
          View Demo
        </a>
        <p><Icon size="24"/></p>
      </div>
      <CirclePoint position={alignment} />
    </div>
  );
};

const CirclePoint = ({ position}: CirclePointProps) => {
    const pointClasses =
      position === "left"
        ? "left-full -translate-x-1/2"
        : "right-full translate-x-1/2";
  
    return (
      <div
        className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 ${pointClasses} size-8 bg-white  rounded-full`}>
            Icon 
      </div>
    );
  };
  
