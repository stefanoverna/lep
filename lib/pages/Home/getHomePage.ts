/* eslint-disable import/prefer-default-export */
import { gql } from "graphql-request";
import { client, seoMetaTagsFieldsFragment } from "../../apiDato";

export async function getHomePage(): Promise<unknown> {
  const data = await client.request(
    gql`
      query homePage {
        homePage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
        }
        allReports {
          slug
          id
          title
        }
      }
      ${seoMetaTagsFieldsFragment}
    `
  );
  return {
    ...data?.homePage,
    allReports: data.allReports,
  };
}
