'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <aside
      className={`hidden md:block fixed z-50 top-80 h-50 bg-accent-dark md:opacity-80 lg:opacity-100 text-background p-2 rounded-r-2xl shadow-md 
		${isSidebarExpanded ? 'w-30' : 'w-12'} duration-500 ease-out`}
    >
      <div className="flex flex-col">
        <div
          onClick={toggleSidebar}
          className="cursor-pointer hover:bg-accent-light rounded-full w-fit p-1"
        >
          {isSidebarExpanded ? <Minus /> : <Plus />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
