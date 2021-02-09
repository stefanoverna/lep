// import PropTypes from "prop-types";
import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import NavLink from "@/components/NavLink";
import config from "@/config";
import navLearn from "@/data/navLearn.json";

export default function NavbarMobileList(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...props}>
      <Button
        variant="capsule"
        style={{ textDecoration: "none" }}
        onClick={onOpen}
      >
        {isOpen ? "Close" : "Menu"}
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay bg="transparent">
          <DrawerContent mt={{ base: "64px", lg: "88px" }} maxW="auto">
            {/* <DrawerHeader layerStyle="navHeight">
              <DrawerCloseButton
                bg="white"
                _hover={{ bg: "white" }}
                _focus={{ boxShadow: "none" }}
                _active={{ bg: "thiel.50", outline: "none" }}
                left={["12px", "12px", "24px"]}
                right="auto"
              />
            </DrawerHeader> */}

            {/* don't use BoxContainer, match navbar by eye */}
            <Box bg="white" px={5} pt={6} mb={12}>
              <VStack
                divider={<StackDivider borderColor="black" />}
                spacing={4}
                align="stretch"
              >
                <NavLink href="/shop">Shop</NavLink>
                {navLearn.map((item) => (
                  <NavLink key={item.link} href={item.link}>
                    {item.label}
                  </NavLink>
                ))}
                <NavLink href={`${config.portalUrl}/register`}>Consult</NavLink>
              </VStack>
            </Box>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
