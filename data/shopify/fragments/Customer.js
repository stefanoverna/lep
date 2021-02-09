import MAILING_ADDRESS_FRAGMENT from "./MailingAddress";
import ORDER_FRAGMENT from "./Order";

export default `
  fragment CustomerFragment on Customer {
    id
    firstName
    lastName
    email
    defaultAddress {
      ...MailingAddressFragment
    }
    addresses(first: 100) {
      edges {
        node {
          ...MailingAddressFragment
        }
      }
    }
    orders(first: 100, sortKey: PROCESSED_AT, reverse: true) {
      edges {
        node {
          ...OrderFragment
        }
      }
    }
  }
  ${MAILING_ADDRESS_FRAGMENT}
  ${ORDER_FRAGMENT}
`;
