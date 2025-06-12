import {
  Atom,
  Dna,
  Leaf,
  LucideIcon,
  TestTubeDiagonal,
  Wrench,
} from 'lucide-react';

export interface ICareerRecords {
  career: 'work' | 'education';
  content: Contents<string>[];
}

export interface Contents<T> {
  id: number;
  degree?: T;
  field?: T;
  position?: T;
  icon: LucideIcon;
  startDate: T;
  endDate: T;
  org: T;
  location: T;
  description: T;
}

export const careerRecords: ICareerRecords[] = [
  {
    career: 'education',
    content: [
      {
        id: 1,
        degree: 'Master of Science',
        field: 'Environmental Engineering',
        icon: Leaf,
        startDate: '2020-09-01T00:00:00Z',
        endDate: '2022-07-01T00:00:00Z',
        org: 'National Cheng Kung University',
        location: 'Tainan City, Taiwan',
        description:
          'Finished the degree with specialization in environmental microbiology & biotechnology. Had obtained a GPA of 4.0 ',
      },
      {
        id: 2,
        degree: 'Bachelor of Science',
        field: 'Biological Engineering',
        icon: Dna,
        startDate: '2013-07-01T00:00:00Z',
        endDate: '2018-07-01T00:00:00Z',
        org: 'Mapua University',
        location: 'Manila, Philippines',
        description:
          'Double degree program with strong foundation in molecular biology and its engineering application. Had obtained a GPA of 3.7 ',
      },
      {
        id: 3,
        degree: 'Bachelor of Science',
        field: 'Chemistry',
        icon: Atom,
        startDate: '2013-07-01T00:00:00Z',
        endDate: '2018-07-01T00:00:00Z',
        org: 'Mapua University',
        location: 'Manila, Philippines',
        description:
          'Double degree program with strong foundation on environmental chemistry. Had obtained a GPA of 3.7 ',
      },
    ],
  },

  {
    career: 'work',
    content: [
      {
        id: 1,
        position: 'Associate Researcher',
        icon: Wrench,
        startDate: '2022-11-01T00:00:00Z',
        endDate: 'present',
        org: 'Industrial Technology Research Institute',
        location: 'Hsinchu City, Taiwan',
        description:
          'Researcher in the field of biological wastewater treatment systems & had proposed research prospects on AI-based solutions for key challenges in this engineering process',
      },
      {
        id: 2,
        position: 'Laboratory Chemist',
        icon: TestTubeDiagonal,
        startDate: '2018-12-01T00:00:00Z',
        endDate: '2020-07-01T00:00:00Z',
        org: 'First Analytical Services and Technical Services Clark Branch',
        location: 'Angeles City, Pampanga, Philippines',
        description:
          'Water quality analyst wih a wide range of parameters, and also responsible with environmental compliances documentations',
      },
    ],
  },
];
