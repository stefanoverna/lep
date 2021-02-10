import { gql } from "graphql-request";
import { client, seoMetaTagsFieldsFragment } from "../../apiDato";

export async function getReportBySlug(slug, preview): Promise<unknown> {
  const data = await client.request(
    gql`
      query ReportBySlug($slug: String) {
        report(filter: { slug: { eq: $slug } }) {
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
                  alt
                  base64
                }
              }
              insights {
                id
                title
                slug
                lede
                reports {
                  id
                  title
                  slug
                }
                sources {
                  id
                  title
                  slug
                }
                tags {
                  id
                  name
                  slug
                }
              }
            }
            ... on TitleRecord {
              id
              title
              level
            }
            ... on ImageRecord {
              id
              credit
              image {
                responsiveImage {
                  src
                  alt
                  base64
                }
              }
            }
          }
        }
      }
      ${seoMetaTagsFieldsFragment}
    `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data;
}
