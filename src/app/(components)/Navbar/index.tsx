// import ThemeToggle from "./ThemeToggle"
import { AlignCenter } from "lucide-react";
import { setIsSidebarCollapse }  from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import ThemeToggle from "./ThemeToggle";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSidebarCollapse);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSideBarCollapsed));
  }

  return (
    <nav className="flex justify-between items-center  bg-light-secondary text-primary px-12 py-4">
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
        Reach me out
        <hr className="w-0 h-7 border border-solid  border-primary mx-3"/>
        <SocialMedia/>
      </div>
    </nav>
  )
}

export default Navbar
