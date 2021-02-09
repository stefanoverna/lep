import * as React from "react";
import { Flex, Box } from "@chakra-ui/react";
import BoxContainer2 from "@/components/BoxContainer2";

const BlockBinary = ({
  bg = "peach.500",
  isHeaderTag,
  height = { base: "calc(100vh - 64px)", md: "500px", lg: "700px" },
  left,
  right,
  badge,
  ...props
}: BlockBinaryProps) => {
  return (
    <Flex
      as={isHeaderTag ? "header" : "section"}
      pos="relative"
      flexDirection={{ base: "column", lg: "row" }}
      h={height}
      bg={bg}
      {...props}
    >
      {/* BADGE */}
      {badge}

      {/* LEFT */}
      <BoxContainer2
        boxProps={{
          pos: "relative",
          zIndex: 1,
          h: { base: "360px", lg: "auto" },
        }}
      >
        <Flex
          w={{ lg: 1 / 2, xl: 5 / 12 }}
          pos="relative"
          h="full"
          align="center"
          justify={{ base: "center", lg: "flex-start" }}
        >
          {left}
        </Flex>
      </BoxContainer2>

      {/* RIGHT */}
      <Flex
        pos={{ base: "relative", lg: "absolute" }}
        inset={0}
        justify="flex-end"
        h={{ base: "360px", lg: "auto" }}
        w="full"
      >
        <Box
          pos={{ base: "absolute", lg: "relative" }}
          inset={0}
          w={{ lg: 1 / 2 }}
          bg={bg}
        >
          {right}
        </Box>
      </Flex>
    </Flex>
  );
};

interface BlockBinaryProps {
  isHeaderTag?: boolean;
  bg: string;
  height?: {
    base?: string;
    md?: string;
    lg?: string;
  };
  left?: React.ReactNode;
  right?: React.ReactNode;
  badge?: React.ReactNode;
}

export default BlockBinary;
