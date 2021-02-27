import * as React from "react";
import { Grid, Box } from "@chakra-ui/react";

const GridArticle = ({ isArticle, children, aside, ...props }: Props) => (
  <Grid
    as={isArticle ? "article" : "section"}
    w="full"
    gap={10}
    templateColumns={{
      base: "repeat(1, minmax(0, 1fr))",
      lg: "repeat(12, minmax(0, 1fr))",
    }}
    {...props}
  >
    <Box gridColumn={{ base: "1/-1", lg: "3/7" }}>{children}</Box>
    <Box gridColumn={{ base: "1/-1", lg: "8/12" }}>{aside}</Box>
  </Grid>
);

interface Props {
  // maxW?: string | string[] | Record<string, unknown>;
  isArticle?: boolean;
  children: React.ReactNode;
  aside?: React.ReactNode;
  // boxProps?: any;
  // [x: string]: any;
}

export default GridArticle;
