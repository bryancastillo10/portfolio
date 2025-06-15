import { useAppSelector } from '@/lib/redux/hooks';
import { LucideIcon } from 'lucide-react';
import ScrollLink from '@/components/ui/ScrollLink';

interface SidebarItemProps {
  name: string;
  id: string;
  icon: LucideIcon;
}

const SidebarItem = ({ name, id, icon: Icon }: SidebarItemProps) => {
  const isSidebarExpanded = useAppSelector(
    state => state.sidebar.isSidebarExpanded,
  );

  return (
    <ScrollLink to={id}>
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
    </ScrollLink>
  );
};

export default SidebarItem;
