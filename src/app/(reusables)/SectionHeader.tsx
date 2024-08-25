"use client";
import { useRef, useEffect } from "react";
import { adventPro } from "@/utils/font";
import {motion, useAnimation, useInView} from "framer-motion";

interface SectionHeaderProps{
    title:string;
}

const SectionHeader = ({title}:SectionHeaderProps) => {
  const ref = useRef(null);
  const revealControls = useAnimation();

  const isInView = useInView(ref, {once:true});

  useEffect(()=>{
    if(isInView){
      revealControls.start("loaded");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isInView])
  
  return (
    <motion.h1
    ref={ref} 
    variants={{
      initial:{opacity:0, y:-75},
      loaded:{opacity:1, y:0}
    }}
    initial="initial"
    animate={revealControls}
    transition={{duration:1, delay:0.15}}
    className={`text-center lg:text-left mt-4 text-5xl ${adventPro.className}`}>
        {title}
    </motion.h1>
  )
}

export default SectionHeader;
