
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
          className={`px-8 py-2 rounded-xl text-lg md:text-2xl min-w-fit
            ${variant === "primary" ? "bg-primary text-accent" : 
              variant === "outline" ? "bg-secondary text-primary" :
                  "bg-black text-white"
            }
            `}
      >
          {actionLabel}
    </button>
  )
}

export default Button;
