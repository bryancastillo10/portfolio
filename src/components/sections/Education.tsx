import TextHeader from '@/components/common/TextHeader';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section className="w-full lg:px-4 xl:px-0">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="Educational Background" />
      </div>

      <div className={`my-6 rounded-xl shadow-md w-[90%] xl:w-[75%] `}>
        <section className="p-6">
          <div className="flex flex-col xl:flex-row gap-y-2 xl:justify-between gap-x-10 items-center">
            <h1 className="text-2xl text-center xl:text-left font-semibold">
              Degree in Educ Field
            </h1>
            <p className="my-2 italic mr-2">Date Range</p>
          </div>
          <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-center">
            <div className="my-4 flex flex-col items-center xl:items-start space-y-4 md:space-y-4">
              <h3 className={` shadow-md  w-fit py-2 px-4 rounded-2xl`}>
                School
              </h3>
              <h3 className={`shadow-md  w-fit py-2 px-4 rounded-2xl`}>
                Location
              </h3>
            </div>
            <div className={`my-4 md:my-0 p-4 rounded-full border shadow-sm`}>
              <GraduationCap className="size-10 xl:size-12" />
            </div>
          </div>
          <div className="p-3 lg:max-w-[90%] xl:max-w-[80%] w-fit">
            <p className="text-wrap lg:text-lg text-center xl:text-left">
              Short description about the program
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Education;
