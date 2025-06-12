import { githubClient } from '@/lib/github';
import { GET_PROFILE_AND_REPOS } from '@/lib/gitQuery';
import { GET_GITHUB_CONTRIBUTIONS } from '@/lib/gitContribQuery';
import { GitHubProfile } from '@/interfaces/githubprofile';

import { GithubContributionsResponse } from '@/interfaces/githubContrib';

const repoNames = ['airbnb-clone', 'water-analytics', 'dna-seq-explorer'];

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
      stargazersCount: repo.stargazers.totalCount,
      htmlUrl: repo.url,
      homepage: repo.homepageUrl,
      imageUrl: `/projects/${repo.name}.png`,
      topics: repo.repositoryTopics.nodes.map((node: any) => node.topic.name),
      tagName: repo.releases.nodes[0]?.tagName ?? null,
      publishedAt: repo.releases.nodes[0]?.publishedAt ?? null,
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

export const getGithubContributions = async () => {
  try {
    const query = GET_GITHUB_CONTRIBUTIONS();
    const response =
      await githubClient.request<GithubContributionsResponse>(query);

    return response.user.contributionsCollection.contributionCalendar.weeks;
  } catch (error) {
    console.error('Error fetching Github contributions', error);
    return;
  }
};
