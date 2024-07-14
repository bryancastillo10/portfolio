
interface AboutContentProps{
    paragraph: string;
}

const ParagraphContent = ({paragraph}:AboutContentProps) => {
  return (
    <div className="max-w-full md:max-w-[90%] font-medium text-[22px] md:text-[24px] 
      py-14 md:py-10 
     text-center md:text-left
    ">
      {paragraph}
    </div>
  )
}

export default ParagraphContent;
