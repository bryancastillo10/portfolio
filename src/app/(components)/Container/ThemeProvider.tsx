"use client";
import { ReactNode } from "react";
import StoreProvider, { useAppSelector } from "@/app/redux";

interface ContainerProps{
    children: ReactNode;
}

const MainLayout = ({children}:ContainerProps) => {
  return (
  <div className="bg-primary text-secondary dark:bg-secondary dark:text-primary ease-in-out duration-500">
    Sidebar
    <main className="flex flex-col w-full h-full px-9 py-7">
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
