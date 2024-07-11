"use client";
import { useState } from "react";
import TabPanel from "./TabPanel";
import "./tabs.modules.css";


const Tabs = () => {
   const [selectedTab, setSelectedTab] = useState<number>(1);

  const sampleArray = [
    {
      id: 1,
      category: "Language",
    },
    {
      id: 2,
      category: "Dev Tools",
    },
    {
      id: 3,
      category: "Web Frontend",
    },
    {
      id: 4,
      category: "Web Backend",
    },
  ];



  const tabTitles = <>
    {sampleArray.map((sample) => {
      return <button
        key={sample.id}
        onClick={()=> setSelectedTab(sample.id)}
        className={`${selectedTab === sample.id ? "tab-title tab-title-active":"tab-title"}`}
      >
        {sample.category}
      </button>
    })}
  </>

  const tabContent = <>
    {sampleArray.map((sample) => {
      return <div
        style={selectedTab === sample.id ? {} : {display:'none'}}
        key={sample.id}>
        <TabPanel title={sample.category} />
    </div>
  })}
  </>

  return (

<div className="tab-container">
      <div className="flex gap-1">
        {tabTitles}
      </div>
      <div className="p-2 bg-primary text-secondary">
      {tabContent}
      </div>
      
    </div>
        
  );
};

export default Tabs;
