import Image, { StaticImageData } from "next/image";
import { adventPro } from "@/utils/font";
import { FaGithub } from "react-icons/fa";
import { BiPlayCircle } from "react-icons/bi";

interface CardContentProps {
  title: string;
  image: StaticImageData;
  backDescription: string;
  language: string[];
  techStack: string[];
  repository?: string;
}

const CardContent = ({
  title,
  image,
  backDescription,
  language,
  techStack,
  repository,
}: CardContentProps) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="">
        <Image
          src={image}
          alt="project-preview"
          className="rounded-md"
          width={250}
          height={180}
        />
        <h1
          className={`text-xl font-semibold  text-center my-2 ${adventPro.className}`}
        >
          {title}
        </h1>
      </div>
      <div className="max-w-[90%] ml-auto px-4 leading-none">
        <p className="text-[12px] leading-normal text-wrap text-justify">
          {backDescription}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 justify-center items-center">
        <div className="place-content-center">
          <div className="tech-block">
            <h1 className="text-base">Language</h1>
            <ul className="flex gap-1">
              {language.map((lang, i) => {
                return (
                  <li
                    className="bg-primary text-accent rounded-md text-[10px] px-2 py-1"
                    key={i}
                  >
                    {lang}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tech-block">
            <h1 className="text-base">Tech Stack</h1>
            <ul className="flex gap-1">
              {techStack.map((tech, i) => {
                return (
                  <li
                    className="bg-primary text-accent rounded-md text-[10px] px-2 py-1"
                    key={i}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="">
          <div className="tech-block space-x-4">
            <h1 className="text-base">Repository</h1>
            <FaGithub size={24} />
          </div>
          <div className="tech-block space-x-4">
            <h1 className="text-base">Live Demo</h1>
            <BiPlayCircle size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
