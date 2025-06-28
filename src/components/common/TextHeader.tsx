interface TextHeaderProps {
  title: string;
  size?: string;
}

const TextHeader = ({ title, size = 'text-2xl' }: TextHeaderProps) => {
  return (
    <div className="flex flex-col w-fit">
      <h1 className={`${size} font-semibold tracking-wider`}>{title}</h1>
      <hr className="w-full border-b-2 my-2" />
    </div>
  );
};

export default TextHeader;
