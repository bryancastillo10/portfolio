'use client';

import TextHeader from '@/components/common/TextHeader';

import { careerRecords } from '@/constants/careers';
import CareerCard from '@/components/ui/CareerCard';

const Education = () => {
  return (
    <section className="w-full lg:px-4 xl:px-0">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="Educational Background" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full items-center lg:place-items-end">
        {careerRecords
          .filter(record => record.career === 'education')
          .flatMap(record =>
            record.content.map(item => (
              <CareerCard
                key={`education-${item.id}`}
                career={record.career}
                content={item}
              />
            )),
          )}
      </div>
    </section>
  );
};

export default Education;
