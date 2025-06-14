import { useAppSelector } from '@/lib/redux/hooks';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  name: string;
  icon: LucideIcon;
}

const SidebarItem = ({ name, icon: Icon }: SidebarItemProps) => {
  const isSidebarExpanded = useAppSelector(
    state => state.sidebar.isSidebarExpanded,
  );

  return (
    <li className="flex items-center gap-2  p-2">
      <Icon />
      <p
        className={`transition-all duration-500 ease-out overflow-hidden
  ${isSidebarExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'}
`}
      >
        {name}
      </p>
    </li>
  );
};

export default SidebarItem;
