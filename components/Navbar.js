// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  Center,
  Box,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ProfileIcon, CartIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import NavbarDrawer from "@/components/NavbarDrawer";
import config from "@/config";
import { open as openCart } from "@/store/cart";

const NavListPrimary = (props) => {
  const renderDrawers = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box {...props}>
      <NavbarDrawer index={0} label="Shop" />
      {renderDrawers ? (
        <>
          <NavbarDrawer index={1} label="Learn" />
          <NavbarDrawer index={2} label="Consult" />
        </>
      ) : null}
    </Box>
  );
};

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <Flex
      as="nav"
      px={{ base: 4, lg: 6, xl: 12 }}
      w="full"
      justify="space-between"
      align="center"
      borderBottom="1px"
      borderColor="blackAlpha.100"
      layerStyle="navHeight"
    >
      {/* PRIMARY NAV LIST */}
      <NavListPrimary w={1 / 3} />

      {/* LOGO */}
      <Center w={1 / 3}>
        {/* functional components as child of <Link/> causes ref warnings: https://github.com/vercel/next.js/issues/7915#issuecomment-591277902
        …so the Logo is wrapped by a span intentionally */}
        <Link href="/">
          <span>
            <Logo cursor="pointer" mt={-1} />
          </span>
        </Link>
      </Center>

      {/* PROFILE + CART BUTTONS */}
      <Flex w={1 / 3} justify="flex-end" align="center">
        <Button
          as="a"
          variant="navLink"
          rel="noopener noreferrer"
          href={`${config.portalUrl}/login`}
        >
          <ProfileIcon width="1.25em" height="1.25em" />
        </Button>

        <CartIcon
          mx={[1, 3]}
          cursor="pointer"
          width="1.25em"
          height="1.25em"
          onClick={() => dispatch(openCart())}
        />
      </Flex>
    </Flex>
  );
}
