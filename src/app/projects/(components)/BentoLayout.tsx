import MajorProject from "@/app/projects/(components)/MajorProject";
import FillerSection from '@/app/projects/(components)/FillerSection';
import MinorProject from "@/app/projects/(components)/MinorProject";

import ProjectPageHeader from "@/app/projects/ProjectPageHeader";

const BentoLayout = () => {
  return (
<main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

    <MajorProject order="order-2" backgroundColor="bg-gray-400/50" isLayoutRight={false}  />

    <FillerSection order="order-1"><ProjectPageHeader/></FillerSection>

    <MinorProject order="order-3" backgroundColor="bg-sky-700"/>

    <MinorProject order="order-4" backgroundColor="bg-pink-600"/>

    <MinorProject order="order-8" backgroundColor="bg-stone-500"/>

    <MinorProject order="order-7" backgroundColor="bg-amber-700"/>

    <MajorProject order="order-5" backgroundColor="bg-stone-500/50" isLayoutRight />

    <FillerSection order="order-6">
      <h1 className="p-4 text-2xl">
        Footer
      </h1>
    </FillerSection>

</main>
  )
}

export default BentoLayout;
