interface StackIconProps {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StackIcon = ({ text, icon: Icon }: StackIconProps) => {
  return (
    <div className="flex flex-col w-fit gap-2">
      <Icon fill="#136f63" />
      <p className="text-xl text-center text-gray font-mono">{text}</p>
    </div>
  );
};

export default StackIcon;
