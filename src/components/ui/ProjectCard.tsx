'use client';

import {
  Code2,
  Star,
  FolderGit2,
  MonitorPlay,
  Tag,
  Ellipsis,
  Network,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { useAppSelector } from '@/lib/redux/hooks';
import { GithubRepoRes } from '@/interfaces/gitrepo';
import ProjectTag from '@/components/common/ProjectTag';
import Tooltip from './Tooltip';

interface ProjectCardProps {
  repo: GithubRepoRes<string>;
}

const ProjectCard = ({ repo }: ProjectCardProps) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <div
      className={`w-sm md:w-md lg:h-100 rounded-xl shadow-lg 
      ${isDarkMode ? 'bg-gray border-none text-background' : 'border border-gray'}
      grid grid-cols-1 lg:grid-cols-2 p-2`}
    >
      {/* Left Side */}
      <div>
        <Image
          src={repo.imageUrl || 'no-image'}
          alt="proj-1-mockup"
          width={320}
          height={250}
        />
        <div className="px-2">
          <ProjectTag icon={Code2} text={repo.language || 'JavaScript'} />

          {repo.organization && (
            <ProjectTag icon={Network} text={repo.organization} />
          )}
          <ul className="relative grid grid-cols-3 gap-2 my-4">
            {repo.stargazersCount !== 0 && (
              <Tooltip label="⭐ Github Star">
                <li className="flex items-center gap-1">
                  <Star />
                  {repo.stargazersCount}
                </li>
              </Tooltip>
            )}

            {repo.htmlUrl && (
              <Tooltip label="🔗 Git Repo">
                <li className="hover:scale-90 duration-200 ease-in-out">
                  <Link href={repo.htmlUrl}>
                    <FolderGit2 />
                  </Link>
                </li>
              </Tooltip>
            )}

            <Tooltip label="🎥 Demo">
              <Link href={repo.homepage}>
                <li className="hover:scale-90 duration-200 ease-in-out">
                  <MonitorPlay />
                </li>
              </Link>
            </Tooltip>
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative p-2 flex flex-col gap-2">
        <div className="mb-4">
          <h1 className="font-semibold text-xl font-mono uppercase">
            {repo.name}
          </h1>
          <p className="text-sm text-left">{repo.description}</p>
        </div>
        {repo.tagName && <ProjectTag icon={Tag} text={repo.tagName} />}

        <div className="flex flex-wrap gap-2">
          {repo.topics.map(tag => {
            return (
              <p
                key={tag}
                className={`text-xs  w-fit rounded-md shadow-md py-1 px-3
                ${isDarkMode ? 'bg-accent-light text-background' : 'bg-foreground text-[#fff8f1]'} 
              `}
              >
                {tag}
              </p>
            );
          })}
        </div>
        <Tooltip
          label="📝 More Details"
          position="top-8 lg:top-auto lg:-bottom-4 right-0"
        >
          <Link href={`/projects/${repo.id}`}>
            <div className="absolute top-2 lg:top-auto lg:bottom-2 right-8 cursor-pointer hover:bg-accent-light px-1 py-0 rounded-lg hover:scale-110 duration-500 ease-out">
              <Ellipsis size={28} />
            </div>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProjectCard;
