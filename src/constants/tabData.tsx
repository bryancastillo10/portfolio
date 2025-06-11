import StackIcon from '@/components/ui/StackIcon';

import { FrontendIcons, LanguageIcons } from '@/assets';

interface tabDataProps {
  label: string;
  value: string;
  content: React.JSX.Element;
}

export const tabData: tabDataProps[] = [
  {
    label: 'Languages',
    value: 'language',
    content: (
      <div className="py-8 px-4 border-accent-dark flex flex-wrap gap-8 rounded-md shadow-inner">
        <StackIcon icon={LanguageIcons.TypescriptIcon} text="TypeScript" />
        <StackIcon icon={LanguageIcons.PythonIcon} text="Python" />
        <StackIcon icon={LanguageIcons.GoIcon} text="Go Lang" />
      </div>
    ),
  },
  {
    label: 'Frontend',
    value: 'frontend',
    content: (
      <div className="py-8 px-4 border-accent-dark flex flex-wrap gap-8 rounded-md shadow-inner">
        <StackIcon icon={FrontendIcons.HtmlIcon} text="HTML" />
        <StackIcon icon={FrontendIcons.CSSIcon} text="CSS" />
        <StackIcon icon={FrontendIcons.JSIcon} text="JavaScript" />
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
