import { ReactNode } from "react";

interface ButtonProps {
    children:ReactNode;
    variant?:string;
    action:()=> void;
}

const Button = ({children,variant,action}:ButtonProps) => {
    const getBtnStyle = (variant:string) => {
        switch(variant){
            case 'primary':
                return "bg-light-secondary text-primary hover:scale-110 hover:bg-primary hover:text-light-secondary";
            case 'secondary':
                return "bg-primary text-dark-primary hover:scale-110 hover:bg-dark-primary hover:text-primary";
            default:
                return "bg-sky-600 text-slate-100 hover:scale-110 hover:bg-teal-500";
        }
    }
    return (
        <button 
        onClick={action}
        className={`min-w-fit m-2 px-8 py-2 text-2xl font-semibold rounded-2xl 
        duration-500 ease-in-out
        ${getBtnStyle(variant!)}`}>
            {children}
        </button>
  )
}

export default Button;
