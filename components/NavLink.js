import PropTypes from "prop-types";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

export default function NavLink(props) {
  return (
    <Link passHref href={props.href}>
      <Text
        as="a"
        d="block"
        textStyle="textMd"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {props.children}
      </Text>
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
};
