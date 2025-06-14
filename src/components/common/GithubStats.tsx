import { useAppSelector } from '@/lib/redux/hooks';
import type { LucideIcon } from 'lucide-react';

interface GithubStatsProps {
  icon: LucideIcon;
  value: number;
  text: string;
}

const GithubStats = ({ icon: Icon, text, value }: GithubStatsProps) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <li className={`flex items-center w-[180px] gap-2 
      bg-accent-light
      px-3 py-1 rounded-lg shadow-lg`}>
      <Icon size="32" className={`${isDarkMode ? "text-accent-dark" : "text-gray"}`} />
      <div className={`${isDarkMode ? "text-background":"text-accent-dark"}`}>
        <h1 className="font-semibold text-2xl">{value}</h1>
        <p className="text-sm italic">{text}</p>
      </div>
    </li>
  );
};

export default GithubStats;
