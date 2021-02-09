// @refresh reset
// https://next.chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project

import { extendTheme } from "@chakra-ui/react";

// import shared from "cleared-shared";
import styles from "./styles";
import foundations from "./foundations/index";
import textStyles from "./textStyles";
import layerStyles from "./layerStyles";
import components from "./components/index";
// import Button from "./components/button";
// import Tabs from "./components/tabs";

const overrides = {
  // shared,
  styles,
  ...foundations,
  textStyles,
  layerStyles,
  components,
};

// export default extendTheme(shared.theme);
export default extendTheme(overrides);
