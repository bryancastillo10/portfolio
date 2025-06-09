export interface IRepository<T> {
  id: T;
  name: T;
  description: T;
  primaryLanguage: { name: T } | null;
  createdAt: T;
  stargazers: { totalCount: number };
  url: T;
  homepageUrl: T;
  repositoryTopics: {
    nodes: { topic: { name: string } }[];
  };
}

export interface GithubRepoRes<T> {
  id: T;
  name: T;
  description: T;
  language: T | null;
  createdAt: T;
  stargazersCount: number;
  htmlUrl: T;
  homepage: T;
  topics: T[];
}
