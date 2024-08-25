import { ReactNode } from "react";
import {motion} from "framer-motion"

interface ButtonProps {
    children:ReactNode;
    variant?:string;
    action?:()=> void;
    type: "submit"|"reset"|"button"|undefined;
    loading?:boolean;
    width?:string;
    layout?:boolean;
}

const Button = ({children,variant,action,loading,type,layout,width = "fit"}:ButtonProps) => {
    const getBtnStyle = (variant:string) => {
        switch(variant){
            case 'primary':
                return "px-8 py-2 bg-light-secondary text-white hover:bg-dark-primary";
            case 'secondary':
                return "px-8 py-2 border-[2px] text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500/80"
            case 'hero-primary':
                return "px-8 py-2 bg-light-secondary text-primary hover:bg-primary hover:text-light-secondary";
            case 'hero-secondary':
                return "px-8 py-2 bg-primary text-dark-primary hover:bg-dark-primary hover:text-primary";
            default:
                return "px-4 py-2 bg-sky-600 text-slate-100  hover:bg-teal-500 p-0";
        }
    }
    return (
        <motion.button
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}} 
        transition={{ duration:0.15, ease:"backInOut"}}
        onClick={action}
        type={type}
        layout={layout}
        className={`${width} min-w-fit m-2  text-2xl font-semibold rounded-2xl
        duration-500 ease-in-out
        ${getBtnStyle(variant!)}`}>
                {loading ? (
                <div className="flex justify-center items-center gap-0.5">
                    <svg
                        className="animate-spin size-4 mr-2 border-white border-t-secondary border-2 rounded-full"
                        viewBox="0 0 24 24"
                         />
                    <span className="font-semibold text-base">Loading . . .</span>
                </div>       

                ) : children}
        </motion.button>
  )
}

export default Button;
