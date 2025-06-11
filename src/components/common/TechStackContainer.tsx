interface TechStackContainerProps {
  children: React.ReactNode;
}

const TechStackContainer = ({ children }: TechStackContainerProps) => {
  return (
    <div className="py-8 px-4 border-accent-dark flex flex-wrap justify-center md:justify-start gap-8 rounded-md shadow-inner">
      {children}
    </div>
  );
};

export default TechStackContainer;
