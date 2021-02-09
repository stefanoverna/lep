/* eslint-disable import/prefer-default-export */
import { gql } from "graphql-request";
import { client, seoMetaTagsFieldsFragment } from "../../apiDato";

export async function getReportBySlug(slug): Promise<unknown> {
  const data = await client.request(
    gql`
      query ReportBySlug($slug: String) {
        report(filter: {slug: {eq: $slug}}) {
          slug
        }
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          title
          slug
          heroLede
          content {
            ... on TextRecord {
              id
              text
              insightDisplayKind
              footnote
              footnoteImage {
                responsiveImage {
                  src
                }
              }
              insights {
                slug
                title
                lede
                id
                reports {
                  title
                  slug
                }
                sources {
                  title
                  slug
                  id
                }
                tags {
                  slug
                  name
                  id
                }
              }
            }
            ... on TitleRecord {
              id
              title
              level
            }
          }
        }
      }
      ${seoMetaTagsFieldsFragment}
    `,
    {
      variables: {
        slug,
      },
    }
  );
  return data?.report;
}
