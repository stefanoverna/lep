import * as React from "react";
import { Grid, Box } from "@chakra-ui/react";

const GridArticle = ({ isSection, article, aside, ...props }: Props) => (
  <Grid
    as={isSection ? "section" : "div"}
    gap={10}
    templateColumns={{
      base: "repeat(1, minmax(0, 1fr))",
      lg: "repeat(12, minmax(0, 1fr))",
    }}
    {...props}
  >
    <Box gridColumn={{ base: "1/-1", lg: "span 3/span 3" }}>{article}</Box>
    <Box gridColumn={{ base: "1/-1", lg: "5/13" }}>{aside}</Box>
  </Grid>
);

interface Props {
  // maxW?: string | string[] | Record<string, unknown>;
  isSection?: boolean;
  article: React.ReactNode;
  aside: React.ReactNode;
  // boxProps?: any;
  // [x: string]: any;
}

export default GridArticle;
