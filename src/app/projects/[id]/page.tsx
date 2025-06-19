import { ProjectPage, ProjectPageNotFound } from '@/components/layout';
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
      <ProjectPage otherRepos={otherRepos}>
        <MDXRender code={compiledCode} />
      </ProjectPage>
    </Providers>
  );
};

export default MoreProjectDetails;
