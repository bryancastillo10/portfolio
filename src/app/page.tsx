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

export default async function Home() {
  const { profile, repos } = await getGithubData();

  return (
    <main className="w-full h-screen text-accent-dark">
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
      <Footer />
    </main>
  );
}
