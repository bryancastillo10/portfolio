import StackIcon from '@/components/ui/StackIcon';

interface tabDataProps {
  label: string;
  value: string;
  content: React.JSX.Element;
}

export const tabData: tabDataProps[] = [
  {
    label: 'Frontend',
    value: 'frontend',
    content: (
      <div className="p-4 border-accent-dark rounded-md shadow-inner">
        <StackIcon />
      </div>
    ),
  },
  {
    label: 'Backend',
    value: 'backend',
    content: (
      <div className="p-4 border-accent-dark rounded-md shadow-inner">
        'Node.js, Express, GoLang, PostgreSQL, Prisma, etc.'
      </div>
    ),
  },
  {
    label: 'Dev Tools',
    value: 'tools',
    content: (
      <div className="p-4 border-accent-dark rounded-md shadow-inner">
        'Git, VSCode, Docker, Figma, Postman, etc.'
      </div>
    ),
  },
  {
    label: 'AI / Data Science',
    value: 'ai',
    content: (
      <div className="p-4 border-accent-dark rounded-md shadow-inner">
        'Python, Pandas, Jupyter, FastAPI, LangChain, Gemini, etc.'
      </div>
    ),
  },
];
