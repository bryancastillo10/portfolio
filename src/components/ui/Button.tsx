interface ButtonProps {
  action?: () => void;
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  disabled?: boolean;
  variant?: string;
  children: React.ReactNode;
}

const Button = ({
  action,
  type = 'button',
  loading,
  disabled,
  variant,
  children,
}: ButtonProps) => {
  const getBtnStyle = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'border bg-foreground text-background hover:bg-gray';
      default:
        return 'bg-accent-dark text-slate-100 hover:bg-gray';
    }
  };

  return (
    <button
      onClick={action}
      disabled={disabled}
      type={type}
      className={`w-fit font-semibold px-3 py-1 cursor-pointer rounded-xl duration-500 ease-in-out ${getBtnStyle(variant!)}`}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin size-4 mr-2 border-accent-gray border-t-outline border-t-gray border-2 rounded-full"
            viewBox="0 0 24 24"
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
