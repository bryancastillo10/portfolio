import TextHeader from '@/components/common/TextHeader';
import ProjectCard from '@/components/ui/ProjectCard';

import { GithubRepoRes } from '@/interfaces/gitrepo';
import { collabProjRepo } from '@/constants/collabRepo';

const Projects = ({ repos }: { repos: GithubRepoRes<string>[] }) => {
  return (
    <section id="projects" className="w-full mt-8 lg:px-4 xl:px-0">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="Personal Projects" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start  gap-2 xl:gap-4 py-3">
        {repos.map(repo => {
          return <ProjectCard key={repo.id} repo={repo} />;
        })}
      </div>

      <div className="flex justify-center lg:justify-start mt-4">
        <TextHeader title="Collab Projects" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start  gap-2 xl:gap-4 py-3">
        {collabProjRepo.map(repo => {
          return <ProjectCard key={repo.id} repo={repo} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
