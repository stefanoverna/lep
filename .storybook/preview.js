import React from "react";
import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

export const parameters = {
  controls: { expanded: true },
};

addDecorator((storyFn) => (
  <ChakraProvider resetCSS theme={theme}>
    {storyFn()}
  </ChakraProvider>
));
