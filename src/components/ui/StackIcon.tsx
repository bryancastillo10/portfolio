import { useAppSelector } from '@/lib/redux/hooks';

interface StackIconProps {
  text: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StackIcon = ({ text, icon: Icon }: StackIconProps) => {
  const isDarkMode = useAppSelector(state => state.theme.isDarkMode);

  return (
    <div className="flex flex-col items-center w-fit gap-2 p-2">
      <Icon fill={isDarkMode ? '#3fdec9' : '#136f63'} />
      <p
        className={`text-xl text-center font-mono *:
        ${isDarkMode ? 'text-foreground' : 'text-gray'}
        `}
      >
        {text}
      </p>
    </div>
  );
};

export default StackIcon;
