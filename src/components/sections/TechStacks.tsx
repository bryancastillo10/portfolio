'use client';

import { useState } from 'react';
import TextHeader from '@/components/common/TextHeader';

const tabData = [
  {
    label: 'Frontend',
    value: 'frontend',
    content: 'React, Next.js, Tailwind CSS, Vite, etc.',
  },
  {
    label: 'Backend',
    value: 'backend',
    content: 'Node.js, Express, GoLang, PostgreSQL, Prisma, etc.',
  },
  {
    label: 'Dev Tools',
    value: 'tools',
    content: 'Git, VSCode, Docker, Figma, Postman, etc.',
  },
  {
    label: 'AI / Data Science',
    value: 'ai',
    content: 'Python, Pandas, Jupyter, FastAPI, LangChain, Gemini, etc.',
  },
];

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

      <div className="relative overflow-hidden min-h-[120px]">
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
            <div className="p-4 border-accent-dark rounded-md shadow-inner">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks;
