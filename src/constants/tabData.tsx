import TechStackContainer from '@/components/common/TechStackContainer';
import StackIcon from '@/components/ui/StackIcon';

import {
  LanguageIcons,
  FrontendIcons,
  BackendIcons,
  DevToolsIcons,
  DataScienceIcons,
} from '@/assets';

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
        <StackIcon icon={FrontendIcons.TailwindIcon} text="TailwindCSS" />
        <StackIcon icon={FrontendIcons.ReactIcon} text="React" />
        <StackIcon icon={FrontendIcons.ViteIcon} text="Vite" />
        <StackIcon icon={FrontendIcons.NextJSIcon} text="NextJS" />
        <StackIcon icon={FrontendIcons.MaterialUIIcon} text="Material UI" />
      </TechStackContainer>
    ),
  },
  {
    label: 'Backend',
    value: 'backend',
    content: (
      <TechStackContainer>
        <StackIcon icon={BackendIcons.NodeJSIcon} text="Node JS" />
        <StackIcon icon={BackendIcons.FastApiIcon} text="FastAPI" />
        <StackIcon icon={BackendIcons.GinIcon} text="Gin" />
        <StackIcon icon={BackendIcons.MongoDBIcon} text="MongoDB" />
        <StackIcon icon={BackendIcons.PostgresIcon} text="PostgreSQL" />
        <StackIcon icon={BackendIcons.PrismaIcon} text="Prisma" />
      </TechStackContainer>
    ),
  },
  {
    label: 'Dev Tools',
    value: 'tools',
    content: (
      <TechStackContainer>
        <StackIcon icon={DevToolsIcons.GithubIcon} text="Github" />
        <StackIcon icon={DevToolsIcons.GitIcon} text="Git" />
        <StackIcon icon={DevToolsIcons.DockerIcon} text="Docker" />
        <StackIcon icon={DevToolsIcons.FigmaIcon} text="Figma" />
        <StackIcon icon={DevToolsIcons.PostmanIcon} text="Postman" />
        <StackIcon icon={DevToolsIcons.VSCodeIcon} text="VS Code" />
      </TechStackContainer>
    ),
  },
  {
    label: 'AI / Data Science',
    value: 'ai',
    content: (
      <TechStackContainer>
        <StackIcon icon={DataScienceIcons.PandasIcon} text="Pandas" />
        <StackIcon icon={DataScienceIcons.NumpyIcon} text="Numpy" />
        <StackIcon
          icon={DataScienceIcons.ScikitLearnIcon}
          text="Scikit Learn"
        />
        <StackIcon icon={DataScienceIcons.LangChainIcon} text="Langchain JS" />
        <StackIcon icon={DataScienceIcons.GeminiIcon} text="Gemini" />
      </TechStackContainer>
    ),
  },
];
