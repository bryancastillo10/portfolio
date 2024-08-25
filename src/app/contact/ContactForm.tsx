"use client";
import Input from '@/app/(reusables)/Input';
import Button from '@/app/(reusables)/Button';
import { User2, MailCheck, Pencil } from 'lucide-react';
import { useAppSelector } from '@/app/redux';
import useSubmitMessage from './useSubmitMessage';

const ContactForm = () => {
  const theme = useAppSelector((state) => state.global.theme);
  const { loading, error , status, handleSubmit } = useSubmitMessage();
  // Toast Timer
  // useEffect(() => {
  //   if (isMessageSent || isError) {
  //     const timer = setTimeout(() => {
  //       setIsMessageSent(false);
  //       setIsError(false);
  //     }, 3000); 

  //     return () => clearTimeout(timer);
  //   }
  // }, [isMessageSent, isError]);


  return (
    <form
      className="relative mt-2 flex flex-col max-w-[80%] mx-auto xl:mx-0 gap-12"
      onSubmit={handleSubmit}
    >
      {/* Toast Message */}

      {/* Name */}
      <Input
        theme={theme}
        label="Your Name"
        name="name"
        disabled={false}
        type="text"
        icon={User2}
        required
      />

      {/* Email */}
      <Input
        theme={theme}
        label="Enter your email"
        name="email"
        disabled={false}
        type="email"
        icon={MailCheck}
        required
      />

      {/* TextArea */}
      <div className="relative mt-4">
        <textarea
          name="message"
          className={`indent-2 text-lg resize-none h-[250px] peer w-full p-2 caret-light-secondary 
            border-2 rounded-xl outline-none transition 
            disabled:opacity-50 disabled:cursor-not-allowed 
            ${
              theme
                ? 'bg-dark-primary text-primary border-teal-400 '
                : 'bg-white/90 text-teal-700 border-teal-500 '
            }`}
          placeholder=" "
          required
        />
        <label
          className={`absolute z-10 top-3 left-4 origin-[0] text-lg duration-150 
            transform -translate-y-10 peer-placeholder-shown:scale-100 font-semibold
            peer-placeholder-shown:translate-y-0
            ${theme ? 'text-teal-400' : 'text-teal-700'}
            `}
        >
          Your Message
        </label>
        <div className="absolute right-2 bottom-3">
          <Pencil size="22" className={`${theme ? 'text-primary' : 'text-teal-600'}`} />
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="mt-4 self-center xl:self-start">
        <Button 
          type="submit" 
          variant={`${theme ? 'secondary' : 'primary'}`}
          loading={loading}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
