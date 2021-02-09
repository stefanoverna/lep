import { Box, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// eslint-disable-next-line import/prefer-default-export
export const CloseButton = (props) => (
  <Box
    pos="absolute"
    right={{ base: 3, md: 6, lg: 8, xl: 12 }}
    top={{ base: 2, xl: "1.25rem" }}
    rounded="lg"
    bg="white"
    _hover={{ bg: "mintcream.500" }}
  >
    <IconButton
      aria-label="Close modal"
      variant="ghost"
      outline="none"
      _focus={{ outline: "none" }}
      icon={<CloseIcon boxSize="1.25em" />}
      {...props}
    />
  </Box>
);
