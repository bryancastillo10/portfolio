"use client";

import { Moon, Sun } from "lucide-react";

import { useAppSelector } from "@/lib/redux/hooks";
import { useAppDispatch } from "@/lib/redux/hooks";

import { setIsDarkMode } from "@/lib/redux/slices/themeSlice";

const Switch = () => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
 
  const toggleTheme = () => {
		dispatch(setIsDarkMode(!isDarkMode))
  }

  return (
	<div onClick={toggleTheme} className='relative flex flex-col justify-center items-center gap-2 h-14 w-6 bg-teal-500 p-2 rounded-full'>
	  <Moon className="text-white" size={16} />
	  <div className={`absolute size-5 rounded-full cursor-pointer bg-yellow-500 shadow-md transform 
		${isDarkMode ? "translate-y-3": "-translate-y-3"}
		transition-all duration-500 ease-out`}/>
	  <Sun className="text-white" size={16} />
	</div>
  )
}

export default Switch;
