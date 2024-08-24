import { ReactNode } from "react";

interface ButtonProps {
    children:ReactNode;
    variant?:string;
    action?:()=> void;
    type: "submit"|"reset"|"button"|undefined;
}

const Button = ({children,variant,action,type}:ButtonProps) => {
    const getBtnStyle = (variant:string) => {
        switch(variant){
            case 'primary':
                return "bg-light-secondary text-white hover:bg-dark-primary";
            case 'secondary':
                return "border-[2px] text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500/80"
            case 'hero-primary':
                return "bg-light-secondary text-primary hover:bg-primary hover:text-light-secondary";
            case 'hero-secondary':
                return "bg-primary text-dark-primary hover:bg-dark-primary hover:text-primary";
            default:
                return "bg-sky-600 text-slate-100  hover:bg-teal-500";
        }
    }
    return (
        <button 
        onClick={action}
        type={type}
        className={`min-w-fit m-2 px-8 py-2 text-2xl font-semibold rounded-2xl hover:scale-110
        duration-500 ease-in-out
        ${getBtnStyle(variant!)}`}>
            {children}
        </button>
  )
}

export default Button;
