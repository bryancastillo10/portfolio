import { adventPro } from "@/utils/font";

interface SectionHeaderProps{
    title:string;
}

const SectionHeader = ({title}:SectionHeaderProps) => {
  return (
    <h1 className={`text-center lg:text-left mt-4 text-5xl ${adventPro.className}`}>
        {title}
    </h1>
  )
}

export default SectionHeader;
