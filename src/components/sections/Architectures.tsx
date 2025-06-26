import TextHeader from '@/components/common/TextHeader';
import FigureCard from '@/components/ui/FigureCard';

import { systemArchitectures } from '@/constants/systemArchitectures';

const Architectures = () => {
  return (
    <section id="architectures" className="w-full mt-8">
      <div className="flex justify-center lg:justify-start">
        <TextHeader title="Software System Architectures" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
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
