'use client';

import TextHeader from '@/components/common/TextHeader';
import { useAppSelector } from '@/lib/redux/hooks';

import Image from 'next/image';

const Architectures = () => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <section id="architectures" className="w-full mt-8">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="Software System Architectures" />
      </div>

      <div
        className={`relative grid grid-cols-3 max-w-lg xl:max-w-full mx-auto cursor-grab group hover:opacity-80  my-6 rounded-lg shadow-lg
            ${isDarkMode ? 'text-accent-light bg-gray/20' : 'text-background bg-black'}

        `}
      >
        <div className="col-span-2 flex justify-center items-center  w-full h-100">
          <Image
            src="https://raw.githubusercontent.com/bryancastillo10/water-analytics/refs/heads/main/architecture.png"
            alt="water-analytics-architecture"
            width={800}
            height={800}
          />
        </div>

        <div className="absolute top-[40%] left-[25%] xl:left-[35%] opacity-0 group-hover:opacity-100 duration-500 ease-out">
          <h1 className="text-5xl font-semibold tracking-widest opacity-100 text-shadow-foreground my-2">
            Water Analytics
          </h1>
          <p className="text-xl text-center font-semibold tracking-wider">
            Water Quality Monitoring Dashboard App
          </p>
        </div>

        <div
          className={`absolute flex justify-center items-center bottom-2 right-2 rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 duration-500 ease-out
    ${isDarkMode ? 'bg-accent-dark text-foreground' : 'bg-accent-light text-gray'}`}
        >
          <p className="text-base">🚀 Deployed Project</p>
        </div>

        <div className="flex justify-center items-center w-full h-100">
          <Image
            src="https://raw.githubusercontent.com/bryancastillo10/water-analytics/refs/heads/main/schema.png"
            alt="water-analytics-schema"
            width={300}
            height={500}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Architectures;
