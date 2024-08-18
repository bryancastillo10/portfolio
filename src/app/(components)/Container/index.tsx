"use client";
import {useEffect, ReactNode } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "@/app/redux";

interface ContainerProps{
    children: ReactNode;
}

const MainLayout = ({children}:ContainerProps) => {
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSidebarCollapse);
  const theme = useAppSelector((state) => state.global.theme);

  useEffect(()=>{
    if(theme){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.add("light");
    }
  })

  return (
  <div className={`${theme ? "bg-secondary text-primary": "bg-primary text-secondary"}
  flex w-full min-h-screen ease-in-out duration-500`}>
    <Sidebar/>
    <main className={`flex flex-col w-full h-full pb-4 ${isSideBarCollapsed ? 'md:pl-10': 'md:pl-64'}`}>
      <Navbar/>
      {children}
    </main>
  </div>)
}

const Container = ({children}:ContainerProps) => {
  return (
    <StoreProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </StoreProvider>
  )
}

export default Container;
