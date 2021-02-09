import PropTypes from "prop-types";
import { Flex, DrawerCloseButton } from "@chakra-ui/react";

export default function DrawerHeader(props) {
  return (
    <Flex layerStyle="navHeight" align="center" justify="space-between">
      {props.heading}

      <Flex h="full" align="center">
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
    </Flex>
  );
}

DrawerHeader.propTypes = {
  heading: PropTypes.node.isRequired,
};
