import MajorProject from "@/app/projects/(components)/MajorProject";
import FillerSection from '@/app/projects/(components)/FillerSection';
import MinorProject from "@/app/projects/(components)/MinorProject";


const BentoLayout = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 
    grid-rows-[repeat(14,20vh)]  xl:grid-rows-[repeat(6,20vh)] gap-4">

    <MajorProject order="order-2" backgroundColor="bg-teal-700" />

    <FillerSection order="order-1"/>

    <MinorProject order="order-3" backgroundColor="bg-sky-700"/>

    <MinorProject order="order-4" backgroundColor="bg-pink-600"/>

    <MinorProject order="order-8" backgroundColor="bg-stone-500"/>

    <MinorProject order="order-7" backgroundColor="bg-amber-700"/>

    <MajorProject order="order-5" backgroundColor="bg-emerald-700" />

    <FillerSection order="order-6"/>

</div>
  )
}

export default BentoLayout;
