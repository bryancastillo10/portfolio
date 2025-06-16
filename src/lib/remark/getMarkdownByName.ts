import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const markdownDir = path.join(process.cwd(), 'src', 'markdowns');

export const getMarkdownByName = async (name: string) => {
  const fullPath = path.join(markdownDir, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const { content, data } = matter(fileContents);

  const processedContents = await remark().use(html).process(content);
  const contentHtml = processedContents.toString();

  return {
    name,
    contentHtml,
    frontMatter: data,
  };
};
