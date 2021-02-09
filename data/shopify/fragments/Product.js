import PRODUCT_VARIANT_FRAGMENT from "./ProductVariant";
import IMAGE_FRAGMENT from "./Image";

export default `
  fragment ProductFragment on Product {
    id
    title
    handle
    description
    options {
      id
      name
      values
    }
    shipping_interval_frequency: metafield(
      namespace: "subscriptions"
      key: "shipping_interval_frequency"
    ) {
      id
      value
      valueType
    }
    shipping_interval_unit_type: metafield(
      namespace: "subscriptions"
      key: "shipping_interval_unit_type"
    ) {
      id
      value
      valueType
    }
    defaultImageDisplayProperties: metafield(
      namespace: "image"
      key: "defaultImageDisplayProperties"
    ) {
      id
      value
      valueType
    }
    pdpMainDescriptionCopy: metafield(
      namespace: "pdpMain"
      key: "descriptionCopy"
    ) {
      id
      value
      valueType
    }
    pdpMainHeading: metafield(namespace: "pdpMain", key: "heading") {
      id
      value
      valueType
    }
    discountPercentage: metafield(
      namespace: "subscriptions"
      key: "discount_percentage"
    ) {
      id
      value
      valueType
    }
    quantityDescription: metafield(
      namespace: "pdpMain"
      key: "quantityDescription"
    ) {
      id
      value
      valueType
    }
    seoData: metafield(namespace: "seo", key: "seoData") {
      id
      value
      valueType
    }
    images(first: 10) {
      edges {
        node {
          ...ImageFragment
        }
      }
    }
    variants(first: 1) {
      edges {
        node {
          ...ProductVariantFragment
        }
      }
    }
  }
  ${IMAGE_FRAGMENT}
  ${PRODUCT_VARIANT_FRAGMENT}
`;
