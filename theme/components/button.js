// @refresh reset
// https://next.chakra-ui.com/docs/theming/component-style

// Common modifier styles includes:
// * Size: different sizes (e.g. small, medium, large)
// * Variant: different visual styles (e.g. outline, solid, ghost)
// * Color scheme: For a given variant, different color schemes
//    (e.g. an outline button with a red color scheme)
// * Color mode: change its visual styles based on color mode

// must be Sentence case
const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "full",
    cursor: "pointer",
    _hover: {
      textDecoration: "none",
    },
    _active: {
      outline: "none",
    },
    _focus: {
      outline: "none",
      boxShadow: "initial",
    },
    sx: {
      "a, & a": {
        color: "black",
        textDecoration: "none",
      },
    },
  },
  sizes: {
    sm: {
      fontSize: "14px",
      px: { base: "5px", md: "8px", lg: "16px" },
    },
    md: {
      h: "32px",
      px: { base: "5px", md: "8px", lg: "16px" },
      fontSize: "14px",
    },
    lg: {
      h: { base: "36px", md: "40px", xl: "44px" },
      px: { base: "16px", lg: "32px" },
      fontSize: "14px",
      fontWeight: "700",
    },
    xl: {
      h: { base: "44px", md: "48px", xl: "54px" },
      px: { base: "16px", lg: "32px" },
      fontSize: "14px",
      fontWeight: "700",
    },
  },
  variants: {
    primary: {
      color: "white",
      bg: "black",
    },
    outline: {
      color: "black",
      border: "1px solid black",
      // bg: "white",
    },
    accent: {
      color: "black",
      bg: "yellow.500",
      _hover: {
        bg: "yellow.900",
      },
    },
    thiel: {
      color: "black",
      bg: "thiel.500",
    },
    ghost: {
      color: "#000",
      textDecoration: "underline",
      textTransform: "inherit",
      _hover: {
        bg: "none",
      },
      _active: {
        bg: "none",
      },
    },
    slimGhost: {
      color: "#000",
      textDecoration: "underline",
      textTransform: "inherit",
      fontWeight: "300",
      px: 0,
    },
    link: {
      color: "#000",
      textDecoration: "underline",
      fontWeight: "500",
      textTransform: "none",
      px: 0,
      _hover: {
        textDecoration: "none",
      },
    },
    navLink: {
      color: "#000",
      textDecoration: "none",
      textTransform: "uppercase",
      borderRadius: "full",
      _hover: {
        bg: "none",
        textDecoration: "underline",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export default Button;
