import TabPanel from "./TabPanel";

interface TabMenuProps {
  name: string;
  checked: boolean;
  onChange: () => void;
}

const TabMenu = ({ name, checked, onChange }: TabMenuProps) => {
  return (
    <>
      <input
        className="tab-menu"
        type="radio"
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="label" htmlFor={name}>
        {name}
      </label>
    </>
  );
};

export default TabMenu;
