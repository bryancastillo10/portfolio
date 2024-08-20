"use client";

import Image from "next/image";
import AboutImg from "@/asset/AboutPic.png";
import Button from "@/app/(reusables)/Button";
import { useRouter } from "next/navigation";

const AboutInfo = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-4 ">
        {/* About Description */}
        <div className="mt-8 p-4 text-wrap w-[70%]">
          <p className='text-base text-center md:text-left'>Bryan adapts to the rapidly changing digital world and discovers 
              that producing and maintaining software can solve some real-world problems.</p>
          <p className='text-base text-center md:text-left mt-4'>He became a self-taught programmer capable 
                of creating valuable software applications due to his resourcefulness and perseverance in his 
                career development.</p>
          <div className="flex flex-col md:flex-row justify-end gap-x-6 pt-4 max-w-[80%] mx-auto md:mx-0">
              <Button action={()=> router.push("/projects")} variant="primary">View Projects</Button>
              <Button action={()=>router.push("/contact")} variant="secondary">Contact Me</Button> 
          </div>
        </div>
        {/* About Image */}
        <div className="flex mt-8 p-4 w-full place-content-center">
              <Image 
                src={AboutImg.src} 
                alt="about-me-image" 
                width="250"
                height="250"
              />
        </div>
    </section>
  )
}

export default AboutInfo;
