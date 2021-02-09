// @refresh reset
// https://next.chakra-ui.com/docs/theming/component-style

// multipart component
// common modifier styles includes:
// * size
// * variant
// * colorScheme
// * colorMode (maybe later)

// name must be Sentence case
const FormControl = {
  parts: ["formcontrol", "formlabel", "input"],
  baseStyle: {
    formlabel: {
      transition: "all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
    },
    input: {
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s",
    },
  },
  sizes: {
    md: {
      formlabel: {
        m: 0,
      },
      input: {
        size: "md",
        fontSize: "md",
        borderRadius: "2px",
      },
    },
  },
  variants: {
    // register: (props) => ({
    register: {
      // relies on in-context active state CSS for translating
      formlabel: {
        pos: "absolute",
        left: 0,
        zIndex: 1,
      },
      input: {
        h: "auto",
        p: "15px 12px",
        bg: "thiel.500",
        borderColor: "thiel.700",
        color: "thiel.700",
        _placeholder: { color: "thiel.800" },
        _hover: { borderColor: "thiel.800" },
        _focus: {
          padding: "35px 12px 15px",
          boxShadow:
            "rgba(162, 184, 171, .24) 0 0 0 4px, rgba(162, 184, 171, .1) 0 0 0 1px",
        },
      },
    },
  },
  defaultProps: {
    // size: "md",
    // variant: "register",
    // box: {
    //   size: "md",
    //   variant: "register",
    // },
    // formlabel: {
    //   size: "md",
    //   variant: "register",
    // },
    // input: {
    //   size: "md",
    //   variant: "register",
    // },
  },
};

export default FormControl;
