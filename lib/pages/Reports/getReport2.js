// using examples from https://www.datocms.com/docs/next-js
import { gql } from "graphql-request";
import {
  seoMetaTagsFieldsFragment,
  responsiveImageFragment,
} from "../../datoFragments";

export const getReportQuery = gql`
  query ReportBySlug($slug: String) {
    report(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        ...seoMetaTagsFields
      }
      title
      slug
      heroLede
      datePublished
      _firstPublishedAt
      _status
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
      stContent {
        value
        links {
          slug
          id
        }
        blocks {
          __typename
          ... on InsightBlockRecord {
            id
            insight {
              lede
              slug
              title
            }
          }
          ... on AsideBlockRecord {
            id
            text
            theme
          }
          ... on ImageBlockRecord {
            id
            image {
              url
              responsiveImage(
                imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
              ) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
    }
  }
  ${seoMetaTagsFieldsFragment}
  ${responsiveImageFragment}
`;
