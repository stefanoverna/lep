/**
 * Collection of functions for interacting with the Shopify storefront API
 * Shopify storefront docs: https://help.shopify.com/en/api/storefront-api
 *
 * Functions in this file should only define an endpoint and and how to parse
 * the recieved data
 *
 * @module ApiShopify
 */

import { GraphQLClient, gql } from "graphql-request";
import config from "@/config";

const client = new GraphQLClient(config.shopifyUrl, {
  headers: {
    "X-Shopify-Storefront-Access-Token": config.shopifyStorefrontAccessToken,
  },
});

/**
 *
 * Requests
 *
 */

export async function getShopInfo() {
  const data = await client.request(gql`
    query ShopInfo {
      shop {
        name
      }
    }
  `);
  return data?.shop;
}

// Metafields have to be made public to the storefront API individually
// by making a request to the shopify admin API. A request template exists in postman.
// Shopfiy docs: https://shopify.dev/tutorials/retrieve-metafields-with-storefront-api
//
// Use onlineStoreUrl to check the product is published
// to the Online Store sales channel
//
// Products must be published to whichever store the apps storefront api key is
// tied to be fetched, and published to "Online Store" to appear on this sites store
// due to a manual filter on the front-end
export const productFragment = `
  fragment productFragment on Product {
    id
    title
    productType
    tags
    handle
    description
    onlineStoreUrl
    images(first: 1) {
      edges {
        node {
          altText
          originalSrc
          transformedSrc
        }
      }
    }
    variants(first: 5) {
      edges {
        node {
          id
          title
          price
        }
      }
    }
    brandName: metafield(namespace: "arena", key: "brand_name") {
      value
    }
    carepointFulfillment: metafield(namespace: "arena", key: "carepoint_fulfillment") {
      value
    }
    rxOnly: metafield(namespace: "arena", key: "rx_only") {
      value
    }
    rxPricing: metafield(namespace: "arena", key: "rx_pricing") {
      value
    }
  }
`;

export async function getProductTypes() {
  const data = await client.request(gql`
    query ProductTypes {
      productTypes(first: 5) {
        edges {
          node
        }
      }
    }
  `);
  return data?.productTypes.edges;
}

export async function getProducts() {
  const data = await client.request(gql`
    query Products {
      products(first: 50) {
        edges {
          node {
            ...productFragment
          }
        }
      }
    }
    ${productFragment}
  `);
  return data?.products.edges;
}

export async function getProduct(handle) {
  const data = await client.request(
    gql`
      query Product($handle: String!) {
        productByHandle(handle: $handle) {
          ...productFragment
        }
      }
      ${productFragment}
    `,
    {
      handle,
    }
  );
  return data?.productByHandle;
}

/**
 *
 * Checkout
 *
 */

export const CheckoutFragment = `
  fragment CheckoutFragment on Checkout {
    id
    completedAt
    webUrl
    totalTax
    currencyCode
    totalPrice
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          quantity
          variant {
            id
            title
            price
            image {
              src
            }
            product {
              handle
              productType
            }
          }
        }
      }
    }
  }
`;

export async function createCheckout() {
  const data = await client.request(
    gql`
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          userErrors {
            message
            field
          }
          checkout {
            ...CheckoutFragment
          }
        }
      }
      ${CheckoutFragment}
    `,
    { input: {} }
  );
  return data?.checkoutCreate.checkout;
}

export async function getCheckout(id) {
  const data = await client.request(
    gql`
      query getCheckout($id: ID!) {
        node(id: $id) {
          id
          ...CheckoutFragment
        }
      }
      ${CheckoutFragment}
    `,
    {
      id,
    }
  );
  return data?.node;
}

export async function setCheckoutLineItems({ checkoutId, lineItems }) {
  const data = await client.request(
    gql`
      mutation checkoutLineItemsReplace(
        $checkoutId: ID!
        $lineItems: [CheckoutLineItemInput!]!
      ) {
        checkoutLineItemsReplace(
          checkoutId: $checkoutId
          lineItems: $lineItems
        ) {
          userErrors {
            message
            field
          }
          checkout {
            ...CheckoutFragment
          }
        }
      }
      ${CheckoutFragment}
    `,
    {
      checkoutId,
      lineItems,
    }
  );
  return data?.checkoutLineItemsReplace.checkout;
}

export async function checkoutCustomerAssociate() {
  const data = await client.request(
    gql`
      mutation checkoutCustomerAssociateV2(
        $checkoutId: ID!
        $customerAccessToken: String!
      ) {
        checkoutCustomerAssociateV2(
          checkoutId: $checkoutId
          customerAccessToken: $customerAccessToken
        ) {
          checkout {
            id
          }
          checkoutUserErrors {
            code
            field
            message
          }
          customer {
            id
          }
        }
      }
    `
  );
  return data?.checkout;
}
