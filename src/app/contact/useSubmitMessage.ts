import { ChangeEvent, useState } from "react";


const useSubmitMessage = () => {
    const [loading,setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<string|null>(null);

    const handleSubmit = async  (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        formData.append('access_key', `${process.env.NEXT_PUBLIC_WEB3FORM_KEY}`);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
          setLoading(true)
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
            setStatus("Message Sent");
          } else {
            setError(error);
          }
        } catch (error: unknown) {
            if(error instanceof Error){
                setStatus("Failed to send the message");
            }else{
                setError("An unknown error occured");
            }
        }
        finally{
            setLoading(false);
        }
      };

      return { loading, error , status, handleSubmit }
    
}

export default useSubmitMessage;
