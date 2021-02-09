import PRODUCT_VARIANT_FRAGMENT from "./ProductVariant";

export default `
  fragment CheckoutLineItemFragment on CheckoutLineItem {
    id
    title
    quantity
    variant {
      ...ProductVariantFragment
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`;
