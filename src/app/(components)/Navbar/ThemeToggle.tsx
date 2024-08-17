"use client";
import { useEffect, useState } from "react";
import {Sun, Moon} from 'lucide-react';

const ThemeToggle = () => {
    const [theme,setTheme] = useState(false);
    
    useEffect(()=> {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setTheme(true);
    },[])

    useEffect(()=> {
        if(theme){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light");
        }
    },[theme])

    return (
    <div 
    onClick={()=>setTheme(!theme)}
    className="relative h-8 w-4 flex flex-col items-center dark:bg-gray-900 bg-teal-600 cursor-pointer rounded-full p-1">
      <Moon className="text-white" size={10}/>
      <div className={`absolute top-1 bg-white dark:bg-primary 
            size-[10px] rounded-full shadow-md transform transition-all duration-500 ease-out
            ${theme ? 'translate-y-4' : 'translate-y-0'}`}
      />
      <Sun className="mt-auto text-yellow-400" size={8}/>
    </div>
  )
}

export default ThemeToggle;
