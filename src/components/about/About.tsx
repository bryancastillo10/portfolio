"use client";

import { useRouter } from "next/navigation";
import ParagraphContent from "../ui/ParagraphContent";
import Image from "next/image";
import Button from "../ui/Button";
import Headers from "../ui/Headers";
import Hexagon from "../ui/Hexagon";

import gradPic from "../../../public/images/AboutPic.png";

const About = () => {
  const router = useRouter();
  return (
    <section className="bg-accent pt-10">
      <div className="max-w-[80%] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-x-24">
          <article className="flex flex-col my-10 md:my-20">
            <div className="mt-24 md:mt-40">
              <Headers>About Bryan</Headers>
            </div>
            <div className="my-0 lg:my-1">
              <ParagraphContent
                paragraph="Bryan adapts to the rapidly changing digital world and discovers 
                that producing and maintaining software can solve some real-world problems."
              />
              <ParagraphContent
                paragraph="He became a self-taught programmer capable of creating valuable 
                software applications due to his resourcefulness and perseverance in his 
                career development."
              />
              <div className="flex flex-col xl:flex-row justify-start items-center gap-8 lg:mt-20">
                <Button
                  type="button"
                  variant="primary"
                  action={() => router.push("/about")}
                  actionLabel="Read More..."
                />
                <Button
                  type="button"
                  variant="outline"
                  action={() => {}}
                  actionLabel="Check Projects"
                />
              </div>
            </div>
          </article>
          <article className="flex items-center relative my-20 md:my-0 md:mb-8">
            {/* Cyan Hexagon #119DA4 */}
            <div
              className="absolute right-0 top-[-30%] md:top-[-12%] 
            md:right-8 lg:top-[5%] lg:right-0 z-10 size-[120px] md:size-[150px] animate-spin-slow"
            >
              <Hexagon fillColor="#119DA4" width="150" height="130" />
            </div>

            {/* About Picture */}
            <div className="relative size-[340px] md:size-[500px] max-w-full mx-auto">
              <Image src={gradPic} alt="about-pic" fill />
            </div>

            {/* Carbon Hexagon #111000 */}
            <div
              className="absolute left-[-20px] bottom-[-30%] md:bottom-[-15%] animate-spin-slow
            lg:bottom-[10%] size-[120px] md:size-[150px]"
            >
              <Hexagon fillColor="#111000" width="150" height="130" />
            </div>

            {/* Dark Blue Hexagon #001C55 */}
            <div
              className="absolute right-[20%] md:right-[30%] lg:right-[40%] bottom-[-40%] md:bottom-[-30%] animate-spin-slow
            lg:bottom-[-1%] size-[120px] md:size-[150px]"
            >
              <Hexagon fillColor="#001C55" width="150" height="130" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
