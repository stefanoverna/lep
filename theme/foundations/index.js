// theme.js
import colors from "./colors";
import typography from "./typography";
import breakpoints from "./breakpoints";
import sizes from "./sizes";
import { spacing } from "./spacing";

const foundations = {
  colors,
  breakpoints,
  ...typography,
  sizes,
  space: spacing,
};

export default foundations;
