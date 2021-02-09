/* eslint-disable import/prefer-default-export */
import { gql } from "graphql-request";
import { client } from "../../apiDato";

export async function getAllReportsWithSlug(): Promise<unknown> {
  const data = await client.request(
    gql`
      query allReports {
        allReports {
          slug
        }
      }
    `
  );
  return data?.allReports;
}

export interface AllReportsData {
  allReports: Array<{
    slug: string;
  }>;
}
