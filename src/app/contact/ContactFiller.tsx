"use client";
import Hexagon from "@/app/(reusables)/Hexagon";
import { useAppSelector } from "@/app/redux";


const hexagonPositions = [
  { id: 1, position: "top-[12%] left-[42%]", durationClass: "animate-floating10" },
  { id: 2, position: "top-[70%] left-[50%]", durationClass: "animate-floating10" },
  { id: 3, position: "top-[17%] left-[6%]", durationClass: "animate-floating9" },
  { id: 4, position: "top-[20%] left-[60%]", durationClass: "animate-floating11" },
  { id: 5, position: "top-[60%] left-[10%]", durationClass: "animate-floating6" },
  { id: 6, position: "top-[80%] left-[70%]", durationClass: "animate-floating12" },
  { id: 7, position: "top-[60%] left-[80%]", durationClass: "animate-floating15" },
  { id: 8, position: "top-[32%] left-[25%]", durationClass: "animate-floating16" },
  { id: 9, position: "top-[90%] left-[25%]", durationClass: "animate-floating9" },
  { id: 10, position: "top-[20%] left-[80%]", durationClass: "animate-floating5" },
];

const ContactFiller = () => {
    const theme = useAppSelector((state)=> state.global.theme);
  return (
    <section className="relative w-full h-[80%] xl:h-full">
      <div
        className="w-full h-full overflow-hidden absolute rounded-t-xl"
        style={{
          background: theme ? "linear-gradient(90deg, rgba(85, 95, 107, 1) 0%, rgba(54, 153, 153, 1) 35%, rgba(3, 123, 252, 1) 100%)":
          "linear-gradient(90deg, rgba(30, 41, 59, 1) 0%, rgba(60, 105, 151, 1) 35%, rgba(7, 0, 77, 1) 100%)",
        }}
      >
        {hexagonPositions.map((hex) => (
          <Hexagon
            key={hex.id}
            width="60"
            height="60"
            fillColor={`${theme ? "#050F0D":"#10b981"}`}
            className={`absolute ${hex.position} ${hex.durationClass}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactFiller;
