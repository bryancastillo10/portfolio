import { IRepository } from '@/interfaces/gitrepo';

export interface ViewerQuery {
  name: string;
  login: string;
  avatarUrl: string;
  bio: string;
  location?: string;
  publicRepos: { totalCount: number };
  followers: { totalCount: number };
  following: { totalCount: number };
}

export interface GitHubProfile {
  viewer: ViewerQuery;
  [key: `repo_${number}`]: IRepository<string>;
}

export interface GithubProfileRes<T, U> {
  name: T;
  login: T;
  avatarUrl: T;
  bio: T;
  location: T;
  publicRepos: U;
  followers: U;
  following: U;
}
