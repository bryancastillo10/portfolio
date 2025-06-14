import type { LucideIcon } from 'lucide-react';
import { useAppSelector } from '@/lib/redux/hooks';

interface HeroRowInfoProps {
  icon: LucideIcon;
  text: string;
}

const HeroRowInfo = ({ icon: Icon, text }: HeroRowInfoProps) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className="flex items-center gap-3">
      <Icon
        size="36"
        className={`${isDarkMode ? "bg-accent-light text-background border-accent-dark":"bg-accent-light text-foreground"} border shadow-md rounded-full p-2`}
      />
      <p className="tracking-wide text-base">{text}</p>
    </div>
  );
};

export default HeroRowInfo;
