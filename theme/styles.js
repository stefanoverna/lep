// @refresh reset

// import { theme, extendTheme, mode } from "@chakra-ui/react";
// import { merge } from "@chakra-ui/utils";
// import { extendTheme } from "@chakra-ui/react";
// import { mode } from "@chakra-ui/theme-tools";
// https://github.com/chakra-ui/chakra-ui/tree/develop/packages/theme/src

// const styles = merge(theme, {
const styles = {
  global: {
    body: {
      fontFamily: "body",
      bg: "white",
      color: "black",
      fontSize: "16px",
      lineHeight: "base",
      // transition: "background-color 0.2s",
    },
    "a:not(button)": {
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
      },
    },
    // "*::placeholder": {
    //   color: "gray.400",
    // },
    // "*, *::before, &::after": {
    // borderColor: "gray.200",
    // wordWrap: "break-word",
    // },
    // should work for any selector on a page but DOES NOT
    // https://github.com/chakra-ui/chakra-ui/issues/1561#issuecomment-671029136
    // "#__next": {
    //   backgroundColor: "pink",
    //   height: "100%",
    //   width: "100%",
    // },
    ".headroom--pinned": {
      backgroundColor: "white",
    },
    // active scrolledTo class in NavAside
    ".active": {
      fontWeight: "bold",
    },
    ".tertiary-nav a": {
      // py: "2",
      display: "block",
      ml: "4",
      mr: "4",
      py: "1",
      // whiteSpace: "nowrap",
    },
    ".tertiary-nav li": {
      borderRight: "1px solid black",
    },
    ".tertiary-nav li:nth-of-type(1) a": {
      ml: "0",
    },
    ".tertiary-nav li:last-child": {
      borderRight: "0",
    },
    ".tertiary-nav li:last-child a": {
      borderRight: "none",
      mr: "0",
    },
    ".how-it-works-steps": {
      counterReset: "counter",
    },
    ".how-it-works-steps li": {
      counterIncrement: "counter",
      position: "relative",
      paddingTop: ["25px", "", "61px"],
      paddingRight: ["0", "", "100px"],
      marginTop: ["25px", "45px", "45px"],
    },
    ".how-it-works-steps li:nth-of-type(even)": {
      marginLeft: ["0", "", "196px"],
    },
    ".how-it-works-steps li h3::before": {
      content: "counter(counter)",
      display: ["block"],
      fontSize: ["80px", "80px", "120px"],
      fontWeight: "300",
      lineHeight: ["60px", "60px", "86px"],
      marginBottom: ["4", "4", "0"],
      position: ["relative", "", "absolute"],
      width: ["auto", "auto", "100px"],
      bottom: ["auto", "auto", "4px"],
      right: ["auto", "auto", "-100px"],
    },
    /* MDX overrides */
    ".md-prose": {
      h1: {
        fontSize: ["36px"],
      },
      h2: {
        fontSize: ["27px"],
        lineHeight: 1.1,
      },
      h3: {
        fontSize: ["18px"],
      },
      "h2 + h3": {
        mt: [3],
      },
      "td + td": {
        pl: [3],
        borderLeft: "1px solid black",
      },
      "* + table": {
        pt: [5, 6],
      },
      "table + *": {
        pt: [5, 6],
      },
      "thead > tr": {
        border: "initial",
      },
      "tbody > tr:last-of-type": {
        borderColor: "black",
      },
      a: {
        textDecoration: "underline",
      },
    },
    ".prose": {
      "p + p": {
        mt: [5],
      },
    },
  },
};

export default styles;
