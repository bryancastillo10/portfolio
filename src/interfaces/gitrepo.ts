export interface IRepository<T> {
  id: T;
  name: T;
  description: T;
  primaryLanguage: { name: T } | null;
  stargazers: { totalCount: number };
  url: T;
  homepageUrl: T;
  repositoryTopics: {
    nodes: { topic: { name: string } }[];
  };
  releases: {
    nodes: {
      tagName: T;
    }[];
  };
}

export interface GithubRepoRes<T> {
  id: T;
  name: T;
  description: T;
  language: T | null;
  stargazersCount: number;
  htmlUrl: T | null;
  imageUrl: T;
  homepage: T;
  topics: T[];
  tagName: T;
}
