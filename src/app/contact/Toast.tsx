import { MessageCircleOffIcon, MessageSquareTextIcon } from "lucide-react";
interface ToastProps {
  message: string;
  type: 'success' | 'error';
  theme: boolean;
}

const Toast = ({ message, type, theme }: ToastProps) => {
  const toastColors = type === 'success' 
    ? `${theme ? 'bg-teal-500 text-primary' : 'bg-teal-300 text-teal-700'}`
    : `${theme ? 'bg-rose-500 text-primary' : 'bg-red-300 text-rose-700'}`;

  return (
    <div
      className={`fixed z-20 top-[28%] left-[15%] flex items-center w-full max-w-sm 
      mx-auto p-4 space-x-4 ${toastColors} divide-x divide-gray-200 
      rounded-lg shadow transform transition-transform duration-1000 ease-out
      translate-y-0 opacity-100`}
      role="alert"
    >
      {type === 'success' ? 
        <MessageSquareTextIcon/>: 
        <MessageCircleOffIcon/>
      }
      <p className="ps-4 text-lg font-normal">{message}</p>
    </div>
  );
};

export default Toast;
