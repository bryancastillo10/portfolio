// import ThemeToggle from "./ThemeToggle"
import { AlignCenter } from "lucide-react";
import { setIsSidebarCollapse }  from "@/state";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector((state) => state.global.isSidebarCollapse);

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapse(!isSideBarCollapsed));
  }



  return (
    <nav className="flex justify-between items-center p-4 bg-light-secondary text-primary">
      <div className="flex justify-between items-center gap-5">
          <div
          className="p-3.5 cursor-pointer bg-primary text-secondary rounded-full hover:bg-emerald-200"
          onClick={toggleSideBar}
          >            
           <AlignCenter className="size-5" /> 
          </div>
          <ThemeToggle/>
      </div>
      <div className="">
        Social Media
      </div>
    </nav>
  )
}

export default Navbar
