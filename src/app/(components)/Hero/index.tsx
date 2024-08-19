"use client";
import { useAppSelector } from "@/app/redux";
import HeroBg from "@/asset/HeroMainBG.png";
import TopProjects from "@/app/(components)/Hero/TopProjects";
import { adventPro } from "@/utils/font";
import Button from "@/app/(reusables)/Button";

const Hero = () => {
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
              <Button action={()=>{}} variant="primary">About</Button>
              <Button action={()=>{}} variant="secondary">Contact</Button> 
            </div>
          </div>

          {/* Hero Subheader */}
          <div className="flex justify-center md:max-w-[50%] mx-auto md:mx-0 md:ml-auto pb-8">
            <div className={`${theme ? "bg-secondary":"bg-primary/80"} rounded-2xl my-8 py-4 px-8`}>
              <h1 className="text-4xl font-mono">Software Developer</h1>
            </div>
          </div>
        </section>
        <TopProjects/>
    </div>
  )
}

export default Hero;
