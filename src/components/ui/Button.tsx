
interface ButtonProps {
    type: "submit" | "reset"| "button";
    variant?: string;
    action: () => void;
    actionLabel: string;
}


const Button = ({type,variant,action,actionLabel}:ButtonProps) => {
  
  return (
      <button
          type={type}
          onClick={action}
          className={`px-8 py-2 rounded-xl text-lg md:text-2xl min-w-fit transition-all duration-500 ease-out
            ${variant === "primary" ? "bg-primary text-accent hover:bg-secondary hover:text-charcoal hover:scale-110" : 
              variant === "outline" ? "bg-secondary text-primary hover:bg-primary hover:text-white hover:scale-110" :
                  "bg-black text-white"
            }
            `}
      >
          {actionLabel}
    </button>
  )
}

export default Button;
