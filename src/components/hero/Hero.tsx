"use client";
import { useThemeContext } from "@/context/useContext";
import HeroBorder from "./HeroBorder";
import TextAnimation from "./TextAnimation";

const Hero = () => {
  const { theme } = useThemeContext();

  return (
    <section>
      <article className="md:max-w-[80%] mx-auto md:h-auto container">
        <div className="mt-20">
          <div
            className={`${
              theme
                ? "bg-primary text-secondary"
                : "bg-secondary/80 text-primary"
            } 
                           ease-in-out duration-500  rounded-xl md:max-w-[45%]`}
          >
            <div className=" p-4 flex flex-col gap-4 text-center md:text-left">
              <h1 className="font-bold text-2xl lg:text-5xl tracking-wider">
                Bryan Castillo
              </h1>
              <p className="md:font-light leading-none md:leading-sm text-[20px] max-w-[75%] md:max-w-full mx-auto">
                Crafting creative and innovative solutions from &nbsp;
                <span className="font-bold">science</span> to &nbsp;
                <span className="font-bold">software development</span>
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div
              className={`max-w-[60%] mx-auto md:mx-0 md:max-w-[290px] md:ml-auto rounded-xl   
              p-4 ease-in-out duration-500 
            ${theme ? "bg-secondary text-primary" : "bg-primary text-accent"}
            `}
            >
              <TextAnimation />
            </div>
          </div>
        </div>
      </article>
      <div className="w-full min-h-auto">
        <HeroBorder />
      </div>
    </section>
  );
};

export default Hero;
