'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <section className={`${isDarkMode ? 'bg-gray' : 'bg-[#f4f3f2]'}`}>
      <div className="max-w-5xl mx-auto flex flex-col bg-background py-8 px-4">
        <div className="flex justify-between pb-8">
          <Button variant="primary" action={() => router.push('/')}>
            <ArrowLeft />
          </Button>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ProjectDetailsLayout;
