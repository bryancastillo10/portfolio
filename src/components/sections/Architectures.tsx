import TextHeader from '@/components/common/TextHeader';
import FigureCard from '@/components/ui/FigureCard';

import { systemArchitectures } from '@/constants/systemArchitectures';

const Architectures = () => {
  return (
    <section id="architectures" className="w-full mt-8 lg:px-4 xl:px-0">
      <div className="flex justify-center lg:justify-start items">
        <TextHeader title="System Architectures" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 justify-center items-center md:gap-4 px-2 lg:px-0">
        {systemArchitectures.map(sys => {
          return (
            <FigureCard
              key={sys.id}
              name={sys.name}
              description={sys.description}
              diagram={sys.diagram}
              diagramAlt={sys.diagramAlt}
              schema={sys.schema}
              schemaAlt={sys.schemaAlt}
              projectStatus={sys.projectStatus}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Architectures;
