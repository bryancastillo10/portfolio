"use client";
// Libraries
import { useAppSelector } from "@/app/redux";
import { useRouter } from "next/navigation";
import {motion} from "framer-motion";
import { Ellipsis } from "lucide-react";

// Components
import Button from "@/app/(reusables)/Button";
import RevealText from "@/app/(reusables)/RevealText";
import Timeline from "@/app/(components)/Hero/Timeline";

// Assets and Styling
import { adventPro } from "@/utils/font";
import { projects } from "./projectInfo";
import WaveUp from "./WaveUp";
import TextAnimation from "./TextAnimation";

const Hero = () => {
    const router = useRouter();
    const theme = useAppSelector((state)=> state.global.theme);
    const isSidebarCollapse = useAppSelector((state)=> state.global.isSidebarCollapse);

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), 
        rgba(0, 0, 0, 0.2)), url(/main/HeroMainBG.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      };
  
    return (
    <div className="w-full min-h-screen">
       <section style={backgroundStyle}>
          <div className="max-w-[80%] mx-auto container pt-20">
            {/* Hero Header */}
            <div className={`my-4 md:p-4 flex flex-col gap-4 text-center md:text-left  rounded-2xl 
              ${isSidebarCollapse ? "md:max-w-[50%]":"md:max-w-[60%]"}
              ${theme ? "bg-secondary":"bg-primary/80"}`}>
              <RevealText isLeft>
              <h1 className={`mt-8 md:mt-4 font-bold text-7xl tracking-wide ${adventPro.className}`}>
                Bryan Castillo
              </h1>
              <div className="min-w-fit md:max-w-full py-4 ">
                <p className="md:font-medium leading-sm text-left text-xl md:text-2xl max-w-[90%] mx-auto md:mx-0">
                  Crafting creative and innovative solutions from &nbsp;
                  <span className="font-bold">science</span> to &nbsp;
                  <span className="font-bold">software development</span>
                </p>
              </div>
              </RevealText>
            </div>

            {/* Hero CTA */}
            <div className={`flex flex-col md:flex-row justify-end gap-x-6 pt-4 max-w-[80%] mx-auto md:mx-0 ${isSidebarCollapse ? "md:max-w-[50%]":"md:max-w-[60%]"}`}>
              <Button type="button" action={()=>{router.push("/about")}} variant="hero-primary">About</Button>
              <Button type="button" action={()=>{router.push("/contact")}} variant="hero-secondary">Contact</Button> 
            </div>
          </div>

          {/* Hero Subheader */}
          <div className="flex justify-center md:max-w-[50%] mx-auto md:mx-0 md:ml-auto pb-8">
            <div className={`${theme ? "bg-secondary":"bg-primary/80"} w-[85%] xl:w-[65%] text-[20px] xl:text-[32px] rounded-2xl my-8 py-4 px-8`}>
              <TextAnimation text1="Software Developer" text2="Envi. Engineer" text3="Biological Engineer" text4="Chemist" />
            </div>
          </div>
          <div className="bottom-0 w-full overflow-x-hidden">
                <WaveUp />
          </div>
        </section>
        <motion.div 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1.5}}
          className="mt-8 max-w-[90%] md:max-w-[80%] mx-auto space-y-4 md:space-y-8"
          >
        <h1 className={`text-5xl xl:text-7xl tracking-wider ${adventPro.className}`}>Top Projects</h1> 
        <article className="flex sticky top-2 right-10 z-20 place-content-center xl:place-content-start mr-4 xl:ml-4 my-8">
            <Button width="w-fit" type="button" action={()=>{router.push("/projects")}}>
              <span className="text-xs xl:text-base">More Project Details...</span>
            </Button>

        </article>
             <Timeline projects={projects}/> 
        </motion.div>
    </div>
  )
}

export default Hero;
