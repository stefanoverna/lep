/* Fragments */

export const seoMetaTagsFieldsFragment = `
  fragment seoMetaTagsFields on Tag {
    attributes
    content
    tag
  }
`;

export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    aspectRatio
    base64
    bgColor
    height
    sizes
    src
    srcSet
    webpSrcSet
    width
    alt
    title
  }
`;
