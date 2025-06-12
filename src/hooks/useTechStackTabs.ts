import { useState } from 'react';

const useTechStackTabs = () => {
  const [selectedTab, setSelectedTab] = useState('frontend');

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return {
    selectedTab,
    handleChangeTab,
  };
};

export default useTechStackTabs;
