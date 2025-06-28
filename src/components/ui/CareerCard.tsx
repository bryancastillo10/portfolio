'use client';

import { useAppSelector } from '@/lib/redux/hooks';

import { Contents } from '@/constants/careers';
import { formatDate } from '@/utils/formatDate';

interface CareerCardProps {
  career: 'work' | 'education';
  content: Contents<string>;
}

const CareerCard = ({ career, content }: CareerCardProps) => {
  const {
    degree,
    field,
    position,
    icon: Icon,
    startDate,
    endDate,
    org,
    location,
    description,
  } = content;

  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);
  return (
    <div
      className={`my-6 rounded-xl shadow-md w-[95%] lg:w-[85%] xl:w-[90%] lg:mx-0 h-120 xl:h-90 mx-auto
        ${isDarkMode ? 'bg-gray text-accent-dark border-none' : 'bg-background border border-gray'} 
      `}
    >
      <div className="p-6">
        <div className="flex flex-col xl:flex-row gap-y-2 xl:justify-between gap-x-10 items-center">
          <h1 className="text-2xl text-center xl:text-left font-semibold">
            {career === 'education' ? `${degree} in ${field}` : `${position}`}
          </h1>
          <p className="text-sm my-2 italic">
            {`${formatDate(startDate)} - ${formatDate(endDate)}`}
          </p>
        </div>
        <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-center">
          <div className="my-4 flex flex-col items-center xl:items-start space-y-4 md:space-y-4">
            <h3
              className={`shadow-md text-sm  w-fit py-2 px-4 rounded-2xl bg-accent-light text-center xl:text-left `}
            >
              {org}
            </h3>
            <h3
              className={` shadow-md text-sm w-fit py-2 px-4 rounded-2xl bg-accent-light text-center xl:text-left`}
            >
              {location}
            </h3>
          </div>
          <div
            className={`${isDarkMode ? 'bg-accent-light/80' : 'bg-gray/20'} my-4 md:my-0 p-4 rounded-full border shadow-sm duration-500 ease-in-out`}
          >
            <Icon className="size-10" />
          </div>
        </div>
        <div className="p-3 lg:max-w-[90%] xl:max-w-[90%] w-fit">
          <p className="text-wrap text-sm text-center xl:text-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
