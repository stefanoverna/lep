// theme.js
import colors from "./colors";
import typography from "./typography";
import breakpoints from "./breakpoints";

const foundations = {
  colors,
  breakpoints,
  ...typography,
};

export default foundations;
