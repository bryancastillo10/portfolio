'use client';
import {
  Hero,
  GithubActivity,
  Projects,
  TechStacks,
  Education,
  Work,
  Architectures,
} from '@/components/sections';

import Sidebar from '@/components/navigation/Sidebar';
import { GithubProfileRes } from '@/interfaces/githubprofile';
import { GithubRepoRes } from '@/interfaces/gitrepo';

import MobileSidebar from '@/components/navigation/MobileSidebar';

interface AppLayoutProps {
  profile: GithubProfileRes<string, number>;
  repos: GithubRepoRes<string>[];
}

const AppLayout = ({ profile, repos }: AppLayoutProps) => {
  return (
    <>
      <Sidebar />
      <MobileSidebar />
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <Hero profile={profile} />
        <GithubActivity />
        <Projects repos={repos} />
        <Architectures />
        <TechStacks />
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <Work />
          <Education />
        </section>
      </section>
    </>
  );
};

export default AppLayout;
