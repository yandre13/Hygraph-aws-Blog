import { GraphQLClient } from 'graphql-request'

export const gqlClient = (preview = false) =>
  new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL as string, {
    headers: {
      Authorization: `Bearer ${
        !preview
          ? process.env.NEXT_PUBLIC_GRAPHQL_TOKEN
          : process.env.NEXT_PUBLIC_GRAPHQL_TOKEN_DEV
      }`,
    },
  })
