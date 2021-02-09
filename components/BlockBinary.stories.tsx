import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";
import BlockBinary from "@/components/BlockBinary";

// using https://picsum.photos/

export default {
  title: "BlockBinary",
  component: BlockBinary,
};

const HeyBox = ({ bg, children }) => (
  <Center h="full" w="full" bg={bg}>
    {children}
  </Center>
);

export const BlockBinaryTest = () => (
  <BlockBinary
    bg="#eee"
    height={{ base: "calc(100vh - 64px)", md: "500px" }}
    left={
      <HeyBox bg="rgba(0,0,0,0.1)">left for text (within container)</HeyBox>
    }
    right={
      <HeyBox bg="transparent">
        <Box pos="absolute" inset={0} overflow="hidden">
          <Image src="https://picsum.photos/800?random=1" fit="contain" />
        </Box>
        <Box pos="relative" color="white">
          right for image
        </Box>
      </HeyBox>
    }
  />
);
