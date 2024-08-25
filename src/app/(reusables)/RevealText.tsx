"use client";
import { ReactNode, useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import { useAppSelector } from "@/app/redux";


interface RevealTextProps{
    children: ReactNode;
    width?: "fit-content" | "100%";
    isLeft:boolean;
    withSlider?:boolean | null;
}

const RevealText = ({children,isLeft, width= "fit-content", withSlider=null}:RevealTextProps) => {
  const ref= useRef(null);
  const theme = useAppSelector((state)=> state.global.theme);

  const isInView = useInView(ref, {once: true});

  const revealControls = useAnimation();
  const slideControls = useAnimation();

    useEffect(()=>{
        if(isInView){
           revealControls.start("loaded");
           slideControls.start("loaded");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isInView])

  return (
    <div ref={ref} className={`relative overflow-hidden ${width}`}>
      <motion.div
        variants={{
            initial:{ opacity:0, y:75},
            loaded: {opacity:1, y:0}
        }}

        initial="initial"
        animate={revealControls}
        transition={{duration:1, delay:0.5}}
      >
        {children}
      </motion.div>
    {withSlider && (<motion.div
        className={`absolute z-20 inset-y-4 inset-x-0 
           ${theme ? "bg-teal-500/80":"bg-light-secondary/80 "}
            ${isLeft ? "rounded-r-lg": "rounded-l-lg"}`}
        variants={{
            initial:isLeft ? { right:0} : {left:0},
            loaded: isLeft ? { right:"100%"}: {left:"100%"}
        }}
        initial="initial"
        animate={slideControls}
        transition={{duration:1, ease:"easeInOut"}}  
      />) }
    </div>
  )
}

export default RevealText;
