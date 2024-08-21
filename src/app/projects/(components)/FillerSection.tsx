
interface FillerSectionProps{
    order:string;
}

const FillerSection = ({order}:FillerSectionProps) => {
  return (
    <section className={`${order} col-span-1 md:col-span-2 xl:order-none xl:row-span-1 bg-gray-500`}>
        <h1 className="p-2 text-2xl">Long Filler Section</h1>
    </section>
  )
}

export default FillerSection;
