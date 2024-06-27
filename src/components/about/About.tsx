"use client";
import AboutContent from "./AboutContent";
import Image from "next/image";
import Button from "../ui/Button";

import gradPic from "../../../public/images/AboutPic.png"
import carbonHexagon from "../../../public/icons/carbon-hexagon.svg";
import cyanHexagon from "../../../public/icons/cyan-hexagon.svg";
import darkBlueHexagon from "../../../public/icons/darkblue-hexagon.svg";
import { adventPro } from "@/utils/font";


const About = () => {
  return (
    <section className="bg-accent pt-10">
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-x-24">
          <article className="flex flex-col my-10 md:my-20">
            <div className="mt-24 md:mt-40">
              <h1 className={`font-bold text-4xl lg:text-5xl tracking-wider
                text-center md:text-left ${adventPro.className}`}>
                  About Bryan
                </h1>
            </div>
            <div className="my-0 lg:my-1">
              <AboutContent
                paragraph="Bryan adapts to the rapidly changing digital world and discovers 
                that producing and maintaining software can solve some real-world problems."
              />
              <AboutContent
                paragraph="He became a self-taught programmer capable of creating valuable 
                software applications due to his resourcefulness and perseverance in his 
                career development."
              />
              <div className="flex flex-col xl:flex-row justify-start items-center gap-8 lg:mt-20">
                <Button
                  type="button"
                  variant="primary"
                  action={() => {}}
                  actionLabel="Read More..."
                />
                <Button
                  type="button"
                  variant="outline"
                  action={() => { }}
                  actionLabel="Check Projects"
                />
              </div>
            </div> 
          </article>
          <article className="flex items-center relative my-20 md:my-0 md:mb-8">

            {/* Cyan Hexagon */}
            <Image className="absolute right-0 top-[-30%] md:top-[-12%] 
            md:right-8 lg:top-20 lg:right-0 z-10 size-[120px] md:size-[150px] animate-spin-slow"
                src={cyanHexagon} alt="cyan-hex"/>
            
            
            {/* About Picture */}
            <div className="relative size-[340px] md:size-[500px]">
              <Image src={gradPic} alt="about-pic" fill />
            </div>

            {/* Carbon Hexagon */}
            <Image className="absolute left-[-20px] bottom-[-30%] md:bottom-[-15%] animate-spin-slow
            lg:bottom-[10%] size-[120px] md:size-[150px]" src={carbonHexagon} alt="carbon-hex" />
            
            {/* Dark Blue Hexagon */}
            <Image className="absolute right-[20%] md:right-[30%] lg:right-[40%] bottom-[-40%] md:bottom-[-30%] animate-spin-slow
            lg:bottom-[-1%] size-[120px] md:size-[150px]" src={darkBlueHexagon} alt="darkblue-hex" />
          </article>
        </div>
      </div> 
    </section>
  );
};

export default About;
