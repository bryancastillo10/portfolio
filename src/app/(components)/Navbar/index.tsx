// import ThemeToggle from "./ThemeToggle"
import { AlignCenter } from "lucide-react";
import { setIsSidebarCollapse }  from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import ThemeToggle from "./ThemeToggle";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSidebarCollapse);
  const theme = useAppSelector((state) => state.global.theme);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSideBarCollapsed));
  }

  return (
    <nav className={`flex justify-between items-center px-12 py-4 sticky top-0 z-10 
    ${theme ? 'bg-dark-primary/80 text-primary':'bg-light-secondary/80 text-primary'}
    `}>
      <div className="flex justify-between items-center gap-5">
          <div
          className="p-3.5 cursor-pointer bg-primary text-secondary rounded-full hover:bg-emerald-200"
          onClick={toggleSideBar}
          >            
           <AlignCenter className="size-5" /> 
          </div>
          <ThemeToggle/>
      </div>
      <div className="flex justify-between items-center">
        <span className="hidden md:block">Reach me out</span>
        <hr className="hidden md:block w-0 h-7 border border-solid  border-primary mx-3"/>
        <SocialMedia/>
      </div>
    </nav>
  )
}

export default Navbar
