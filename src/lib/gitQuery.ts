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
      repo_${i}: repository(owner: "${process.env.GITHUB_USERNAME}", name: "${repo}") {
        id
        name
        description
        primaryLanguage {
          name
        }
        createdAt
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
      }
    `,
      )
      .join('')}
  }
`;
