"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setTheme } from '@/state';
import {Sun, Moon} from 'lucide-react';


const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state)=> state.global.theme);

    const toggleTheme = () => {
        dispatch(setTheme(!theme));
      }
    return (
    <div 
    onClick={toggleTheme}
    className="relative h-6 w-14 flex justify-center items-center  bg-teal-600 cursor-pointer rounded-full p-2">
      <Moon className="text-primary" size={10}/>
      <div className={`absolute top-[2px] left-0 bg-white dark:bg-primary 
            size-5 rounded-full shadow-md transform transition-all duration-500 ease-out
            ${theme ? 'translate-x-8' : 'translate-x-2'}`}
      />
      <Sun className="ml-auto text-yellow-400" size={10}/>
    </div>
  )
}

export default ThemeToggle;
