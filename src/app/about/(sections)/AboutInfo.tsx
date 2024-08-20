"use client";
import Image from "next/image";
import AboutImg from "@/asset/AboutPic.png";
import Button from "@/app/(reusables)/Button";
import Hexagon from "@/app/(reusables)/Hexagon";
import { useRouter } from "next/navigation";


const AboutInfo = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-4 ">
        {/* About Description */}
        <article className="xl:mt-[-50px] p-4 text-wrap w-[70%]">
          <p className='text-base text-center md:text-left'>Bryan adapts to the rapidly changing digital world and discovers 
              that producing and maintaining software can solve some real-world problems.</p>
          <p className='text-base text-center md:text-left mt-4'>He became a self-taught programmer capable 
                of creating valuable software applications due to his resourcefulness and perseverance in his 
                career development.</p>
          <div className="py-10 flex flex-col md:flex-row gap-4">
              <Button action={()=> router.push("/projects")} variant="primary">View Projects</Button>
              <Button action={()=>router.push("/contact")} variant="secondary">Contact Me</Button> 
          </div>
        </article>
        {/* About Image */}
        <div className="flex items-center relative mt-8 p-10 w-full place-content-center">
            <div className="absolute top-[5%] left-[-12%] md:top-[-15%] lg:top-[-5%] lg:left-[-5%] xl:top-[5%] xl:left-[5%] 
            animate-spin-slow">
              <Hexagon fillColor="#119DA4" width="150" height="130" />
            </div>
            <Image 
              src={AboutImg.src} 
              alt="about-me-image" 
              width="350"
              height="350"
              />
            <div className="absolute bottom-0 right-[-12%] md:bottom-[-15%] lg:bottom-[-5%] lg:right-[-5%] xl:right-[10%] xl:bottom-0
            animate-spin-slow">
            <Hexagon fillColor="#3C6997" width="150" height="130" />
            </div>
        </div>
    </section>
  )
}

export default AboutInfo;
