export default `
  fragment ProductVariantFragment on ProductVariant {
    id
    title
    ingredientsSectionData: metafield(
      namespace: "ingredientsSection"
      key: "ingredients"
    ) {
      id
      value
    }
    ingredientsSectionHeading: metafield(
      namespace: "ingredientsSection"
      key: "heading"
    ) {
      id
      value
    }
    ingredientsSectionCopy: metafield(
      namespace: "ingredientsSection"
      key: "copy"
    ) {
      id
      value
    }
    subscriptionPrice: metafield(
      namespace: "subscriptions"
      key: "discount_variant_price"
    ) {
      id
      value
    }
    image {
      id
      src
    }
    priceV2 {
      amount
      currencyCode
    }
  }
`;
