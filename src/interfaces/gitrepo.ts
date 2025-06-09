export interface IRepository<T> {
  id: number;
  name: T;
  description: T;
  language: T;
  created_at: T;
  stargazers_count: number;
  html_url: T;
  homepage: T;
  topics: T[];
}
