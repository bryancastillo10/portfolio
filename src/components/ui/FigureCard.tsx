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
    <div
      className={`relative grid grid-cols-3 max-w-lg xl:max-w-full mx-auto cursor-grab group hover:opacity-80  my-6 rounded-lg shadow-lg
            ${isDarkMode ? 'text-accent-light bg-gray/20' : 'text-background bg-black'}

        `}
    >
      <div className="col-span-2 flex justify-center items-center  w-full h-100">
        <Image src={diagram} alt={diagramAlt} width={800} height={800} />
      </div>

      <div className="absolute top-[40%] left-[25%] xl:left-[35%] opacity-0 group-hover:opacity-100 duration-500 ease-out">
        <h1 className="text-5xl font-semibold tracking-widest opacity-100 text-shadow-foreground my-2">
          {name}
        </h1>
        <p className="text-xl text-center font-semibold tracking-wider">
          {description}
        </p>
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
