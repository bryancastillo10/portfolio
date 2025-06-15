'use client';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { User, CodeXml, Info, Wrench } from 'lucide-react';

import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { setIsSidebarExpanded } from '@/lib/redux/slices/sidebarSlice';

import Switch from '@/components/ui/Switch';
import SidebarItem from '@/components/navigation/SidebarItem';

const Sidebar = () => {
  const isSidebarExpanded = useAppSelector(
    state => state.sidebar.isSidebarExpanded,
  );
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
    dispatch(setIsSidebarExpanded(!isSidebarExpanded));
  };

  return (
    <aside
      className={`hidden md:block fixed z-50 top-20 h-80 text-background md:opacity-80 lg:opacity-100  p-2 rounded-r-2xl shadow-md 
		${isSidebarExpanded ? 'w-32' : 'w-12'} transition-all duration-500 ease-out
    ${isDarkMode ? 'bg-accent-light' : 'bg-foreground'}
    `}
    >
      <div
        className={`flex flex-col gap-2 ${isSidebarExpanded ? 'items-start' : 'items-center'}`}
      >
        <div
          onClick={toggleSidebar}
          className="cursor-pointer hover:bg-accent-light rounded-full w-fit p-1"
        >
          {isSidebarExpanded ? <ArrowLeft /> : <ArrowRight />}
        </div>
        <ul className="flex flex-col gap-2">
          <SidebarItem name="Home" id="home" icon={User} />
          <SidebarItem name="Projects" id="projects" icon={CodeXml} />
          <SidebarItem name="Tools" id="tools" icon={Wrench} />
          <SidebarItem name="About" id="about" icon={Info} />
        </ul>

        <div className="my-2">
          <Switch />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
