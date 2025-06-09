interface TextHeaderProps {
  title: string;
}

const TextHeader = ({ title }: TextHeaderProps) => {
  return (
    <div className="flex flex-col w-fit">
      <h1 className="text-2xl font-semibold tracking-wider">{title}</h1>
      <hr className="w-full border-b-2 my-2" />
    </div>
  );
};

export default TextHeader;
