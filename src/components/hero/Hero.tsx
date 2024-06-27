"use client";
import { useThemeContext } from "@/context/useContext";
import { adventPro } from "@/utils/font";
import WaveUp from "../ui/WaveUp";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  const { theme } = useThemeContext();

  return (
    <section>
      <article className="max-w-[80%] mx-auto md:h-auto container">
        <div className="mt-20 lg:mt-40">
          <div
            className={`${
              theme
                ? "bg-primary text-secondary"
                : "bg-secondary/80 text-primary"
            } 
                           ease-in-out duration-500  rounded-xl md:max-w-[80%] lg:max-w-[45%]`}
          >
            <div className="p-2 md:p-4 flex flex-col gap-4 text-center md:text-left">
              <h1 className={`font-bold text-5xl lg:text-7xl leading-tight tracking-wider ${adventPro.className}`}>
                Bryan Castillo
              </h1>
              <div className="min-w-fit md:max-w-full mx-auto py-4">
                <p className="md:font-medium leading-sm md:text-left
               text-xl md:text-2xl
              ">
                Crafting creative and innovative solutions from &nbsp;
                <span className="font-bold">science</span> to &nbsp;
                <span className="font-bold">software development</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div
              className={`max-w-[90%] mx-auto md:mx-0 md:max-w-[320px] lg:max-w-[450px]
                 md:ml-auto rounded-xl   
              p-4 ease-in-out duration-500 text-[20px] md:text-2xl lg:text-4xl
            ${theme ? "bg-secondary text-primary" : "bg-primary text-accent"}
            `}
            >
              <TextAnimation />
            </div>
          </div>
        </div>
      </article>
      <div className="w-full md:min-h-auto">
          <WaveUp/>
      </div>
    </section>
  );
};

export default Hero;
