"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Logo from '@/asset/PortfolioLogo.png';

interface SidebarHeaderProps {
    isSidebarCollapsed:boolean;
    toggle:()=> void;
}

const SidebarHeader = ({isSidebarCollapsed,toggle}:SidebarHeaderProps) => {
  return (
    <div className={`flex  gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-2':'px-8'}`}>
      <div className="grid grid-cols-[1fr_2fr] gap-1">
        <div className="relative size-12">
            <Image fill src={Logo} alt="portfolio-logo" />
        </div>
      <h1 className={`${isSidebarCollapsed ? 'hidden':'block'}  tracking-wide font-semibold`}>Bryan&apos;s Portfolio</h1>
      </div>
      <div className="cursor-pointer p-3 duration-500 ease-out
       md:hidden rounded-full  text-secondary bg-primary hover:bg-emerald-200 hover:scale-90" onClick={toggle}>
        <X className="size-5"/>
      </div>
    </div>
  )
}

export default SidebarHeader;