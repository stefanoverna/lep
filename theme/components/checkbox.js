// @refresh reset
// https://next.chakra-ui.com/docs/theming/component-style

// single component
// common modifier styles includes:
// * size
// * variant
// * colorScheme
// * colorMode (maybe later)

// must be Sentence case
// https://next.chakra-ui.com/docs/form/checkbox
const Checkbox = {
  // baseStyle: {
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  // },
  sizes: {
    sm: {
      fontSize: "12px",
      padding: "16px",
    },
  },
  variants: {
    circle: (props) => ({
      borderRadius: "full",
      bg: `${props.colorScheme}.500`,
      p: 16,
    }),
  },
  // defaultProps: {
  //   size: "md",
  //   variant: "outline",
  // },
};

export default Checkbox;
