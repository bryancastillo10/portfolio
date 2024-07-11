"use client";
import { StaticImageData } from "next/image";
import { useThemeContext } from "@/context/useContext";
import CardCover from "./CardCover";
import CardContent from "./CardContent";

interface ProjectCardProps {
  theme?: boolean;
  title: string;
  subtitle: string;
  frontDescription: string;
  backDescription: string;
  image: StaticImageData;
  language: string[];
  techStack: string[];
  repository?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  frontDescription,
  backDescription,
  image,
  language,
  techStack,
  repository,
}: ProjectCardProps) => {
  if (repository == undefined) return "Private Repo";

  const { theme } = useThemeContext();

  return (
    <div className="card">
      <CardContent
        title={title}
        image={image}
        backDescription={backDescription}
        language={language}
        techStack={techStack}
        repository={repository}
      />
      <div
        className={`cover duration-500 ease-in-out ${
          theme ? "bg-accent text-primary" : "bg-primary "
        }`}
      >
        <CardCover
          theme={theme}
          title={title}
          subtitle={subtitle}
          frontDescription={frontDescription}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
