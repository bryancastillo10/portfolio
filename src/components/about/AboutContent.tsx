
interface AboutContentProps{
    paragraph: string;
}

const AboutContent = ({paragraph}:AboutContentProps) => {
  return (
    <div className="max-w-full md:max-w-[90%] font-medium text-[22px] md:text-[24px] 
      my-16 md:my-10 
     text-center md:text-left
    ">
      {paragraph}
    </div>
  )
}

export default AboutContent;
