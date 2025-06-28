export const GET_PROFILE_AND_REPOS = (repoNames: string[]) => `
  query {
    viewer {
      name
      login
      avatarUrl
      bio
      location
      publicRepos: repositories {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }

    ${repoNames
      .map(
        (repo, i) => `
      repo_${i}: repository(owner: "${process.env.NEXT_PUBLIC_GITHUB_USERNAME}", name: "${repo}") {
        id
        name
        description
        primaryLanguage {
          name
        }
        stargazers {
          totalCount
        }
        url
        homepageUrl
        repositoryTopics(first: 10) {
          nodes {
            topic {
              name
            }
          }
        }
        releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            tagName
            publishedAt
          }
        }
      }
    `,
      )
      .join('')}
  }
`;
