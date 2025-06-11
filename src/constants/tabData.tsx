import TechStackContainer from '@/components/common/TechStackContainer';
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
      <TechStackContainer>
        <StackIcon icon={LanguageIcons.TypescriptIcon} text="TypeScript" />
        <StackIcon icon={LanguageIcons.PythonIcon} text="Python" />
        <StackIcon icon={LanguageIcons.GoIcon} text="Go Lang" />
      </TechStackContainer>
    ),
  },
  {
    label: 'Frontend',
    value: 'frontend',
    content: (
      <TechStackContainer>
        <StackIcon icon={FrontendIcons.HtmlIcon} text="HTML" />
        <StackIcon icon={FrontendIcons.CSSIcon} text="CSS" />
        <StackIcon icon={FrontendIcons.JSIcon} text="JavaScript" />
      </TechStackContainer>
    ),
  },
  {
    label: 'Backend',
    value: 'backend',
    content: (
      <TechStackContainer>
        'Node.js, Express, GoLang, PostgreSQL, Prisma, etc.'
      </TechStackContainer>
    ),
  },
  {
    label: 'Dev Tools',
    value: 'tools',
    content: (
      <TechStackContainer>
        'Git, VSCode, Docker, Figma, Postman, etc.'
      </TechStackContainer>
    ),
  },
  {
    label: 'AI / Data Science',
    value: 'ai',
    content: (
      <TechStackContainer>
        'Python, Pandas, Jupyter, FastAPI, LangChain, Gemini, etc.'
      </TechStackContainer>
    ),
  },
];
