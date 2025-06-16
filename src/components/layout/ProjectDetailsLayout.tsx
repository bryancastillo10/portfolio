'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

const ProjectDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <section className={`${isDarkMode ? 'bg-gray' : 'bg-[#f4f3f2]'}`}>
      <div className="max-w-5xl mx-auto flex flex-col bg-background py-8 px-4">
        <Link className="my-4" href="/">
          <ArrowLeft size="20" />
        </Link>
        {children}
      </div>
    </section>
  );
};

export default ProjectDetailsLayout;
