'use client';

import Image from 'next/image';
import { useAppSelector } from '@/lib/redux/hooks';

import { SystemArchitecture } from '@/constants/systemArchitectures';

const FigureCard = (props: SystemArchitecture) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  const {
    name,
    description,
    diagram,
    diagramAlt,
    schema,
    schemaAlt,
    projectStatus,
  } = props;
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-3 lg:max-w-full md:h-180 lg:h-auto mx-auto cursor-grab group hover:scale-95 transition-scale duration-700 ease-in-out my-6 rounded-lg shadow-lg bg-black">
      <div className="col-span-2 flex justify-center items-center  w-full">
        <Image src={diagram} alt={diagramAlt} width={800} height={800} />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 duration-500 ease-out">
        <div
          className={` ${isDarkMode ? 'text-foreground' : 'text-background'} bg-accent-dark/50 py-3 px-2 rounded-md`}
        >
          <h1 className="text-4xl font-semibold tracking-widest opacity-100 my-2">
            {name}
          </h1>
          <p className="text-xl font-semibold tracking-wider">{description}</p>
        </div>
      </div>

      <div
        className={`absolute flex justify-center items-center bottom-2 right-2 rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 duration-500 ease-out
    ${isDarkMode ? 'bg-accent-dark text-foreground' : 'bg-accent-light text-gray'}`}
      >
        <p className="text-base">{`${projectStatus === 'development' ? '🚧 In Progress' : '🚀 Deployed Project'}`}</p>
      </div>

      <div className="flex justify-center items-center w-full">
        <Image
          src={schema}
          alt={schemaAlt}
          width={300}
          height={400}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default FigureCard;
