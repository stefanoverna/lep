import ORDER_LINE_ITEM_FRAGMENT from "./OrderLineItem";
import MAILING_ADDRESS_FRAGMENT from "./MailingAddress";

export default `
  fragment OrderFragment on Order {
    id
    orderNumber
    processedAt
    email
    subtotalPriceV2 {
      amount
      currencyCode
    }
    totalShippingPriceV2 {
      amount
      currencyCode
    }
    totalTaxV2 {
      amount
      currencyCode
    }
    totalRefundedV2 {
      amount
      currencyCode
    }
    totalPriceV2 {
      amount
      currencyCode
    }
    lineItems(first: 100) {
      edges {
        node {
          ...OrderLineItemFragment
        }
      }
    }
    shippingAddress {
      ...MailingAddressFragment
    }
  }
  ${ORDER_LINE_ITEM_FRAGMENT}
  ${MAILING_ADDRESS_FRAGMENT}
`;
