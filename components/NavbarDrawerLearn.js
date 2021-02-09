import PropTypes from "prop-types";
import Link from "next/link";
import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import DrawerHeader from "@/components/DrawerHeader";
import NavLink from "@/components/NavLink";
import config from "@/config";
import navLearn from "@/data/navLearn.json";

const ReplicateNavList = (props) => (
  <Box ml={-3}>
    <Button variant="navLink">
      <Link href="/shop">Shop</Link>
    </Button>
    <Button variant="navLink" onClick={props.onClick}>
      Learn
    </Button>
    <Button
      as="a"
      variant="navLink"
      rel="noopener noreferrer"
      href={`${config.portalUrl}/register`}
    >
      Consult
    </Button>
  </Box>
);
ReplicateNavList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/*

  NAVBAR LEARN DRAWER

*/

export default function NavbarDrawerLearn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box d="inline-block">
      <Button variant="navLink" onClick={onOpen}>
        Learn
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgb(0,0,0,0.5)">
          <DrawerContent layerStyle="containerInset" maxW="xl">
            <DrawerHeader heading={<ReplicateNavList onClick={onClose} />} />

            <DrawerBody layerStyle="spaceMdT" px={0} bg="white">
              <Box w={5 / 6}>
                <VStack
                  divider={<StackDivider borderColor="black" />}
                  spacing={4}
                  align="stretch"
                >
                  {navLearn.map((item) => (
                    <NavLink key={item.link} href={item.link}>
                      {item.label}
                    </NavLink>
                  ))}
                </VStack>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

// Navbar.propTypes = {
//   signedIn: PropTypes.bool,
//   onLogout: PropTypes.func,
// };
// Navbar.defaultProps = {
//   signedIn: false,
//   onLogout: () => {},
// };
