import { ProjectPage, ProjectPageNotFound } from '@/components/layout';
import Providers from '@/components/provider/Providers';

import { getProjectByRepo } from '@/lib/next-remote-client/projects';
import getRepoInfo from '@/lib/next-remote-client/getRepoInfo';
import dynamic from 'next/dynamic';

interface PageProps {
  params: Promise<{ id: string }>;
}

const MoreProjectDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  const { repoName, otherRepos } = getRepoInfo(id);

  if (!repoName) {
    return (
      <Providers>
        <ProjectPageNotFound />
      </Providers>
    );
  }

  const { frontmatter, compiledCode } = await getProjectByRepo(repoName);
  const taghighlights: string[] = frontmatter.highlights;

  const MDXRender = dynamic(() => import('@/components/provider/MDXRender'));

  return (
    <Providers>
      <ProjectPage otherRepos={otherRepos}>
        <div className="text-center lg:text-left mb-2">
          <h1 className="font-semibold tracking-wide text-2xl">
            {frontmatter.title}
          </h1>
          <p className="text-balance">{frontmatter.description}</p>
          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 py-0.5 my-4">
            {taghighlights.map((tag, idx) => {
              return (
                <li
                  className="bg-foreground text-background w-fit text-sm rounded-md px-2 py-1"
                  key={idx}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="prose prose-lg mx-auto">
          <MDXRender code={compiledCode} />
        </div>
      </ProjectPage>
    </Providers>
  );
};

export default MoreProjectDetails;
