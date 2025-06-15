'use client';

import useTechStackTabs from '@/hooks/useTechStackTabs';
import TextHeader from '@/components/common/TextHeader';
import { tabData } from '@/constants/tabData';

const TechStacks = () => {
  const { selectedTab, handleChangeTab } = useTechStackTabs();

  return (
    <section id="tools" className="w-full mt-8">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="My Tools for Development" />
      </div>
      <div className="my-4 flex flex-wrap gap-4 p-2 lg:p-0">
        {tabData.map(tab => (
          <button
            key={tab.value}
            onClick={() => handleChangeTab(tab.value)}
            className={`px-3 lg:px-0 text-center py-1 cursor-pointer rounded-t-md font-semibold transition-all duration-200 ${
              selectedTab === tab.value
                ? 'border-b-2'
                : 'text-gray hover:text-accent-light'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative h-[660px] md:h-[350px] bg-gray/20 rounded-lg shadow-sm m-4 lg:mx-0">
        {tabData.map(tab => (
          <div
            key={tab.value}
            className={`absolute w-full top-0 left-0 transition-all duration-500 ease-in-out transform
              ${
                selectedTab === tab.value
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0 pointer-events-none'
              }
            `}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
