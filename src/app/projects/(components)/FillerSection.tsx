import { ReactNode } from "react";
interface FillerSectionProps{
    order:string;
    children:ReactNode;
}

const FillerSection = ({order,children}:FillerSectionProps) => {
  return (
    <section className={`${order} col-span-1 md:col-span-2 xl:order-none row-span-1 xl:row-span-1`}>
        {children}
    </section>
  )
}

export default FillerSection;
