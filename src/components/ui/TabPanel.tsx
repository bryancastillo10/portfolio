interface TabPanelProps {
  title: string;
}

const TabPanel = ({ title }: TabPanelProps) => {
  return (
    <div className="panel">
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
        omnis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        repellendus quisquam sed vel veniam commodi reiciendis repudiandae
        dignissimos natus praesentium!
      </p>
    </div>
  );
};

export default TabPanel;
