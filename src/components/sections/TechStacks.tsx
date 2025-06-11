'use client';

import { useState } from 'react';
import TextHeader from '@/components/common/TextHeader';
import { tabData } from '@/constants/tabData';

const TechStacks = () => {
  const [selectedTab, setSelectedTab] = useState('frontend');

  return (
    <section className="w-full">
      <TextHeader title="My Tools for Development" />

      <div className="my-4 flex gap-4 pb-2">
        {tabData.map(tab => (
          <button
            key={tab.value}
            onClick={() => setSelectedTab(tab.value)}
            className={`px-4 py-1 cursor-pointer rounded-t-md font-semibold transition-all duration-200 ${
              selectedTab === tab.value
                ? 'border-b-2 border-accent-dark text-accent-dark'
                : 'text-gray hover:text-accent-light'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden h-[300px] border">
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
