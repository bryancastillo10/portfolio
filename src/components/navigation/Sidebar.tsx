'use client';
import { Plus, Minus } from 'lucide-react';

import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { setIsSidebarExpanded } from '@/lib/redux/slices/sidebarSlice';

import Switch from '@/components/ui/Switch';

const Sidebar = () => {
  const isSidebarExpanded = useAppSelector((state) => state.sidebar.isSidebarExpanded);
  const dispatch = useAppDispatch();

  const toggleSidebar = () => {
      dispatch(setIsSidebarExpanded(!isSidebarExpanded));
  };

  return (
    <aside
      className={`hidden md:block fixed z-50 top-80 h-50 bg-accent-dark md:opacity-80 lg:opacity-100 text-background p-2 rounded-r-2xl shadow-md 
		${isSidebarExpanded ? 'w-30' : 'w-12'} duration-500 ease-out`}
    >
      <div className={`flex flex-col gap-2 ${isSidebarExpanded ? "items-start": "items-center"}`}>
        <div
          onClick={toggleSidebar}
          className="cursor-pointer hover:bg-accent-light rounded-full w-fit p-1"
        >
          {isSidebarExpanded ? <Minus /> : <Plus />}
        </div>

        <Switch/>
      </div>
    </aside>
  );
};

export default Sidebar;
