import { useAppSelector } from '@/lib/redux/hooks';
import { LucideIcon } from 'lucide-react';

interface TagProps {
  icon: LucideIcon;
  text: string;
}

const ProjectTag = ({ icon: Icon, text }: TagProps) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  return (
    <div
      className={`flex items-center gap-2 rounded-md shadow-md 
		${isDarkMode ? 'bg-accent-light text-background' : 'bg-foreground text-[#fff8f1]'} w-fit px-3 py-0.5 my-2
	  `}
    >
      <Icon size="18" />
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default ProjectTag;
