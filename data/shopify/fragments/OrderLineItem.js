import PRODUCT_VARIANT_FRAGMENT from "./ProductVariant";
import IMAGE_FRAGMENT from "./Image";

export default `
  fragment OrderLineItemFragment on OrderLineItem {
    title
    quantity

    variant {
      ...ProductVariantFragment
      product {
        defaultImageDisplayProperties: metafield(
          namespace: "image"
          key: "defaultImageDisplayProperties"
        ) {
          id
          value
        }
        images(first: 1) {
          edges {
            node {
              ...ImageFragment
            }
          }
        }
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
  ${IMAGE_FRAGMENT}
`;
