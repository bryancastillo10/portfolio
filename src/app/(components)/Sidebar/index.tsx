"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapse } from "@/state";

import SidebarHeader from "./SidebarHeader";
import SidebarLink from './SidebarLink';

import { Home, User, FolderCode, Phone } from "lucide-react";


const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector((state) => state.global.isSidebarCollapse);
  const theme = useAppSelector((state) => state.global.theme);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapse));
  };
  
  return (
    <div className={`fixed flex flex-col transition-all duration-500 
    overflow-hidden h-full shadow-md z-40
    ${theme ? 'bg-dark-primary text-primary':'bg-light-secondary text-primary'} 
    ${isSidebarCollapse ? 'w-0 md:w-16':'w-72 md:w-64 opacity-90'}
    `}>
      {/* Sidebar Header */}
      <SidebarHeader isSidebarCollapsed={isSidebarCollapse} toggle={toggleSideBar}/>
      {/* Sidebar Menu */}
      <div className={`flex-grow mt-8 ${isSidebarCollapse ? "px-0":"px-10"}`}>
        <SidebarLink id="home" name="Home" icon={Home} isSidebarCollapsed={isSidebarCollapse} theme={theme} />
        <SidebarLink id="about" name="About" icon={User} isSidebarCollapsed={isSidebarCollapse} theme={theme} />
        <SidebarLink id="projects" name="Projects" icon={FolderCode} isSidebarCollapsed={isSidebarCollapse} theme={theme} />
        <SidebarLink id="contact" name="Contact" icon={Phone} isSidebarCollapsed={isSidebarCollapse} theme={theme} />
      </div>

      {/* Sidebar Footer */}
      <p className={`p-2 text-center text-medium ${isSidebarCollapse ? "block" : "hidden"}`}>&copy;</p>
      <div className={`${isSidebarCollapse ? "hidden" : "block"} mb-10`}>
        <p className="md:ml-6 text-center md:text-left text-xs text-primary">&copy; 2024 Bryan Castillo</p>
      </div>
    </div>
  )
}

export default Sidebar
