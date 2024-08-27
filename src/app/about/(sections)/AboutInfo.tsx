"use client";
import { useEffect } from "react";
import Image from "next/image";
import Button from "@/app/(reusables)/Button";
import Hexagon from "@/app/(reusables)/Hexagon";
import RevealText from "@/app/(reusables)/RevealText";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/redux";
import {motion, useAnimate } from "framer-motion";

type AnimateFunction = ReturnType<typeof useAnimate>[1];

interface AnimateHexagonProps {
  animate: AnimateFunction;
  scope: ReturnType<typeof useAnimate>[0];
}
const AboutInfo = () => {
  const router = useRouter();
  const isSidebarCollapse = useAppSelector((state)=> state.global.isSidebarCollapse);

  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  
  const hexagonVariant = {
    start: { scale: 0 },
    visible: { scale: 1, rotate: "360deg", x: [0, 100, -100, 1] },
    loaded: { scale: 1 }
  }

  const animateHexagon = async ({ animate, scope }: AnimateHexagonProps): Promise<VoidFunction | undefined> => {
    if (!scope.current) return;

    // First Animation: Scaling from 0 to 1
    await animate(scope.current,
      { scale: [0, 1], rotate: 360 },
      { duration: 1.5, ease: 'easeOut' }
    );

    // Second Animation: Infinite Spinning
    const controls = animate(
      scope.current,
      { rotate: [360, 720] },
      {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
        repeatType: "loop"
      }
    );
    return () => controls.stop();
  };

  // Animation Mounting
  useEffect(() => {
    let cleanup1: VoidFunction | undefined;
    let cleanup2: VoidFunction | undefined;

    const runAnimations = async () => {
      cleanup1 = await animateHexagon({ animate: animate1, scope: scope1 });
      cleanup2 = await animateHexagon({ animate: animate2, scope: scope2 });
    };

    runAnimations();

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, [animate1, animate2, scope1, scope2]);

  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-4 ">
        {/* About Description */}
        <article className="xl:mt-[-50px] p-4 text-wrap w-[70%]">
          <RevealText withSlider isLeft={false}><p className='text-base text-center md:text-left'>Bryan adapts to the rapidly changing digital world and discovers 
              that producing and maintaining software can solve some real-world problems.</p></RevealText>
              <RevealText withSlider isLeft><p className='text-base text-center md:text-left mt-4'>He became a self-taught programmer capable 
                of creating valuable software applications due to his resourcefulness and perseverance in his 
                career development.</p></RevealText>
          <RevealText withSlider isLeft={false}>
            <div className={`py-10 flex ${isSidebarCollapse ? "flex-col md:flex-row" :"md:flex-col"} gap-4`}>              
                <Button type="button" width="w-[70%] mx-auto" action={()=> router.push("/projects")} variant="primary">View Projects</Button>
                <Button type="button" width="w-[70%] mx-auto" action={()=>router.push("/contact")} variant="secondary">Contact Me</Button>            
            </div>
          </RevealText> 
        </article>
        {/* About Image */}
        <div className="flex items-center relative mt-8 p-10 w-full place-content-center">
            <motion.div 
              ref={scope1}
              initial={{ scale: 0, rotate: 0 }}
              className="absolute z-10 top-[5%] left-[-7%] md:top-[-15%] lg:top-[-5%] lg:left-[-5%] xl:top-[5%] xl:left-[5%]">
              <Hexagon fillColor="#119DA4" width="150" height="130" />
            </motion.div>
            <motion.div
              variants={hexagonVariant}
              transition={{duration:2, delay:0.125, ease:"easeOut"}}
              initial="start"
              animate="visible"
            >
              <Image 
                src={"/main/AboutPic.png"} 
                alt="about-me-image" 
                width="350"
                height="350"
                />
            </motion.div>
            <motion.div
              ref={scope2}
              initial={{ scale: 0, rotate: 0 }} 
              className="absolute bottom-0 right-[-8%] md:bottom-[-15%] lg:bottom-[-5%] lg:right-[-5%] xl:right-[10%] xl:bottom-0">
            <Hexagon fillColor="#3C6997" width="150" height="130" />
            </motion.div>
        </div>
    </section>
  )
}

export default AboutInfo;
