import PropTypes from "prop-types";
import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavbarDrawerTabs from "@/components/NavbarDrawerTabs";

export default function NavbarDrawer({ index, label = "Learn" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const mobileButtonLabel = isOpen ? "Close" : "Menu";
  const renderLabel = useBreakpointValue({
    base: "Menu",
    lg: label,
  });

  return (
    <Box d="inline-block">
      <Button variant="navLink" onClick={onOpen}>
        {renderLabel}
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay bg="rgb(0,0,0,0.5)">
          <DrawerContent layerStyle="containerInset" maxW="xl" pos="relative">
            <Box
              layerStyle="navHeight"
              position="absolute"
              top={0}
              right={{ base: 5, md: 8 }}
            >
              <Flex h={{ base: "64px", lg: "88px" }} align="center">
                <DrawerCloseButton
                  position="relative"
                  top={0}
                  right={0}
                  h="3em"
                  w="3em"
                  fontSize="1rem"
                  mr={-3}
                  _hover={{ bg: "white" }}
                  _focus={{ boxShadow: "none" }}
                  _active={{ bg: "thiel.50", outline: "none" }}
                />
              </Flex>
            </Box>
            <NavbarDrawerTabs defaultIndex={index} />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

NavbarDrawer.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string,
};
