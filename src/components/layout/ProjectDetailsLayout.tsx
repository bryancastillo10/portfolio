'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import MoreDetailsNavbar from '@/components/navigation/MoreDetailsNavbar';

interface ProjectDetailsLayoutProps {
  children: React.ReactNode;
  otherRepos: Record<string, string>[];
}

const ProjectDetailsLayout = ({
  children,
  otherRepos,
}: ProjectDetailsLayoutProps) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <section className={`${isDarkMode ? 'bg-gray' : 'bg-[#f4f3f2]'}`}>
      <div className="max-w-5xl shadow-md mx-auto flex flex-col bg-background">
        <MoreDetailsNavbar otherRepos={otherRepos} />
        <div className="px-4 py-8">{children}</div>
      </div>
    </section>
  );
};

export default ProjectDetailsLayout;
