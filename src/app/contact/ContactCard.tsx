"use client";
import Image from "next/image";

const ContactCard = () => {
  return (
    <section className="min-h-[70vh] bg-white/90 shadow-md rounded-2xl">
        <div className="relative size-fit w-full h-[50%]">
          <Image src="/skills/frontend.png" className="rounded-2xl" alt="contact-img" fill/>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="w-full overflow-hidden xl:h-[255px] bg-light-secondary/90 backdrop-blur-md"/>
          <div className="p-2 h-fit">
            <h1>Email</h1>
            <p>bryanium.bc10@gmail.com</p>
            <h1>Phone Number</h1>
            <p>(+639) 776252396</p>
            <h1>Current Address</h1>
            <p>Hsinchu City, Taiwan</p>
            <h1>Home Address</h1>
            <p>San Jose City, Nueva Ecija</p>
          </div>
        </div>
    </section>
  )
}

export default ContactCard;
