import {
  Code2,
  Star,
  FolderGit2,
  MonitorPlay,
  Tag,
  Ellipsis,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { GithubRepoRes } from '@/interfaces/gitrepo';
import { formatDate } from '@/utils/formatDate';

interface ProjectCardProps {
  repo: GithubRepoRes<string>;
}

const ProjectCard = ({ repo }: ProjectCardProps) => {
  return (
    <div className="relative w-sm md:w-md lg:h-100 border rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 p-2">
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
          <ul className="grid grid-cols-3 gap-2 my-4">
            {repo.stargazersCount !== 0 && (
              <li className="flex items-center gap-1">
                <Star />
                {repo.stargazersCount}
              </li>
            )}
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
        <div className="mb-4">
          <h1 className="font-semibold text-xl font-mono uppercase">
            {repo.name}
          </h1>
          <p className="text-xs text-left">{repo.description}</p>
        </div>
        {repo.tagName && (
          <div className="flex items-center bg-accent-light rounded-lg w-fit h-fit px-4 py-1 gap-2">
            <Tag size="18" />
            <div className="flex gap-2 text-sm">
              <p className="font-semibold place-self-start">{repo.tagName}</p>
            </div>
          </div>
        )}

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
        <Link href="#">
          <div className="absolute top-4 lg:top-auto lg:bottom-4 right-8 cursor-pointer hover:scale-110 duration-500 ease-out">
            <Ellipsis size={28} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
