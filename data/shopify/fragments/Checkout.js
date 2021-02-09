import CHECKOUT_LINE_ITEM_FRAGMENT from "./CheckoutLineItem";

export default `
  fragment CheckoutFragment on Checkout {
    webUrl
    id
    lineItems(first: 100) {
      edges {
        node {
          ...CheckoutLineItemFragment
        }
      }
    }
  }
  ${CHECKOUT_LINE_ITEM_FRAGMENT}
`;
