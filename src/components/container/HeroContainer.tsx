"use client";
import { ReactNode } from "react";
import HeroBackground from "../../../public/images/HeroMainBG.png";

interface HeroContainerProps {
  children: ReactNode;
}
const HeroContainer = ({ children }: HeroContainerProps) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), 
    rgba(0, 0, 0, 0.2)), url(${HeroBackground.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="w-full" style={backgroundStyle}>
      {children}
    </div>
  );
};

export default HeroContainer;
