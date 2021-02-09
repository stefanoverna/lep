import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { CloseIcon } from "@chakra-ui/icons";

const MessageBar = ({
  bgColor = "peach.500",
  onDismiss,
  btnText = "Get Started",
  actionLink = "/shop",
  description,
}: MessageBarProps) => {
  return (
    <Flex
      align="center"
      bg={bgColor}
      justify="center"
      px={{ base: 4, lg: 6, xl: 12 }}
      py={{ base: 2, lg: 3 }}
    >
      <Box pr={3} pb="1px" ml="auto">
        <Text>
          <Text
            as="span"
            textStyle="textSm"
            fontWeight="700"
            sx={{
              "@media (max-width: 480px)": {
                fontSize: "11px",
              },
            }}
          >
            {description}{" "}
          </Text>
          <Link passHref href={actionLink}>
            <Text
              as="a"
              textStyle="textSm"
              fontWeight="bold"
              textDecoration="underline"
            >
              {btnText}
            </Text>
          </Link>
        </Text>
      </Box>
      <IconButton
        display="flex"
        aria-label="Close modal"
        variant="ghost"
        outline="none"
        top={0}
        right={0}
        px={0}
        h="1.75em"
        w="1.75em"
        minW="auto"
        fontSize="1rem"
        ml="auto"
        mr={{ lg: 2 }}
        _hover={{ bg: "white" }}
        _focus={{ boxShadow: "none" }}
        _active={{ bg: "thiel.50", outline: "none" }}
        onClick={() => onDismiss(true)}
        icon={<CloseIcon boxSize="0.75em" />}
      />
    </Flex>
  );
};

interface MessageBarProps {
  bgColor?: string;
  onDismiss?: (bool: boolean) => void;
  btnText?: string;
  description: string;
  actionLink: string;
}

export default MessageBar;
