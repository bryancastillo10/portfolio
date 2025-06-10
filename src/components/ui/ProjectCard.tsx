import { Code2, Star, FolderGit2, MonitorPlay, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { GithubRepoRes } from '@/interfaces/gitrepo';
import { formatDate } from '@/utils/formatDate';

interface ProjectCardProps {
  repo: GithubRepoRes<string>;
}

const ProjectCard = ({ repo }: ProjectCardProps) => {
  return (
    <div className="w-sm md:w-md xl:w-lg max-h-80 border rounded-xl shadow-lg grid grid-cols-2 p-2">
      {/* Left Side */}
      <div>
        <Image
          src={repo.imageUrl || 'no-image'}
          alt="proj-1-mockup"
          width={320}
          height={250}
        />
        <div className="px-2">
          <div className="flex items-center gap-2 rounded-md shadow-md bg-accent-light text-gray w-fit px-3 py-0.5 my-2">
            <Code2 size="18" />
            <p className="text-sm">{repo.language || 'Javascript'}</p>
          </div>
          <ul className="grid grid-cols-3 gap-2 my-3">
            <li className="flex flex-col items-center">
              <Star /> {repo.stargazersCount === 0 ? '' : repo.stargazersCount}
            </li>
            {repo.htmlUrl && (
              <Link href={repo.htmlUrl}>
                <li className="hover:scale-90 duration-200 ease-in-out">
                  <FolderGit2 />
                </li>
              </Link>
            )}
            <Link href={repo.homepage}>
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
          {repo.name}
        </h1>
        <p className="text-xs text-left">{repo.description}</p>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <Calendar />
            <p className="text-xs">Start</p>
          </div>
          <p className="text-sm place-self-start">
            {formatDate(repo.createdAt)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {repo.topics.map((tag, idx) => {
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
