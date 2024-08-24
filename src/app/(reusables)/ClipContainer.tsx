"use client";
import {ReactNode, MouseEvent} from 'react';
import { useAnimate } from "framer-motion";

interface ClipContainerProps{
    children:ReactNode;
    overlayStyle?:string;
}

type Side = 'left' | 'bottom' | 'top' | 'right';

const noneClip = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const bottomRightClip = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const topRightClip = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const bottomLeftClip = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const topLeftClip = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const enteringKeyFrame: Record<Side,string[]> = {
    left: [bottomRightClip, noneClip],
    bottom: [bottomRightClip, noneClip],
    top: [bottomRightClip, noneClip],
    right: [topLeftClip, noneClip],
  };
  
  const leavingKeyFrame: Record<Side,string[]> = {
    left: [noneClip, topRightClip],
    bottom: [noneClip, topRightClip],
    top: [noneClip, topRightClip],
    right: [noneClip, bottomLeftClip],
  };

  
const ClipContainer = ({children, overlayStyle = "bg-teal-500"}:ClipContainerProps) => {
    const [scope,animate] = useAnimate();

    const handleMouseEnter = (e:MouseEvent<HTMLDivElement>) => {
        const side = identifyNearestSide(e) as Side;
        animate(scope.current, {
            clipPath: enteringKeyFrame[side],
        })
    };
  
    const handleMouseLeave = (e:MouseEvent<HTMLDivElement>) => {
        const side = identifyNearestSide(e) as Side;
  
        animate(scope.current, {
            clipPath: leavingKeyFrame[side]
        })
    }
  
    const identifyNearestSide = (e:MouseEvent<HTMLDivElement>) =>{
        const box = (e.target as HTMLDivElement).getBoundingClientRect();
        
        const leftProximity = {
            proximity: Math.abs(box.left - e.clientX),
            side:"left"
        };
  
        const rightProximity ={
            proximity: Math.abs(box.right - e.clientX),
            side:"right"
        };
  
        const topProximity = {
            proximity: Math.abs(box.top - e.clientY),
            side:"top"
        };
  
        const bottomProximity = {
            proximity: Math.abs(box.bottom - e.clientY),
            side:"bottom"
        }
  
        const sortMeasuredSides= [leftProximity, rightProximity, 
            bottomProximity, topProximity].sort((a,b) => a.proximity - b.proximity);
  
        return sortMeasuredSides[0].side;
    }
  
    return (
    <div
    className="relative"
    onMouseEnter={(e) => {
        handleMouseEnter(e);
     }}

     onMouseLeave={(e) => {
         handleMouseLeave(e);
     }}
    >
        {children}

        {/* Overlay */}
        <div
         className={`absolute inset-0 ${overlayStyle}`}
         ref={scope}
         style={{ clipPath: bottomRightClip}}     
        >
        {children}
        </div>
      
    </div>
  )
}

export default ClipContainer;
