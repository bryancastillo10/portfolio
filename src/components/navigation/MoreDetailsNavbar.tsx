'use client';

import { ArrowLeft, Ellipsis, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import Switch from '@/components/ui/Switch';

import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/redux/hooks';
import useMoreDetailsNavbar from '@/hooks/useMoreDetailsNavbar';

import MobileProjectList from '@/components/navigation/MobileProjectList';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export interface MoreDetailsNavbarProps {
  otherRepos: Record<string, string>[];
  router?: AppRouterInstance;
  isDarkMode?: boolean;
}

const MoreDetailsNavbar = ({ otherRepos }: MoreDetailsNavbarProps) => {
  const router = useRouter();
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const { openProjMenu, toggleProjMenu } = useMoreDetailsNavbar();

  return (
    <nav
      className={`sticky top-0 flex justify-between items-center gap-x-8 px-4 py-6
        ${isDarkMode ? 'bg-accent-dark text-foreground' : 'bg-gray text-accent-light'}
      `}
    >
      <div className="grid grid-cols-2 gap-2 items-center">
        <Button variant="primary" action={() => router.push('/')}>
          <ArrowLeft />
        </Button>
        <div className="mx-2">
          <Switch isHorizontal={false} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-end md:items-center gap-2">
        <h1 className="font-semibold text-base">Other Projects</h1>

        <div
          onClick={toggleProjMenu}
          className={`md:hidden relative cursor-pointer hover:scale-110  px-1 rounded-lg duration-300 ease-out
            ${isDarkMode ? 'hover:bg-gray hover:text-background' : 'hover:bg-accent-light hover:text-accent-dark'}
          `}
        >
          {openProjMenu ? <X /> : <Ellipsis />}
        </div>
        {openProjMenu && (
          <MobileProjectList
            otherRepos={otherRepos}
            router={router}
            isDarkMode={isDarkMode}
          />
        )}

        <ul className="hidden md:flex items-center gap-2">
          {otherRepos &&
            otherRepos.map((repo, index) => {
              const isLast = index === otherRepos.length - 1;
              return (
                <li key={repo.id}>
                  <span
                    onClick={() => router.push(`/projects/${repo.id}`)}
                    className="text-sm hover:underline cursor-pointer"
                  >
                    {repo.name}
                  </span>
                  {!isLast && ' /'}
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

export default MoreDetailsNavbar;
