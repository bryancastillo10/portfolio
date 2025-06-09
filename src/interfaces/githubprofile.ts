export interface GitHubProfile {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  location?: string;
  public_repos: number;
  followers: number;
  following: number;
}
