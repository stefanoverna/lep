/**
 * Collection of functions for interacting with the the Dato CMS API
 *
 * Functions in this file should only define an endpoint and and how to parse
 * the recieved data
 *
 * @module ApiDato
 */

import { GraphQLClient, gql } from "graphql-request";
import config from "@/config";

export const client = new GraphQLClient(config.datoUrl, {
  headers: {
    Authorization: config.datoApiToken,
  },
});

/*
 *
 * Fragments
 *
 */

export const seoMetaTagsFieldsFragment = `
  fragment seoMetaTagsFields on Tag {
    attributes
    content
    tag
  }
`;

export const imageFields = `
  fragment imageFields on ResponsiveImage {
    aspectRatio
    base64
    bgColor
    height
    sizes
    src
    srcSet
    webpSrcSet
    width
    alt
    title
  }
`;

/**

  Pages

 */

// MISNAMED IN DATO: this is the Home Page!
export async function getIndexPage() {
  const data = await client.request(
    gql`
      query IndexPage {
        indexPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHeadline
          heroContent
          heroImage {
            responsiveImage(imgixParams: { w: 1250, q: 30, auto: format }) {
              ...imageFields
            }
          }
          products {
            id
            label
            linkHash
            learnMoreUrl
            image {
              responsiveImage(imgixParams: { w: 400, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          brands {
            logo {
              id
              responsiveImage(imgixParams: { h: 125, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          easyReliefHeading
          easyReliefSubheading
          steps {
            label
            description
            image {
              responsiveImage(imgixParams: { w: 640, q: 30, auto: format }) {
                alt
                ...imageFields
              }
            }
          }
          ourAlergistsHeading
          ourAlergistsDescription
          learnMoreAboutOurDoctorsUrl
          doctorsStats {
            text
          }
          personalizedAllergyContent
          personalizedAllergyHeading
          browseOurTreatmentUrl
          whatWeOffer {
            id
            whatWeOfferItemHeading
            whatWeOfferItemDescription
            careSubheading
            careList
            faqsLinkHash
            shopLinkHash
            whatWeOfferItemImage {
              responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          whatWeOfferHeading
          testimonialPersonLocation
          testimonialPerson
          testimonialHeading
          testimonialContent
          testimonialImage {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
          }
          ourMissionHeading
          ourMissionContent
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.indexPage;
}

// MISNAMED IN DATO: this is the AIT landing page!
export async function getHomePage() {
  const data = await client.request(
    gql`
      query HomePage {
        homePage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHeadline
          heroSubheadline
          heroHeadlineAlt
          heroSubheadlineAlt
          heroContent
          heroImage {
            responsiveImage(imgixParams: { w: 2000, h: 500, fit: crop }) {
              ...imageFields
            }
          }
          secondaryHeroContent
          secondaryHeroImage {
            responsiveImage(imgixParams: { w: 450, h: 450, fit: crop }) {
              ...imageFields
            }
          }
          howItWorksHeading
          howItWorks {
            heading
            content(markdown: true)
            color {
              hex
            }
          }
          ourAlergistsDescription
          ourAlergistsHeading
          ourAlergistsSubContent
          ourAlergistsImage {
            responsiveImage(imgixParams: { w: 500, h: 500, fit: crop }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.homePage;
}

export async function getFaqsPage() {
  const data = await client.request(
    gql`
      query faqsPage {
        faqsPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroTitle
          subheading
          heading
          lede
          heroImage {
            responsiveImage(imgixParams: { w: 1800, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );
  return {
    faqsPage: data?.faqsPage,
  };
}

export async function getShopPage() {
  const data = await client.request(
    gql`
      query shopPage {
        shopPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          slug
          heroTitle
          heroSubheading
          heroImage {
            responsiveImage(imgixParams: { w: 2000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          productTypes {
            heading
            lede
            shopifyProductType
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data.shopPage;
}

export async function getOurAllergistPage() {
  const data = await client.request(
    gql`
      query ourAllergistPage {
        ourAllergistPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHeadline
          heroSubheadline
          hero2 {
            responsiveImage(imgixParams: { w: 1500, q: 30, auto: format }) {
              ...imageFields
            }
          }
          secondHeroSectionImage {
            responsiveImage(imgixParams: { w: 763, h: 730, fit: crop }) {
              ...imageFields
            }
          }
          sectionTitle
          sectionTitleHint
          sectionDescription
          sectionImage {
            responsiveImage(imgixParams: { w: 900, q: 30, auto: format }) {
              ...imageFields
            }
          }
          sectionList {
            id
            itemtitle
            iconname
          }
          clientQuotesHeading
          allergistQuote {
            quoteContent
            quoteClient {
              name
              specialty
              portrait {
                responsiveImage(imgixParams: { w: 200, q: 30, auto: format }) {
                  ...imageFields
                }
              }
            }
          }
        }
        indexPage {
          ourAlergistsHeading
          ourAlergistsDescription
          learnMoreAboutOurDoctorsUrl
          doctorsStats {
            text
          }
        }
        allDoctors(filter: { showOnPublicWebsite: { eq: "true" } }) {
          id
          name
          specialty
          location
          portrait {
            responsiveImage(imgixParams: { w: 400, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
        allQuotes(filter: { quotePage: { eq: "our allergists" } }) {
          id
          quoteContent
          quoteClient {
            name
            specialty
            portrait {
              responsiveImage(imgixParams: { w: 200, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );
  return {
    ourAllergistPage: {
      ...(data?.ourAllergistPage ?? {}),
      ...(data?.indexPage ?? {}),
      allDoctors: data?.allDoctors,
    },
    quotes: data?.allQuotes,
  };
}

export async function getOurMissionPage() {
  const data = await client.request(
    gql`
      query OurMissionPage {
        ourMissionPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heading
          subheading
          ourMissionHeading
          ourMissionFirstContent(markdown: true)
          ourMissionSecondContent(markdown: true)
          ourMissionSubHeading
          testimonialContent
          testimonialPerson {
            name
            specialty
          }
          testimonialImage {
            responsiveImage(
              imgixParams: { w: 800, q: 30, auto: format, mask: ellipse }
            ) {
              ...imageFields
            }
          }
          joinTeamHero {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
          }
          heroimage {
            responsiveImage(imgixParams: { w: 800, q: 50, auto: format }) {
              ...imageFields
            }
          }
          didYouKnowTitle
          didYouKnowLinkLabel
          didYouKnowLink
          didYouKnowHint
          didYouKnowHeading
          didYouKnowContent
          didYouKnowImage {
            responsiveImage(imgixParams: { w: 1800, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
        ourAllergistPage {
          thirdHeroSectionImage {
            responsiveImage(imgixParams: { w: 1800, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
        allFounders {
          founderAllergies
          founderFullname
          founderPosition
          founderPortrait {
            responsiveImage(
              imgixParams: { w: 800, h: 800, fit: crop, mask: ellipse, fm: png }
            ) {
              ...imageFields
            }
          }
          id
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );

  return {
    ourMissionPage: {
      ...(data?.ourMissionPage ?? {}),
      ...(data?.ourAllergistPage ?? {}),
    },
    allFounders: data?.allFounders ?? {},
  };
}

export async function getHowItWorksPage() {
  const data = await client.request(
    gql`
      query howItWorksPage {
        howItWorksPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroContent
          heroHeading
          heroSubheading
          heroImage {
            responsiveImage(imgixParams: { w: 1600, q: 20, auto: format }) {
              ...imageFields
            }
          }
          infoBlock {
            subHeading
            infoBlockLinks
            infoBlockImage {
              responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
                ...imageFields
              }
            }
            heading
            content
          }
          step1Content
          step1Heading
          step1Subheading
          step1Image {
            responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          step2Content
          step2Heading
          step2Subheading
          step2Image {
            responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          step3Content
          step3Heading
          step3Subheading
          step3Image {
            responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );

  return {
    howItWorksPage: {
      ...(data?.howItWorksPage ?? {}),
      ...(data?.ourAllergistPage ?? {}),
    },
  };
}

export async function getImmunotherapyPage() {
  const data = await client.request(
    gql`
      query ImmunoTherapyPage {
        categoryImmunotherapy {
          immunotherapy_category_seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHint
          heroHeading
          heroContent(markdown: true)
          heroImage {
            responsiveImage(imgixParams: { w: 2000, q: 30, auto: format }) {
              ...imageFields
            }
            focalPoint {
              x
              y
            }
          }
          descriptionContent(markdown: true)
          descriptionHeading
          descriptionOfferings {
            immunotherapySubText
            immunotherapyStepTitle
            id
            immunotherapyStepImage {
              responsiveImage(
                imgixParams: {
                  w: 800
                  h: 800
                  fit: crop
                  mask: ellipse
                  fm: png
                }
              ) {
                ...imageFields
              }
            }
          }
          descriptionSubHeading
          howItWorksHeading
          howItWorksSteps {
            immunotherapyStepTitle
            immunotherapyStepContent
            id
            immunotherapyStepImage {
              responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          immunotherapyFaqSection
          productsHeading
          productsSectionDescription
          productsSectionSubText
          quotePeopleAreSaying {
            quoteContent
            quoteClient {
              name
              location
              id
            }
          }
          trialResult {
            trialResultText
            trialPercen
            id
          }
          trialResultHeading
          trialResultsSubText
          whatPeopleAreSayingImage {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
          }
          immunotherapyFaqGroup {
            name
          }
          immunoTherapyPageProducts {
            id
            shopifyProductSlug
            subheading
            descriptionFull
            images {
              responsiveImage {
                src
              }
            }
          }
        }
        ourAllergistPage {
          thirdHeroSectionImage {
            responsiveImage(imgixParams: { w: 1800, q: 30 }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );

  // Fetch faq from the specified group
  const faqs = await client.request(
    gql`
    query AllFaqsMatching {
      allFaqs(filter: {group: {matches: {pattern: "${data?.categoryImmunotherapy.immunotherapyFaqGroup.name}"}}}) {
        answer
        question
        id
      }
    }
    `
  );

  return {
    immunoTherapy: {
      faqs: faqs?.allFaqs,
      ...(data?.categoryImmunotherapy ?? {}),
      ...(data?.ourAllergistPage ?? {}),
    },
  };
}

export async function getReliefMedicationPage() {
  const data = await client.request(
    gql`
      query ReliefMedicationPage {
        categoryReliefMedication {
          immunotherapy_category_seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHint
          heroHeading
          heroContent(markdown: true)
          heroImage {
            responsiveImage(imgixParams: { w: 2000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          shippingHeading
          shippingSubheading
          shippingImage {
            responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          descriptionContent(markdown: true)
          descriptionHeading
          descriptionOfferings {
            id
            immunotherapySubText
            immunotherapyStepTitle
            immunotherapyStepImage {
              responsiveImage(imgixParams: { w: 400, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          categoryReliefMedicationsFaq
          descriptionSubHeading
          howItWorksHeading
          howItWorksSteps {
            id
            immunotherapyStepTitle
            immunotherapyStepContent(markdown: true)
            immunotherapyStepImage {
              responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          quotePeopleAreSaying {
            quotePage
            quoteContent(markdown: true)
            quoteClient {
              specialty
              showOnPublicWebsite
              portrait {
                responsiveImage {
                  src
                }
              }
              name
              locationWebsite
              location
            }
          }
          whatPeopleAreSayingHeading
          whatPeopleAreSayingImage {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
          }
          browseTreatmentLink
        }
        indexPage {
          doctorsStats {
            text
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );

  // Fetch faq from the specified group
  const faqs = await client.request(
    gql`
    query AllFaqsMatching {
      allFaqs(filter: {group: {matches: {pattern: "${data?.categoryReliefMedication.categoryReliefMedicationsFaq}"}}}) {
        answer
        question
        id
      }
    }
    `
  );

  return {
    reliefMedications: {
      faqs: faqs?.allFaqs,
      ...(data?.categoryReliefMedication ?? {}),
      doctorsStats: data.indexPage.doctorsStats,
    },
  };
}

export async function getAlkLandingPageV2() {
  const data = await client.request(
    gql`
      query page {
        alkLandingPageV2 {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heading
          lede
          heroImage {
            responsiveImage(imgixParams: { w: 1500, q: 30, auto: format }) {
              ...imageFields
            }
          }
          list {
            id
            text
          }
          learnMoreHint
          learnMoreLink
          learnMoreImage {
            responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          ourAllergistsImage {
            responsiveImage(imgixParams: { w: 1000, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.alkLandingPageV2;
}

/*

  Posts

*/

// paginate FAQs query from Dato
// https://www.webstoemp.com/blog/headless-cms-graphql-api-eleventy/
export async function getAllFaqs() {
  // max number of records to fetch per query
  const recordsPerQuery = 100;

  // number of records to skip (start at 0)
  let recordsToSkip = 0;

  // do we make a query?
  let makeNewQuery = true;

  // Blogposts array
  let faqs = [];

  // make queries until makeNewQuery is set to false
  while (makeNewQuery) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const data = await client.request(
        gql`
          {
            allFaqs(
              first: ${recordsPerQuery},
              skip: ${recordsToSkip},
              orderBy: group_ASC,
              filter: {
                _status: {eq: published}
              }
            ) {
              id
              question
              groupBy {
                name
              }
              answer
            }
          }
        `
      );

      // update blogpost array with the data from the JSON response
      faqs = faqs.concat(data.allFaqs);

      // prepare for next query
      recordsToSkip += recordsPerQuery;

      // stop querying if we are getting back less than recordsPerQuery
      if (data.allFaqs.length < recordsPerQuery) {
        makeNewQuery = false;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return faqs;
}

export async function getDoctors() {
  const data = await client.request(
    gql`
      query allDoctors {
        allDoctors(filter: { showOnPublicWebsite: { eq: "true" } }) {
          id
          name
          charmId
          specialty
          location
          bio
          portrait {
            responsiveImage(imgixParams: { w: 400, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return data?.allDoctors;
}

export async function getProductCategories() {
  const data = await client.request(
    gql`
      query allProductCategories {
        allProductCategories {
          heading
          id
          lede
          shopifyProductType
        }
      }
    `
  );
  return data?.allProductCategories;
}

/*

  DatoCMS simple markdown pages

*/

export async function getPrivacyPage() {
  const data = await client.request(
    gql`
      query privacyPage {
        privacyPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          title
          text
        }
      }
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.privacyPage;
}

export async function getTermsPage() {
  const data = await client.request(
    gql`
      query termsPage {
        termsPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          title
          text
        }
      }
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.termsPage;
}

export async function getTelehealthPage() {
  const data = await client.request(
    gql`
      query telehealthPage {
        telehealthPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          title
          text
        }
      }
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.telehealthPage;
}

export async function getReturnsPage() {
  const data = await client.request(
    gql`
      query returnsPage {
        returnsPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          title
          text
        }
      }
      ${seoMetaTagsFieldsFragment}
    `
  );
  return data?.returnsPage;
}

/**
 *
 * Products
 *
 */

// Used during product page generation to check product data exists in Dato
export async function getProducts() {
  const data = await client.request(gql`
    query products {
      allProducts {
        shopifyProductSlug
      }
    }
  `);
  return data?.allProducts;
}

export async function getProduct(shopifySlug) {
  const data = await client.request(
    gql`
    query product {
      product(filter: { shopifyProductSlug: { eq: "${shopifySlug}" } }) {
        id
        images {
          url
          alt
        }
        subheading
        descriptionFull
        productProperties {
          title
          content
        }
        dailyBenefits {
          icon {
            url
            alt
          }
          content
        }
        whatsInside {
          item
        }
        ingredientsLede
        ingredients {
          name
          lede
          description
        }
        howItWorksSubheading
        howItWorksContent
        howItWorksRegularity
        cards {
          heading
          content
        }
        faq {
          heading
          content
        }
        relatedProducts {
          id
        }
      }
    }
    `
  );
  return data.product;
}

/*

  Components

*/

export async function getAllergyCareCta() {
  const data = await client.request(
    gql`
      query componentAllergyCareCta {
        componentAllergyCareCta {
          heading
          subheading
          image {
            responsiveImage(imgixParams: { w: 1250, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return {
    allergyCareCta: data?.componentAllergyCareCta,
  };
}

export async function getAllergistsCta() {
  const data = await client.request(
    gql`
      query componentAllergistsCta {
        componentAllergistsCta {
          heading
          subheading
          image {
            responsiveImage(imgixParams: { w: 1250, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return {
    allergistsCta: data?.componentAllergistsCta,
  };
}

export async function getReliefStepsCta() {
  const data = await client.request(
    gql`
      query componentReliefStepsCta {
        componentReliefStepsCta {
          heading
          subheading
          steps {
            label
            description
            image {
              responsiveImage(
                imgixParams: { w: 640, h: 600, q: 30, auto: format }
              ) {
                alt
                ...imageFields
              }
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return {
    reliefStepsCta: data?.componentReliefStepsCta,
  };
}

export async function getManufacturingCta() {
  const data = await client.request(
    gql`
      query manufacturingSectionCta {
        sectionManufacturing {
          heading
          lede
          image {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return {
    sectionManufacturing: data?.sectionManufacturing,
  };
}

export async function getReliefPricingCta() {
  const data = await client.request(
    gql`
      query reliefPricingCard {
        componentReliefPricingCard {
          heading
          content(markdown: true)
          browseLink
          pricingCard {
            highlight
            subHeading
            pricingText
            price
            id
            heading
            content(markdown: true)
          }
        }
      }
    `
  );
  return {
    componentReliefPricingCard: data?.componentReliefPricingCard,
  };
}

export async function getReliefSlidesCta() {
  const data = await client.request(
    gql`
      query reliefSlides {
        componentReliefSlider {
          heading
          browseLink
          slides {
            id
            heading
            content(markdown: true)
            image {
              responsiveImage(imgixParams: { w: 1800, q: 20, auto: format }) {
                ...imageFields
              }
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return data?.componentReliefSlider;
}

export async function getSectionQuestionsCta() {
  const data = await client.request(
    gql`
      query section {
        sectionQuestionsCta {
          heading
          lede
          image {
            responsiveImage(imgixParams: { w: 1800, q: 20, auto: format }) {
              ...imageFields
            }
          }
        }
      }
      ${imageFields}
    `
  );
  return data?.sectionQuestionsCta;
}

export async function getSectionAlkLandingV2How() {
  const data = await client.request(
    gql`
      query how {
        sectionAlkLandingV2How {
          steps {
            title
            stepImage {
              responsiveImage(imgixParams: { w: 400, q: 30, auto: format }) {
                ...imageFields
              }
            }
            content
            id
          }
          footerText
        }
      }
      ${imageFields}
    `
  );
  return data?.sectionAlkLandingV2How;
}

export async function getOurApproachPage() {
  const data = await client.request(
    gql`
      query ourApproach {
        ourApproachPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHeadline
          heroSubheadline
          heroImage {
            alt
            url
            responsiveImage(imgixParams: { w: 2000, q: 30, auto: format }) {
              ...imageFields
            }
            focalPoint {
              x
              y
            }
          }
          heroImageMobile {
            alt
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
            focalPoint {
              x
              y
            }
          }
          descriptionSubheading
          descriptionHeading
          descriptionLede
          descriptionSteps {
            title
            subtitle
            image {
              url
              alt
              responsiveImage(imgixParams: { w: 700, q: 30, auto: format }) {
                ...imageFields
              }
            }
          }
          infoBlocksList {
            ... on OapprInfoBlockRecord {
              modelApiKey: _modelApiKey
              title
              description
              ctaTitle
              cta1IsPortalButton
              cta1Label
              cta1Link
              cta2Label
              cta2Link
              cta2AsHypertext
              image {
                url
                responsiveImage(imgixParams: { w: 1200, q: 30, auto: format }) {
                  ...imageFields
                }
              }
            }
            ... on OapprInfoListBlockRecord {
              modelApiKey: _modelApiKey
              title
              description
              featureList
              usePortalButton
              ctaTitle
              ctaLabel
              ctaLink
              image {
                url
                responsiveImage(imgixParams: { w: 1200, q: 30, auto: format }) {
                  ...imageFields
                }
              }
            }
          }
        }
      }
      ${seoMetaTagsFieldsFragment}
      ${imageFields}
    `
  );
  return data?.ourApproachPage;
}
export async function getForAllergistsPage() {
  const data = await client.request(
    gql`
      query ourApproach {
        forAllergistPage {
          seo: _seoMetaTags {
            ...seoMetaTagsFields
          }
          heroHeadline
          heroSubheadline
          heroCtaLabel
          heroCtaLink
          heroImage {
            responsiveImage(imgixParams: { w: 2000, q: 30, auto: format }) {
              ...imageFields
            }
          }
          heroImageMobile {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              ...imageFields
            }
          }
          infoSubheading
          infoHeading
          infoDescription
          infoCtaLink
          infoCtaLabel
          infoSectionList {
            label
            icon {
              url
              alt
            }
          }
          learnMoreList {
            heading
            subheading
            description
            ctaLabel
            ctaLink
            image {
              alt
              url
            }
          }
          allergistTitle
          allergistName
          allergistOccupation
          allergistQuote
          allergistProfileImage {
            url
            responsiveImage(imgixParams: { w: 200, q: 30, auto: format }) {
              ...imageFields
            }
          }
          allergistQuote2 {
            quoteContent
            quoteClient {
              name
              location
              specialty
              portrait {
                responsiveImage(imgixParams: { w: 200, q: 30, auto: format }) {
                  ...imageFields
                }
              }
            }
          }
          joinHeading
          joinLede
          joinImage {
            responsiveImage {
              src
              alt
              base64
              bgColor
              title
            }
          }
          questionsTitle
          questionsLede(markdown: false)
          questionsImage {
            responsiveImage {
              src
              alt
              base64
            }
          }
        }
      }
      ${seoMetaTagsFieldsFragment}
      ${imageFields}
    `
  );
  return data?.forAllergistPage;
}
