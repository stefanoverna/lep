/*
 * Configuration file
 * For application wide access to environment variables and shared site data
 *
 * Sensitive data should be stored in a .env file
 */

export default {
  PROD: process.env.NODE_ENV === "production",

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  datoUrl: "https://graphql.datocms.com",
  datoApiToken: process.env.NEXT_DATO_API_TOKEN,
  gtmId: process.env.NEXT_PUBLIC_GTM_TRACKING_ID,
  fbPixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
};
