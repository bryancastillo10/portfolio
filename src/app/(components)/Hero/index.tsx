"use client";
// Libraries
import { useAppSelector } from "@/app/redux";
import { useRouter } from "next/navigation";

// Components
import { TopProjects } from "@/app/(components)/Hero/TopProjects";
import Button from "@/app/(reusables)/Button";

// Assets and Styling
import { adventPro } from "@/utils/font";
import { projectInfo } from "./projectInfo";
import HeroBg from "@/asset/HeroMainBG.png";
import WaveUp from "./WaveUp";
import TextAnimation from "./TextAnimation";

const Hero = () => {
    const router = useRouter();
    const theme = useAppSelector((state)=> state.global.theme);
    const isSidebarCollapse = useAppSelector((state)=> state.global.isSidebarCollapse);

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), 
        rgba(0, 0, 0, 0.2)), url(${HeroBg.src})`,
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
        <div className="mt-8 max-w-[90%] md:max-w-[80%] mx-auto space-y-4 md:space-y-8">
        <h1 className={`text-5xl xl:text-7xl tracking-wider ${adventPro.className}`}>Top Projects</h1>
        <TopProjects projectInfo={projectInfo} />
        <article className="flex place-content-center xl:place-content-end my-8">
            <Button type="button" action={()=>{router.push("/projects")}} variant="secondary">More Project Details...</Button>
        </article>
        </div>
    </div>
  )
}

export default Hero;
