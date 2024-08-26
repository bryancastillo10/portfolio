"use client";
import { useState } from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import Button from "@/app/(reusables)/Button";
import {Mail,Phone,MapPin,Home } from "lucide-react";

const ContactCard = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const toggleShowInfo = () =>{
    setShowInfo(!showInfo);
  }
  
  return (
    <section className="h-[90vh] overflow-y-clip lg:max-h-[70vh] bg-white/90 shadow-md rounded-2xl">
        <div className="relative size-fit w-full h-[50%]">
          <Image src="/skills/frontend.png" className="rounded-2xl" alt="contact-img" fill/>
        </div>
        <div className="flex flex-col xl:flex-row overflow-hidden">
          <div className="w-[50%] hidden xl:block lg:h-[332px]  bg-light-secondary/90 xl:rounded-bl-2xl backdrop-blur-md"/>          
          <article className="m-2 w-full flex flex-col  items-center">
            <div className={`duration-300 ease-in ${showInfo ? "mt-0":"mt-20 xl:mt-32"}`}>
              <Button 
                action={toggleShowInfo} 
                type="button" 
                variant="primary"
                layout
              >
                {showInfo ? "Hide Contact Info":"Show Contact Info"}
              </Button>
            </div>
            <AnimatePresence mode="popLayout">
            {showInfo && <motion.div 
                initial={{ rotate: "0deg", scale:0, y:0}}
                animate={{rotate:"360deg", scale:1, y:[0,150,-150,-150,0]}}
                exit={{rotate:"0deg", scale:0, y:0}}
                transition={{duration:1,ease:"backInOut",times:[0,0.25,0.5,0.75,1]}}
                className="mt-4 w-[90%]  xl:w-full mx-2 grid grid-cols-3 items-center p-3 rounded-xl bg-light-secondary
                  text-white"
                >
                <ContactInfoContent/>
              </motion.div>}
            </AnimatePresence>
          </article>
        </div>
    </section>
  )
}

export default ContactCard;


const ContactInfoContent = () => {
  return(
    <>
    <div className="space-y-4">
      <h1 className="font-semibold">Email</h1>
      <h1 className="font-semibold">Phone Number</h1>
      <h1 className="font-semibold">Current Address</h1>
      <h1 className="font-semibold">Home Address</h1>
    </div>
    <div className="col-span-2 space-y-4">
      <p className="flex items-center gap-2">
        <span><Mail size="20"/></span> 
        bryanium.bc10@gmail.com
      </p>
      <p className="flex items-center gap-2">
        <span><Phone size="20"/></span> (+639) 776252396
      </p>
      <p className="flex items-center gap-2">
        <span><MapPin size="20"/></span> 
        Hsinchu City, Taiwan
      </p>
      <p className="flex items-center gap-2 leading-none">
        <span><Home size="20"/></span>
        San Jose City, Nueva Ecija, Philippines
      </p>
    </div>
</>
  )
}