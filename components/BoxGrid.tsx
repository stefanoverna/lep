import React from "react";
import { SimpleGrid, Grid, VStack } from "@chakra-ui/react";

// GRIDS WITH CONSISTENT GAPS

// Both these grid components handle grid gap spacings only.
// We avoid setting columns or using layerStyle so we can use
// custom props as required in use.

// these gaps all match gapXl in theme/layerStyles:
// const gapXl = { base: 5, lg: 6, xl: 8 }

export const BoxSimpleGrid = ({ children, ...props }: BoxGridProps) => (
  // <SimpleGrid spacing={{ base: 6, lg: 10, xl: 16 }} {...props}>
  <SimpleGrid spacing={{ base: 6, lg: 8 }} {...props}>
    {children}
  </SimpleGrid>
);

export const BoxGrid = ({ children, ...props }: BoxGridProps) => (
  // <Grid gap={{ base: 6, md: 8, lg: 10, xl: 12 }} {...props}>
  <Grid gap={{ base: 6, lg: 8 }} {...props}>
    {children}
  </Grid>
);

export const BoxVStack = ({ children, ...props }: BoxGridProps) => (
  <VStack spacing={{ base: 6, lg: 8 }} {...props}>
    {children}
  </VStack>
);

export interface BoxGridProps {
  children: React.ReactNode;
  [x: string]: any;
}
