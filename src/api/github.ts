import { githubClient } from '@/lib/github';
import { GET_PROFILE_AND_REPOS } from '@/lib/gitQuery';
import { GitHubProfile } from '@/interfaces/githubprofile';

const repoNames = [
  'airbnb-clone',
  'water-analytics',
  'dna-seq-explorer',
  'space-chat',
  'co2-emissions-analysis',
];

export const getGithubData = async () => {
  const query = GET_PROFILE_AND_REPOS(repoNames);
  const rawData = await githubClient.request(query);
  const data = rawData as GitHubProfile;

  const formattedRepos = repoNames.map((_, i) => {
    const repo = data[`repo_${i}`];
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.primaryLanguage?.name ?? null,
      createdAt: repo.createdAt,
      stargazersCount: repo.stargazers.totalCount,
      htmlUrl: repo.url,
      homepage: repo.homepageUrl,
      topics: repo.repositoryTopics.nodes.map((node: any) => node.topic.name),
    };
  });

  const profile = {
    name: data.viewer.name,
    login: data.viewer.login,
    avatarUrl: data.viewer.avatarUrl,
    bio: data.viewer.bio,
    location: data.viewer.location,
    publicRepos: data.viewer.publicRepos.totalCount,
    followers: data.viewer.followers.totalCount,
    following: data.viewer.following.totalCount,
  };

  return { profile, repos: formattedRepos };
};
