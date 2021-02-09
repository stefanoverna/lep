import React from "react";
import { useDispatch } from "react-redux";
import { Divider, Box, Text, Heading, Flex, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ClButton } from "@/components/Button";
import ButtonToPortal from "@/components/ButtonToPortal";
import MediaImage from "@/components/MediaImage";
import { addItem as addItemToCart, open as openCart } from "@/store/cart";

const Dropdown = ({ items }) => (
  <Select borderColor="black" rounded="full" pt="3px" textStyle="textSmMeta">
    {items.map((item) => {
      return (
        <Text
          disabled={item.disabled}
          as="option"
          key={item.id}
          value={item.value}
          textTransform="uppercase"
        >
          {item.text}
        </Text>
      );
    })}
  </Select>
);

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default function ProductCard({
  imageSrc,
  title,
  brandName,
  description,
  variantId,
  price,
  rxOnly,
  rxPricing,
}) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItemToCart(variantId));
    dispatch(openCart());
  };

  return (
    <Flex direction="column">
      {/* PRODUCT PAGES COMING SOON… */}
      {/* <Link href={`/shop/${handle}`}> */}
      <MediaImage src={imageSrc} rounded="3xl" />

      <Flex
        direction="column"
        h="full"
        justify="space-between"
        layerStyle="gapT"
      >
        {/* manage heading & description block heights @lg */}
        {/* <Box minH={{ lg: "8.25em" }}> */}
        <Box>
          <Text
            as="h5"
            textStyle="textLg"
            textTransform="uppercase"
            fontWeight="bold"
            lineHeight="1.1"
            pb="1px"
          >
            {title}
          </Text>

          {brandName && (
            <Text as="p" textStyle="textBody" pb="2px">
              {brandName}
            </Text>
          )}
          <Divider layerStyle="dividerProductCard" my={2} />
          <Text as="div" textStyle="textSm">
            {description}
          </Text>
          <Divider layerStyle="dividerProductCard" my={2} />
        </Box>

        {/* THIS LAYOUT TURNED OFF UNTIL WE HAVE SUBSCRIPTIONS */}
        {/* <Flex justify="space-between" align="flex-end" pt="1px" mb={2}>
          <Text
            as="p"
            textStyle="textXs"
            fontWeight="bold"
            w={1 / 2}
            opacity={0}
          >
            Choose a plan:
          </Text>
          <Text
            as="p"
            textStyle="textXs"
            fontWeight="bold"
            color="crayola.500"
            lineHeight="1.3"
            textAlign="right"
            w={1 / 2}
          >
            Save 16%
            <br />+ Free Shipping
          </Text>
        </Flex> */}

        {/* price & cta buttons at base of cell */}
        <Box mt={2}>
          {/* rxOnly is a Shopify metafields string */}
          {/* if rxOnly (Prescription only), show Rx pricing  */}
          {rxOnly === "true" ? (
            <Box>
              <Text
                textStyle="textSm"
                fontWeight="700"
                lineHeight="shorter"
                pb={1}
              >
                {rxPricing}
              </Text>
            </Box>
          ) : (
            <Box mx={-1}>
              {/* <Dropdown items={dropdownItems} /> */}
              <Flex
                rounded="full"
                w="full"
                border="1px"
                borderColor="black"
                justify="center"
              >
                <Heading
                  as="span"
                  textStyle="textButton"
                  textTransform="uppercase"
                  lineHeight="2.5rem"
                >
                  Single purchase: ${price}
                </Heading>
              </Flex>
            </Box>
          )}

          {/* CTA BUTTON */}
          <Box mx={-1} mt={3}>
            {/* `carepointFulfillment` is a Shopify metafields string
              —until Carepoint fulfillment is configured, we need to disallow a product on Shopify Checkout
              —later we'll replace this with rx_only
            */}
            {rxOnly === "true" ? (
              <ButtonToPortal
                size="lg"
                w="full"
                buttonText="Start online visit"
              />
            ) : (
              <ClButton variant="accent" size="lg" w="full" onClick={addToCart}>
                Add to cart
              </ClButton>
            )}
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

ProductCard.propTypes = {
  variantId: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  brandName: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  rxOnly: PropTypes.string,
  rxPricing: PropTypes.string,
};

ProductCard.defaultProps = {
  imageSrc: "/images/product-test-image.jpg",
  title: "",
  brandName: "",
  description: "",
  price: "",
  rxOnly: null,
  rxPricing: "Rx pricing goes here…",
};
