'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import SidebarItem from '@/components/navigation/SidebarItem';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setIsSidebarExpanded } from '@/lib/redux/slices/sidebarSlice';
import { sidebarItems } from '@/constants/sidebaritems';

const MobileSidebar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    dispatch(setIsSidebarExpanded(true));
  };

  return (
    <aside className="fixed z-50 top-2 right-2 md:hidden ">
      <div
        onClick={toggleMenu}
        className="bg-background border-2 border-accent-light rounded-full p-2 cursor-pointer hover:bg-gray/20 duration-500 ease-out"
      >
        {isOpenMenu ? <X size={20} /> : <Menu size={20} />}
      </div>
      {isOpenMenu && (
        <div
          className={`absolute top-12 right-0 w-fit rounded-2xl shadow-md p-2 text-background
				${isDarkMode ? 'bg-accent-light' : 'bg-foreground'}
			`}
        >
          <ul className="flex flex-col items-start my-1">
            {sidebarItems.map(side => {
              return (
                <SidebarItem
                  key={side.id}
                  id={side.id}
                  name={side.name}
                  icon={side.icon}
                />
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default MobileSidebar;
