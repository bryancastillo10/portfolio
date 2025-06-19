import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');

export function getAllProjectSlugs() {
  const files = fs.readdirSync(PROJECTS_DIR);
  return files.map(file => file.replace(/\.mdx$/, ''));
}

export async function getProjectByRepo(repo: string) {
  const filePath = path.join(PROJECTS_DIR, `${repo}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  const compiled = await compile(content, {
    outputFormat: 'function-body',
  });

  return {
    frontmatter: data,
    compiledCode: String(compiled),
  };
}
