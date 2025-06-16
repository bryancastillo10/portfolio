'use client';

import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

import { useRouter } from 'next/navigation';

interface MoreDetailsNavbarProps {
  otherRepos: Record<string, string>[];
}

const MoreDetailsNavbar = ({ otherRepos }: MoreDetailsNavbarProps) => {
  const router = useRouter();
  console.log(otherRepos);
  return (
    <nav className="flex justify-between  px-4 py-6">
      <Button variant="primary" action={() => router.push('/')}>
        <ArrowLeft />
      </Button>

      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg">Other Projects</h1>
        <ul className="flex items-center gap-2">
          {otherRepos &&
            otherRepos.map(repo => {
              return <li key={repo.id}>{repo.name}/</li>;
            })}
        </ul>
      </div>
    </nav>
  );
};

export default MoreDetailsNavbar;
