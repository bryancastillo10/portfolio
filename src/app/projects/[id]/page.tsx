import Link from 'next/link';

import { repoMappings } from '@/constants/repoMappings';
import MoreDetailsNavbar from '@/components/navigation/MoreDetailsNavbar';
import Providers from '@/components/provider/Providers';

import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

interface MoreProjectDetailsParams {
  params: { id: string };
}

async function getDocFromParams(id: string) {
  const doc = allDocs.find(doc => doc.slugAsParams === id);

  if (!doc) {
    notFound();
  }
  return doc;
}

const MoreProjectDetails = async ({ params }: MoreProjectDetailsParams) => {
  const { id } = await params;
  const repoName = repoMappings[id];

  const doc = await getDocFromParams(repoName);

  if (!repoName) {
    return (
      <Providers>
        <div className="max-w-5xl shadow-md mx-auto flex flex-col bg-background">
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-2xl">🚧 Project Repository Not Found...</h1>
            <Link className="hover:underline" href="/">
              Go Back To Home to Reload
            </Link>
          </div>
        </div>
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
      <div className="max-w-5xl shadow-md mx-auto flex flex-col bg-background">
        <MoreDetailsNavbar otherRepos={otherRepos} />
        <div className="min-h-screen px-4 py-8">
          <p>{JSON.stringify(doc)}</p>
        </div>
      </div>
    </Providers>
  );
};

export default MoreProjectDetails;
