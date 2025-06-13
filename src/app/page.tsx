import Footer from '@/components/navigation/Footer';
import {
  Hero,
  Projects,
  TechStacks,
  Education,
  Work,
} from '@/components/sections';

import { getGithubData } from '@/api/github';
import GithubActivity from '@/components/sections/GithubActivity';
import Sidebar from '@/components/navigation/Sidebar';

export default async function Home() {
  const { profile, repos } = await getGithubData();

  return (
    <>
      <Sidebar />
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <Hero profile={profile} />
        <GithubActivity />
        <Projects repos={repos} />
        <TechStacks />
        <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <Work />
          <Education />
        </section>
      </section>
    </>
  );
}
