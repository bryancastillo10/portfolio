import { getMarkdownByName } from '@/lib/remark/getMarkdownByName';
import { repoMappings } from '@/lib/remark/repoMappings';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface MoreProjectParams {
  params: { id: string };
}

const MoreProjectDetails = async ({ params }: MoreProjectParams) => {
  const { id } = await params;

  const repoName = repoMappings[id];
  if (!repoName) {
    return (
      <div className="gap-2 bg-accent-light">
        <div
          className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center bg-background 
py-8 px-4 min-h-screen"
        >
          <h1 className="text-2xl">🚧 Project Repository Not Found...</h1>
          <Link href="/">Go Back To Home to Reload </Link>
        </div>
      </div>
    );
  }

  const { contentHtml } = await getMarkdownByName(repoName);
  return (
    <div className="bg-[#f4f3f2]">
      <div className="max-w-5xl mx-auto flex flex-col bg-background py-8 px-4">
        <Link className="my-4" href="/">
          <ArrowLeft size="20" />
        </Link>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
};

export default MoreProjectDetails;
