import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link  from "next/link";

interface SidebarLinksProps {
    id:string;
    icon:LucideIcon;
    name:string;
    theme:boolean;
    isSidebarCollapsed:boolean;
}

const SidebarLink = ({id,icon:Icon,name,theme, isSidebarCollapsed}:SidebarLinksProps) => {
    const pathname = usePathname();

    const isActive = pathname === id || (pathname === "/" && id === "/home");
    return (
      <Link href={id}> 
        <div className={`cursor-pointer p-4 flex items-center gap-3 rounded-2xl duration-300 ease-in-out
          ${theme ? " hover:bg-light-secondary":"hover:bg-primary hover:text-dark-primary"} 
          ${isActive ? "bg-secondary":""}
          ${isSidebarCollapsed ? "justify-center": "justify-start"}`}>
          <Icon className={`size-6 ${theme ? "text-primary":""}`}/> 
          <span className={`font-semibold text-lg tracking-wide 
            ${isSidebarCollapsed ? "hidden":"block"}
            ${theme ? "text-primary":""}
            `}          
            >{name}</span>
        </div>
      </Link>
  )
}

export default SidebarLink;
