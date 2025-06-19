'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import MoreDetailsNavbar from '@/components/navigation/MoreDetailsNavbar';

interface ProjectPageProps {
  children: React.ReactNode;
  otherRepos: Record<string, string>[];
}

const ProjectPage = ({ children, otherRepos }: ProjectPageProps) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <div className={`max-w-5xl shadow-md mx-auto flex flex-col`}>
      <MoreDetailsNavbar otherRepos={otherRepos} />
      <div
        className={`min-h-screen px-4 py-8 ${isDarkMode ? 'bg-gray/20' : 'bg-background'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectPage;
