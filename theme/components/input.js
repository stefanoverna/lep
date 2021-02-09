// @refresh reset
// https://next.chakra-ui.com/docs/theming/component-style
// https://next.chakra-ui.com/docs/form/input

// must be Sentence case
const Input = {
  baseStyle: {
    borderRadius: "2px",
    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
  },
  sizes: {
    sm: {
      fontSize: "12px",
      padding: "16px",
    },
    md: {
      size: "md",
      fontSize: "md",
      p: "15px 12px",
    },
  },
  variants: {
    // DOESN'T WORK despite working for Button, WTF?
    // Related? https://github.com/chakra-ui/chakra-ui/pull/1967
    register: (props) => ({
      h: "auto",
      bg: `${props.colorScheme}.200`,
      borderColor: `${props.colorScheme}.500`,
      focusBorderColor: `${props.colorScheme}.700`,
      errorBorderColor: "form.bad",
      _placeholder: {
        color: `${props.colorScheme}.700`,
      },
      _hover: {
        borderColor: `${props.colorScheme}.700`,
      },
      _active: {
        bg: "#dddfe2",
      },
      _focus: {
        padding: "35px 12px 15px",
        boxShadow:
          "rgba(162, 184, 171, .12) 0 0 0 4px, rgba(162, 184, 171, .08) 0 0 0 1px",
      },
    }),
  },
  // defaultProps: {
  //   size: "md",
  //   variant: "register",
  // },
};

export default Input;
