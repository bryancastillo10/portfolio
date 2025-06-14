'use client';

import TextHeader from '@/components/common/TextHeader';

import { careerRecords } from '@/constants/careers';
import CareerCard from '@/components/ui/CareerCard';

const Work = () => {
  return (
    <section className="w-full lg:px-4 xl:px-0">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="Work Experience" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full items-center">
        {careerRecords
          .filter(record => record.career === 'work')
          .flatMap(record =>
            record.content.map(item => (
              <CareerCard
                key={`work-${item.id}`}
                career={record.career}
                content={item}
              />
            )),
          )}
      </div>
    </section>
  );
};

export default Work;
