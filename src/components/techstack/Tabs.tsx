"use client";
import { useState } from "react";
import "./tabs.modules.css";

import TabMenu from "../ui/TabMenu";
import TabPanel from "../ui/TabPanel";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const sampleArray = [
    {
      id: 1,
      name: "Language",
    },
    {
      id: 2,
      name: "Dev Tools",
    },
    {
      id: 3,
      name: "Web Frontend",
    },
    {
      id: 4,
      name: "Web Backend",
    },
  ];

  const handleTabChange = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };

  return (
    <div className="flex flex-wrap text-base text-secondary shadow-sm py-8 px-3">
      {sampleArray.map((sample) => (
        <div key={sample.id}>
          <TabMenu
            name={sample.name}
            checked={selectedTab === sample.id}
            onChange={() => handleTabChange(sample.id)}
          />
          {selectedTab === sample.id && <TabPanel title={sample.name} />}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
