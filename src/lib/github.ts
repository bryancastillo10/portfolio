import { GraphQLClient } from 'graphql-request';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

export const githubClient = new GraphQLClient(GITHUB_GRAPHQL_API, {
  headers: {
    Authorization: `Bearer: ${process.env.GITHUB_TOKEN}`,
  },
});
