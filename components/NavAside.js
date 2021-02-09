import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function NavAside({ navItems, renderItem }) {
  return (
    <Box
      as="nav"
      transition="all 750ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
      pos={{ base: "relative", lg: "sticky" }}
      top={0}
      pt={4}
      mt={-4}
      h="1%"
      maxW={{ sm: "200px", xl: "282px" }}
    >
      <Text as="ul" listStyleType="none">
        {navItems.map((item) => (
          <Text
            as="li"
            key={item}
            textStyle="textBody"
            py={2}
            borderBottom="1px"
            borderBottomColor="black"
          >
            {renderItem(item)}
          </Text>
        ))}
      </Text>
    </Box>
  );
}

NavAside.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderItem: PropTypes.func.isRequired,
};

NavAside.ShopAllItem = function NavAsideShopAll(props) {
  return (
    <Button
      variant="link"
      size="md"
      w="full"
      justifyContent="flex-start"
      textDecoration="none"
      cursor="pointer"
      className={props.item === props.activeGroup ? "active" : ""}
      sx={{
        "&.active": {
          fontWeight: "700",
        },
      }}
      onClick={() => props.onClick(props.item)}
    >
      {props.item}
    </Button>
  );
};
NavAside.ShopAllItem.propTypes = {
  item: PropTypes.string.isRequired,
  activeGroup: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

NavAside.FAQItem = function NavAsideFAQItem(props) {
  return (
    <Link
      activeClass="active"
      spy
      smooth
      offset={-70}
      duration={500}
      style={{ cursor: "pointer" }}
      to={`${props.item
        .toLowerCase()
        .replace(/& /g, "")
        .replace(/\/ /g, "")
        .replace(/ /g, "-")
        .replace(/,/g, "")}`}
    >
      {props.item}
    </Link>
  );
};
NavAside.FAQItem.propTypes = {
  item: PropTypes.string.isRequired,
};
