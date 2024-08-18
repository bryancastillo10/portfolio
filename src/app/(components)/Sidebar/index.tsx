"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapse } from "@/state";
import React from 'react'

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapse = useAppSelector((state) => state.global.isSidebarCollapse);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSidebarCollapse));
  };
  
  return (
    <div className={`fixed flex flex-col transition-all duration-500 
    overflow-hidden h-full shadow-md z-40 bg-dark-primary
    ${isSidebarCollapse ? 'w-0 md:w-16':'w-72 md:w-64'}
    `}>
      Sidebar
    </div>
  )
}

export default Sidebar
