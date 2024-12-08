import { gql } from "@apollo/client";

export const GET_GITHUB_STATS = gql`
  query Stats($login: String!) @api(name: gitHub) {
    user(login: $login) {
      contributionsCollection {
        totalCommitContributions
      }
      repositoriesContributedTo(
        first: 1
        contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
      ) {
        totalCount
      }
      pullRequests(first: 1) {
        totalCount
      }
      openIssues: issues(states: OPEN) {
        totalCount
      }
      closedIssues: issues(states: CLOSED) {
        totalCount
      }
      repositories(
        first: 100
        orderBy: { direction: DESC, field: STARGAZERS }
        ownerAffiliations: OWNER
      ) {
        totalCount
        nodes {
          stargazers {
            totalCount
          }
          name
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;
