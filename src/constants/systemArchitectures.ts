export interface SystemArchitecture {
  id?: number;
  name: string;
  description: string;
  diagram: string;
  diagramAlt: string;
  schema: string;
  schemaAlt: string;
  projectStatus: 'production' | 'development';
}

export const systemArchitectures: SystemArchitecture[] = [
  {
    id: 1,
    name: 'Water Analytics',
    description: 'Water Quality Monitoring Dashboard App',
    diagram:
      'https://raw.githubusercontent.com/bryancastillo10/water-analytics/refs/heads/main/architecture.png',
    diagramAlt: 'water-analytics-architecture',
    schema:
      'https://raw.githubusercontent.com/bryancastillo10/water-analytics/refs/heads/main/schema.png',
    schemaAlt: 'water-analytics-schema',
    projectStatus: 'production',
  },
  {
    id: 2,
    name: 'DNA Seq Explorer',
    description: 'Bioinformatics Tool for Biological Sequences',
    diagram:
      'https://raw.githubusercontent.com/bryancastillo10/dna-seq-explorer/refs/heads/main/architecture.png',
    diagramAlt: 'dna-seq-explorer-architecture',
    schema:
      'https://raw.githubusercontent.com/bryancastillo10/dna-seq-explorer/refs/heads/main/machine-learning-screenshot.png',
    schemaAlt: 'machine-learning-process',
    projectStatus: 'production',
  },
  {
    id: 3,
    name: 'Food Delivery App',
    description: 'Collab Project In Progress',
    diagram: '/images/food_delivery_architecture.png',
    diagramAlt: 'food-delivery-app-architecture',
    schema: '/images/food_delivery_schema.png',
    schemaAlt: 'food-delivery-app-schema',
    projectStatus: 'development',
  },
  {
    id: 4,
    name: 'Riff-Market',
    description: 'Musical Instrument Marketplace with AI-Chatbot Assistant',
    diagram: '/images/riff-market-architecture.png',
    diagramAlt: 'riff-market-architecture',
    schema: '/images/riff-market-schema.png',
    schemaAlt: 'riff-market-schema',
    projectStatus: 'development',
  },
  {
    id: 5,
    name: 'Canepanion',
    description: 'Cane-strap Device with AI Integrations through Cloud Server',
    diagram: '/images/canepanion-architecture.png',
    diagramAlt: 'canepanion-architecture',
    schema: '/images/canepanion-schema.png',
    schemaAlt: 'canepanion-schema',
    projectStatus: 'development',
  },
  {
    id: 6,
    name: 'Smart-PLC-Control',
    description: 'Process Engineering Simulation App',
    diagram: '/images/smart-plc-control-architecture.png',
    diagramAlt: 'smart-plc-control-architecture',
    schema: '/images/smart-plc-control-schema.png',
    schemaAlt: 'smart-plc-control-schema',
    projectStatus: 'development',
  },
  {
    id: 7,
    name: 'Schedly',
    description: 'Collab Project In Progress, Personal Calendar App',
    diagram: '/images/schedly_architecture.png',
    diagramAlt: 'schedly-architecture',
    schema: '/images/schedly_schema.png',
    schemaAlt: 'schedly-schema',
    projectStatus: 'development',
  },
];
