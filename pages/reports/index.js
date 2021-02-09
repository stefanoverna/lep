import React, { useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { getProducts } from "@/lib/apiShopify";
import {
  getShopPage,
  getProductCategories,
  getAllergyCareCta,
} from "@/lib/apiDato";
import { Grid, Divider, Box, Flex, Text, Heading } from "@chakra-ui/react";
import LayoutDefault from "@/components/LayoutDefault";
import BoxContainer from "@/components/BoxContainer";
import HeroV1 from "@/components/HeroV1";
import NavAside from "@/components/NavAside";
import ProductCard from "@/components/ProductCard";
import SectionAllergyImageCta from "@/components/SectionAllergyImageCta";
import ReactMarkdown from "react-markdown";

const taglessProductsKey = "TAGLESS";

/**
 * @param {Object[]} products
 * @param {Object} products
 * @param {Object} products.* - keyed by product types
 * @param {Object[]} products.*.* - keyed by product tags
 *
 * Example:
 * ```
 *   productsByType: {
 *     "Daily Support": {
 *       "TAGLESS": [{ ... }, { ... }],
 *       "Antihistamines": [{ ... }],
 *     }
 *     "Relief": {
 *       "Herbal": [{ ... }],
 *     }
 *   }
 * ```
 */
function groupProductsByTypeAndTags(products) {
  const groupedProducts = products.reduce((obj, { node: product }) => {
    const type = product.productType;
    // All products should have a type, ignore those without
    if (!type) return obj;
    // By setting the tagless products key first it will be the
    // first key returned by Object.keys().
    // In the UI we want to show tagless products first.
    // eslint-disable-next-line no-param-reassign
    if (!obj[type]) obj[type] = { [taglessProductsKey]: [] };

    // Products are expected to have one tag but this supports multiple
    if (product.tags.length === 0 || product.tags.includes("homepage")) {
      obj[type][taglessProductsKey].push(product);
    } else {
      product.tags.forEach((tag) => {
        // eslint-disable-next-line no-param-reassign
        if (!obj[type][tag]) obj[type][tag] = [];
        obj[type][tag].push(product);
      });
    }

    return obj;
  }, {});

  // Remove any empty arrays of tagless products
  Object.keys(groupedProducts).forEach((type) => {
    if (groupedProducts[type][taglessProductsKey].length === 0) {
      delete groupedProducts[type][taglessProductsKey];
    }
  });

  return groupedProducts;
}

export const getStaticProps = async () => {
  const [products, page, productCategories, allergyCta] = await Promise.all([
    getProducts(),
    getShopPage(),
    getProductCategories(),
    getAllergyCareCta(),
  ]);
  // Only show products published to the "Online Store" sales channel in shopify
  const publishedProducts = products.filter(
    (product) => product.node.onlineStoreUrl
  );

  const productsByType = groupProductsByTypeAndTags(publishedProducts);

  return {
    props: {
      page,
      productsByType,
      productCategories,
      allergyCta: allergyCta.allergyCareCta,
    },
  };
};

const GridLayout = (props) => (
  <Grid
    templateColumns={{
      base: "repeat(1, 1fr)",
      lg: "repeat(12, 1fr)",
    }}
    gap={{ base: 8, lg: 12 }}
  >
    <Box gridColumn={{ base: "1/-1", lg: "span 3/span 3" }}>{props.nav}</Box>
    <Box gridColumn={{ base: "1/-1", lg: "4/13" }}>{props.children}</Box>
  </Grid>
);
GridLayout.propTypes = {
  nav: PropTypes.element.isRequired,
};

const HeroTitle = (props) => (
  <Flex pos="relative" h="full" align={{ base: "start", md: "center" }}>
    <BoxContainer as="section" layerStyle="spaceXlY">
      <Box
        w={{ base: "full", md: 15 / 24, lg: 16 / 24, xl: 1 / 2 }}
        bg="white"
        p={{ base: 8, lg: 12 }}
        rounded="2xl"
      >
        <Heading as="h1" textStyle="text4xl" layerStyle="spaceSmB">
          {props.title}
        </Heading>
        <Text as="div" textStyle="textLg" mt={-2}>
          <ReactMarkdown source={props.lede} />
        </Text>
      </Box>
    </BoxContainer>
  </Flex>
);
HeroTitle.propTypes = {
  title: PropTypes.string.isRequired,
  lede: PropTypes.string.isRequired,
};

const IntroBlock = (props) => (
  <Box layerStyle="spaceB">
    <Text
      as="h2"
      textStyle="text4xl"
      textTransform="uppercase"
      layerStyle="spaceSmB"
    >
      {props.heading}
    </Text>
    <Text as="div" textStyle="textXl" mt={-2}>
      <ReactMarkdown source={props.lede} />
    </Text>
  </Box>
);
IntroBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  lede: PropTypes.string.isRequired,
};

const SubcategoryHeader = (props) => (
  <Box layerStyle="spaceB">
    <Divider borderBottomColor="black" opacity="100%" />
    <Box layerStyle="gapLgT">
      <Text
        as="h3"
        textStyle="text2xl"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {props.title}
      </Text>
    </Box>
  </Box>
);
SubcategoryHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const ProductList = (props) => (
  <>
    {props.title && <SubcategoryHeader title={props.title} />}
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={{ base: 8, lg: 12 }}
      mb={24}
    >
      {props.products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          handle={product.handle}
          variantId={product.variants.edges[0].node.id}
          imageSrc={product.images.edges[0].node.transformedSrc}
          brandName={product.brandName?.value}
          rxOnly={product.rxOnly?.value}
          rxPricing={product.rxPricing?.value}
          carepointFulfillment={product.carepointFulfillment?.value}
          description={product.description}
          price={product.variants.edges[0].node.price}
        />
      ))}
    </Grid>
  </>
);
ProductList.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
ProductList.defaultProps = {
  title: null,
};

/*

  Shop page

*/

export default function ShopPage({
  preview,
  page,
  productsByType,
  allergyCta,
}) {
  // It's expected the first item is the top level all products view
  const navItems = useMemo(
    () => [
      "Shop All",
      ...page.productTypes.map((type) => type.shopifyProductType),
    ],
    [page.productTypes]
  );

  function productTypesForNavItem(item) {
    const activeItemIndex = navItems.indexOf(item);
    // "Shop All" or not found
    if (activeItemIndex === 0 || activeItemIndex === -1) {
      return page.productTypes;
    }
    // Minus one to account for added "Shop All" group
    return [page.productTypes[activeItemIndex - 1]];
  }

  const productListRef = useRef();
  const hash =
    process.browser && decodeURIComponent(window.location.hash.substring(1));
  const initialNavItem = navItems.indexOf(hash) !== -1 ? hash : navItems[0];
  const [activeNavItem, setActiveNavItem] = useState(initialNavItem);
  const [activeProductTypes, setActiveProductTypes] = useState(
    productTypesForNavItem(initialNavItem)
  );

  React.useEffect(() => {
    /*
     * Trigger scroll once active product types has state has updated
     * Otherwise there is an odd bug where the smooth scroll is cut short
     */
    productListRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [activeProductTypes]);

  function handleNavItemClick(selectedItem) {
    setActiveNavItem(selectedItem);
    setActiveProductTypes(productTypesForNavItem(selectedItem));
    window.location.hash = encodeURIComponent(selectedItem);
  }

  return (
    <LayoutDefault preview={preview}>
      <Head>{page && renderMetaTags(page.seo)}</Head>

      <HeroV1
        image={page.heroImage}
        bg="#f5d3c7"
        typography={
          <HeroTitle title={page.heroTitle} lede={page.heroSubheading} />
        }
      />

      <BoxContainer as="section" layerStyle="spaceXlY" ref={productListRef}>
        <GridLayout
          nav={
            <NavAside
              navItems={navItems}
              renderItem={(item) => (
                <NavAside.ShopAllItem
                  item={item}
                  activeGroup={activeNavItem}
                  onClick={handleNavItemClick}
                />
              )}
            />
          }
        >
          {activeProductTypes.map((type) => (
            <Box
              as="section"
              layerStyle="spaceLgB"
              _last={{ mb: 0 }}
              key={type.heading}
            >
              <IntroBlock heading={type.heading} lede={type.lede} />
              {Object.keys(productsByType[type.shopifyProductType] || {}).map(
                (tag) => (
                  <ProductList
                    key={tag}
                    title={tag === taglessProductsKey ? null : tag}
                    products={productsByType[type.shopifyProductType][tag]}
                  />
                )
              )}
            </Box>
          ))}
        </GridLayout>
      </BoxContainer>

      {/* ALLERGY CTA */}
      <SectionAllergyImageCta showLede showSteps image={allergyCta.image} />
    </LayoutDefault>
  );
}

ShopPage.propTypes = {
  preview: PropTypes.bool,
  page: PropTypes.objectOf(PropTypes.any).isRequired,
  allergyCta: PropTypes.objectOf(PropTypes.any).isRequired,
  productsByType: PropTypes.objectOf(PropTypes.object),
};

ShopPage.defaultProps = {
  preview: false,
  productsByType: [],
};
