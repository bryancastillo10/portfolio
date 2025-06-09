import type { LucideIcon } from 'lucide-react';

interface GithubStatsProps {
  icon: LucideIcon;
  value: number;
  text: string;
}

const GithubStats = ({ icon: Icon, text, value }: GithubStatsProps) => {
  return (
    <li className="flex items-center w-[180px] gap-2 bg-accent-light px-3 py-1 rounded-lg shadow-lg">
      <Icon size="32" className="text-accent-dark" />
      <div className="text-gray">
        <h1 className="font-semibold text-2xl">{value}</h1>
        <p className="text-sm text-accent-dark italic">{text}</p>
      </div>
    </li>
  );
};

export default GithubStats;
