// @refresh reset
// https://next.chakra-ui.com/docs/theming/component-style

// multipart component
// name must be Sentence case
const Tabs = {
  parts: ["tabs", "tablist", "tab", "tabpanel"],
  baseStyle: {
    tabs: {
      // bg: "uranianblue.500",
    },
    tablist: {
      borderBottomWidth: "1px",
      borderBottomColor: "blackAlpha.700",
    },
    tab: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  sizes: {
    sm: {
      tab: {
        fontSize: "rg",
        px: 2,
        py: 2,
      },
    },
    buttonMd: {
      tab: {},
    },
  },
  variants: {
    profile: {
      tab: {
        color: "black",
        _selected: {
          color: "uranianblue.500",
          borderBottom: "uranianblue.500",
        },
        _disabled: {
          color: "gray.500",
        },
      },
    },
    mainmenu: {
      tablist: {
        border: "initial",
        minH: { base: "64px", lg: "88px" },
      },
      tab: {
        color: "black",
        fontSize: "14px",
        // matches button size="md"
        mx: { base: "12px", md: "16px" },
        px: 0,
        py: 2,
        // can't do layerStyles?
        // layerStyle: "navHeight",
        _first: {
          ml: 0,
        },
        _selected: {
          borderBottom: "1px solid",
          borderColor: "black",
        },
        _focus: {
          boxShadow: "initial",
        },
      },
      // doesn't render anything?
      // tabpanels: {
      //   bg: "salmon",
      // },
      tabpanel: {
        // layerStyle: "spaceMdT",
        pt: { base: 6, lg: 8, xl: 16 },
        px: 0,
        pb: 0,
      },
    },
  },
  defaultProps: {
    tab: {
      size: "sm",
      variant: "profile",
    },
  },
};

export default Tabs;
