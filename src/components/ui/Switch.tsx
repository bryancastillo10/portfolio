'use client';

import { Moon, Sun } from 'lucide-react';

import { useAppSelector } from '@/lib/redux/hooks';
import { useAppDispatch } from '@/lib/redux/hooks';

import { setIsDarkMode } from '@/lib/redux/slices/themeSlice';

interface SwitchProps {
  isHorizontal: boolean;
}

const Switch = ({ isHorizontal }: SwitchProps) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  const getKnobPosition = () => {
    if (isHorizontal) {
      return isDarkMode ? 'translate-y-3' : '-translate-y-3';
    } else {
      return isDarkMode ? 'translate-x-3' : '-translate-x-3';
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative flex  justify-center items-center gap-2 bg-teal-600 shadow-md p-2 rounded-full
      ${isHorizontal ? 'flex-col h-14 w-6' : 'flex-row h-6 w-14'}
    `}
    >
      <Sun className="text-white" size={16} />
      <div
        className={`absolute size-5 rounded-full cursor-pointer bg-gray-500 shadow-md transform 
        ${getKnobPosition()}
		    transition-all duration-500 ease-out`}
      />
      <Moon className="text-white" size={16} />
    </div>
  );
};

export default Switch;
