import { repoMappings } from '@/lib/remark/repoMappings';

import ProjectDetailsLayout from '@/components/layout/ProjectDetailsLayout';
import Providers from '@/components/provider/Providers';
import Link from 'next/link';

interface MoreProjectParams {
  params: { id: string };
}

const MoreProjectDetails = async ({ params }: MoreProjectParams) => {
  const { id } = await params;

  const repoName = repoMappings[id];

  if (!repoName) {
    return (
      <Providers>
        <ProjectDetailsLayout otherRepos={[]}>
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-2xl">🚧 Project Repository Not Found...</h1>
            <Link href="/">Go Back To Home to Reload </Link>
          </div>
        </ProjectDetailsLayout>
      </Providers>
    );
  }

  const otherRepos = Object.entries(repoMappings)
    .filter(([repoId]) => repoId !== id)
    .map(([repoId, name]) => ({
      id: repoId,
      name,
    }));

  return (
    <Providers>
      <ProjectDetailsLayout otherRepos={otherRepos}>
        <h1>In Progress</h1>
      </ProjectDetailsLayout>
    </Providers>
  );
};

export default MoreProjectDetails;
