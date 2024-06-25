"use client";
import { useThemeContext } from "@/context/useContext";
import HeroBorder from "./HeroBorder";

const Hero = () => {
  const { theme } = useThemeContext();

  return (
    <section>
      <article className="md:max-w-[80%] mx-auto container">
        <div className="mt-20">
          <div className={`${theme ? "bg-primary text-secondary" : "bg-secondary/80 text-primary"} 
                           ease-in-out duration-500  rounded-xl md:max-w-[45%]`}>
            <div className=" p-4 flex flex-col gap-4 text-center md:text-left">
              <h1 className="font-bold text-2xl lg:text-5xl tracking-wider">
                Bryan Castillo
              </h1>
              <p className="font-light leading-sm text-[20px] max-w-[75%] md:max-w-full mx-auto">
                Crafting creative and innovative solutions from &nbsp;
                <span className="font-bold">science</span> to &nbsp;
                <span className="font-bold">software development</span>
              </p>
            </div>
          </div>
          <div className="mt-14">
            <div className="md:max-w-[30%] md:ml-auto rounded-xl text-accent bg-primary p-4">
              <p className="text-center font-medium font-mono text-[20px]">
                Full Stack Developer
              </p>
              {/* Add Effect:  Full Stack Developer / Engineer / Chemist */}
            </div>
          </div>
        </div>
      </article>
      <div className="w-full h-auto">
        <HeroBorder />
      </div>
    </section>
  );
};

export default Hero;
