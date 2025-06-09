import { Code2, Star, FolderGit2, MonitorPlay, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = () => {
  const sampleTags = [
    'web-application',
    'mern',
    'fullstack-development',
    'prisma',
    'redux-toolkit',
    'dashboard-analysis',
    'clean-architecture',
  ];

  return (
    <div className="w-sm md:w-md xl:w-lg min-h-80 border rounded-xl shadow-lg grid grid-cols-2 p-2">
      {/* Left Side */}
      <div>
        <Image
          src="/projects/WaterAnalytics.png"
          alt="proj-1-mockup"
          width={320}
          height={250}
        />
        <div className="px-2">
          <div className="flex items-center gap-2 rounded-md shadow-md bg-accent-light text-gray w-fit px-3 py-0.5 my-2">
            <Code2 size="18" />
            <p className="text-sm">Typescript</p>
          </div>
          <ul className="grid grid-cols-3 gap-2 my-3">
            <li className="flex flex-col items-center">
              <Star /> 3
            </li>
            <Link href="#">
              <li className="hover:scale-90 duration-200 ease-in-out">
                <FolderGit2 />
              </li>
            </Link>
            <Link href="#">
              <li className="hover:scale-90 duration-200 ease-in-out">
                <MonitorPlay />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="p-2 flex flex-col gap-2">
        <h1 className="font-semibold text-xl font-mono uppercase">
          Water-Analytics
        </h1>
        <p className="text-xs text-left">
          A Dashboard Analytics Web App for Water Quality Monitoring Built with
          MERN-Typescript
        </p>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <Calendar />
            <p className="text-xs">Start</p>
          </div>
          <p className="text-sm place-self-start">2024-11-04</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {sampleTags.map((tag, idx) => {
            return (
              <p
                key={idx}
                className="text-xs bg-accent-light text-gray w-fit rounded-md shadow-md py-1 px-3"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
