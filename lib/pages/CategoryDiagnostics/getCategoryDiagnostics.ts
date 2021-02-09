/* eslint-disable import/prefer-default-export */
import { gql } from "graphql-request";
import { client, seoMetaTagsFieldsFragment } from "../../apiDato";

export async function getCategoryDiagnostics(): Promise<unknown> {
  const data = await client.request(
    gql`
      query categoryDiagnostic {
        categoryDiagnostic {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroPreheading
          heroHeading
          heroLede
          heroCtaLabel
          heroCtaLabelSecondary
          heroCtaLink
          heroCtaLinkSecondary
          heroImage {
            url
            responsiveImage(imgixParams: { w: 2000, q: 30, auto: format }) {
              alt
              src
              base64
            }
            focalPoint {
              x
              y
            }
          }
          diagnosticsSteps {
            icon {
              alt
              url
            }
            title
          }
          featureSubheading
          featureHeading
          featureLede
          featurePortalCtaLabel
          featureList {
            heading
            subheading
            image {
              alt
              url
              responsiveImage(imgixParams: { w: 700, q: 30, auto: format }) {
                alt
                src
                base64
              }
            }
          }
          infoTitle
          infoCtaLabel
          infoBlocks {
            title
            lede
            image {
              alt
              url
            }
          }
          featureBlockTitle
          featureBlockLede
          featureBlockImage {
            url
            alt
          }
          hiwHeading
          hiwSteps {
            id
            title
            lede
            image {
              responsiveImage {
                alt
                src
                base64
              }
            }
          }
          testimonialImage {
            responsiveImage {
              alt
              src
              base64
            }
          }
          testimonial {
            id
            heading
            name
            location
            quote
            image {
              responsiveImage {
                src
                alt
                base64
              }
            }
          }
          faqTitle
          faqList {
            id
            answer
            question
          }
          ctaSectionTitle
          ctaSectionLede
        }
      }
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.categoryDiagnostic;
}
