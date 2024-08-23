"use client";
import { LucideIcon } from "lucide-react";


interface InputProps{
    id:string;
    label:string;
    type?:string;
    disabled:boolean;
    icon:LucideIcon;
    theme:boolean;
    required?:boolean;
}


const Input = ({id,type,label,disabled,required,icon:Icon,theme}:InputProps) => {
  return (
    <div className="relative">
      <input
        id={id} 
        type={type}
        disabled={disabled}
        placeholder=" "
        required={required}
        className={`peer w-full p-2 caret-light-secondary border-2  rounded-xl outline-none transition 
        disabled:opacity-50 disabled:cursor-not-allowed 
        ${theme ? "bg-dark-primary text-primary border-teal-400 ":"bg-white/90 text-teal-700 border-teal-500 "}
        `}
       />
       <label className={`absolute z-10 top-2 left-4 origin-[0] text-lg duration-150 font-semibold
         transform -translate-y-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
         ${theme ? "text-teal-400":"text-teal-700"}
         `}>
         {label}
      </label>
      {Icon &&(<p className="absolute top-2 right-3">
        <Icon size="22" className={`${theme ? "text-primary":"text-teal-600"}`}/>
      </p>)}
    </div>
  )
}

export default Input
