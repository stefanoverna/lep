# Cleared website

The Cleared website uses integations with:

- Shopify store (using the Storefront API)
- DatoCMS

…and is built with [Next.js](https://nextjs.org/learn).

## Local dev

Run local dev: `yarn dev`

An example .env file is provided.

## Staging and production environments

The live site is currently hosted on [Render](https://render.com/) because that's where the Portal is hosted (frontend, server and database). It's easy to comprehend all the ssystems in one place.

See: [getcleared.com](https://getcleared.com/)

The staging site is currently hosted on [Vercel](https://vercel.com/). This occurred by happenstance as I was experimenting with the Next > Vercel systems, and it works quite well. There's a case for moving production to Vercel, but will leave for now.

See: [cleared-website-git-dev.getcleared.vercel.app](https://cleared-website-git-dev.getcleared.vercel.app/)

We also get PR deploys from both Render and Vercel, which are useful to check before finalising pull requests.

## Shopify

We run a [development store](https://all-cleared-dev.myshopify.com/) as well as the [production store](https://getcleared.myshopify.com/). These stores correspond to the staging and production websites respectively.

These stores are assigned to the staging and production sites via environment variables.

To show a product on staging or production websites, you must select both the "Online Sales" _and_ the private app channel (currently called "live website" on production store and "cfd-2020-10" on the dev store). Learn more in our [Notion docs](https://www.notion.so/callum/Headless-Shopify-system-ee9e62454f334a64bfe70ac2cb29f249).

Ask Callum if you need access to these stores.
