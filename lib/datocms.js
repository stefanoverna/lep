// https://www.datocms.com/docs/next-js
import { GraphQLClient } from "graphql-request";

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATO_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
