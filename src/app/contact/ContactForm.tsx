"use client";
import { ChangeEvent, useState, useEffect } from 'react';
import Input from '@/app/(reusables)/Input';
import Button from '@/app/(reusables)/Button';
import { User2, MailCheck, Pencil } from 'lucide-react';
import { useAppSelector } from '@/app/redux';
import Toast from '@/app/contact/Toast';

const ContactForm = () => {
  const theme = useAppSelector((state) => state.global.theme);
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // Toast Timer
  useEffect(() => {
    if (isMessageSent || isError) {
      const timer = setTimeout(() => {
        setIsMessageSent(false);
        setIsError(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [isMessageSent, isError]);

  // API Post Request
  async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append('access_key', `${process.env.NEXT_PUBLIC_WEB3FORM_KEY}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setIsMessageSent(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  }

  return (
    <form
      className="relative mt-2 flex flex-col max-w-[80%] mx-auto xl:mx-0 gap-12"
      onSubmit={handleSubmit}
    >
      {/* Toast Message */}
      {isMessageSent && (
        <Toast theme={theme} message="Message sent successfully!" type="success" />
      )}
      {isError && <Toast theme={theme} message="Failed to send message!" type="error" />}
      
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
        <Button type="submit" variant={`${theme ? 'secondary' : 'primary'}`}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
