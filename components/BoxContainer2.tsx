import * as React from "react";
import { Container } from "@chakra-ui/react";

// px matches layerStyle="containerInset"
// we avoid using layerStyle here so we can use it via props on the component

const BoxContainer = ({
  isSection,
  maxW = "xl",
  children,
  boxProps,
}: BoxContainerProps) => (
  <Container
    as={isSection ? "section" : "div"}
    maxW={maxW}
    px={{ base: 6, lg: 12 }}
    {...boxProps}
  >
    {children}
  </Container>
);

interface BoxContainerProps {
  maxW?: string | string[] | Record<string, unknown>;
  isSection?: boolean;
  children: React.ReactNode;
  boxProps?: any;
}

export default BoxContainer;
