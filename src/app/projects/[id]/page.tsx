import MoreDetailsNavbar from '@/components/navigation/MoreDetailsNavbar';
import ProjectPageNotFound from '@/components/layout/ProjectPageNotFound';
import Providers from '@/components/provider/Providers';

import { getProjectByRepo } from '@/lib/next-remote-client/projects';
import getRepoInfo from '@/lib/next-remote-client/getRepoInfo';
import dynamic from 'next/dynamic';

interface MoreProjectDetailsParams {
  params: { id: string };
}

const MoreProjectDetails = async ({ params }: MoreProjectDetailsParams) => {
  const { id } = await params;
  const { repoName, otherRepos } = getRepoInfo(id);

  if (!repoName) {
    return (
      <Providers>
        <ProjectPageNotFound />
      </Providers>
    );
  }

  const { compiledCode } = await getProjectByRepo(repoName);
  const MDXRender = dynamic(() => import('@/components/provider/MDXRender'));

  return (
    <Providers>
      <div className="max-w-5xl shadow-md mx-auto flex flex-col bg-background">
        <MoreDetailsNavbar otherRepos={otherRepos} />
        <div className="min-h-screen px-4 py-8">
          <MDXRender code={compiledCode} />
        </div>
      </div>
    </Providers>
  );
};

export default MoreProjectDetails;
