// @refresh reset
// https://next.chakra-ui.com/docs/features/text-and-layer-styles

// 2. Consume the text styles in your components
// function Example() {
//   return <Box layerStyle="selected">This is a box</Box>
// }

// 3. You can also switch layer styles
// function Example({ isSelected }) {
//   const layerStyle = isSelected ? "selected" : "base"
//   return <Box layerStyle={layerStyle}>This is a box</Box>
// }

const xl = { base: 16, lg: 24, xl: 40 };
const lg = { base: 10, lg: 16, xl: 24 };
const md = { base: 6, lg: 8, xl: 16 };
const rg = { base: 4, lg: 6, xl: 12 };
const sm = { base: 3, lg: 4, xl: 8 };

/* GAPS */
const gapXl = { base: 5, lg: 6, xl: 8 };
const gapLg = { base: 4, lg: 5, xl: 5 };
const gapRg = { base: 2, lg: 4, xl: 4 };
const gapSm = { base: 1, lg: 2, xl: 2 };

const navH = { base: "64px", lg: "88px" };

const layerStyles = {
  /* WHITESPACES: between sections */

  spaceXlY: {
    py: xl,
  },
  spaceXlT: {
    pt: xl,
  },
  spaceXlB: {
    pb: xl,
  },
  spaceLgY: {
    py: lg,
  },
  spaceLgB: {
    pb: lg,
  },
  spaceLgT: {
    pt: lg,
  },
  spaceMdY: {
    py: md,
  },
  spaceMdB: {
    pb: md,
  },
  spaceMdT: {
    pt: md,
  },
  spaceY: {
    py: rg,
  },
  spaceB: {
    pb: rg,
  },
  spaceT: {
    pt: rg,
  },
  spaceSmY: {
    py: sm,
  },
  spaceSmB: {
    pb: sm,
  },
  spaceSmT: {
    pt: sm,
  },
  spaceMarginMdY: {
    my: md,
  },
  spaceMarginMdB: {
    mb: md,
  },
  spaceMarginMdT: {
    mt: md,
  },
  spaceMarginSmY: {
    my: sm,
  },
  spaceMarginSmB: {
    mb: sm,
  },
  spaceMarginSmT: {
    mt: sm,
  },

  /* GAPS: whitespace between typographic & grid elements */

  gapXlY: {
    py: gapXl,
  },
  gapXlT: {
    pt: gapXl,
  },
  gapXlB: {
    pb: gapXl,
  },
  gapLgY: {
    py: gapLg,
  },
  gapLgT: {
    pt: gapLg,
  },
  gapLgB: {
    pb: gapLg,
  },
  gapY: {
    py: gapRg,
  },
  gapT: {
    pt: gapRg,
  },
  gapB: {
    pb: gapRg,
  },
  gapSmY: {
    py: gapSm,
  },
  gapSmT: {
    pt: gapSm,
  },
  gapSmB: {
    pb: gapSm,
  },
  gapInset: {
    p: { base: 8, lg: 12 },
  },
  gapInsetX: {
    px: { base: 8, lg: 12 },
  },
  gapInsetY: {
    py: { base: 8, lg: 12 },
  },
  gapGrid: {
    gap: { base: 8, lg: 12 },
  },

  gapMarginXlY: {
    my: gapXl,
  },
  gapMarginXlT: {
    mt: gapXl,
  },
  gapMarginXlB: {
    mb: gapXl,
  },
  gapMarginLgY: {
    my: gapLg,
  },
  gapMarginLgT: {
    mt: gapLg,
  },
  gapMarginLgB: {
    mb: gapLg,
  },
  gapMarginY: {
    my: gapRg,
  },
  gapMarginT: {
    mt: gapRg,
  },
  gapMarginB: {
    mb: gapRg,
  },
  gapMarginInset: {
    mx: { base: 8, lg: 12 },
  },
  gapMarginSmY: {
    my: gapSm,
  },
  gapMarginSmT: {
    mt: gapSm,
  },
  gapMarginSmB: {
    mb: gapSm,
  },

  /* NAVBAR HEIGHT */
  navHeight: {
    minH: navH,
  },
  mtNav: {
    top: navH,
  },

  /* CONTAINER INSET */
  containerInset: {
    px: { base: 8, lg: 12 },
  },

  /* OTHER */

  dividerIntro: {
    borderBottomColor: "black",
    borderBottomWidth: "2px",
    opacity: "100%",
  },
  dividerProductCard: {
    borderBottomColor: "blackAlpha.600",
    opacity: "100%",
  },
  base: {
    bg: "gray.50",
    border: "2px solid",
    borderColor: "gray.500",
  },
  selected: {
    bg: "teal.500",
    color: "teal.700",
    borderColor: "orange.500",
  },
  iconCircleSm: {
    width: "40px",
    height: "40px",
    border: "1px solid black",
  },
  iconCircleLg: {
    display: ["none", "", "flex"],
    width: "100px",
    height: "100px",
    marginTop: ["-50px"],
    marginBottom: ["-50px"],
    marginLeft: ["", "-100px"],
    border: "1px solid black",
    lineHeight: "0",
  },
  hr: {
    border: "none",
    height: "1px",
    backgroundColor: "black",
    marginRight: ["0", "0", "-100px"],
    marginBottom: ["25px", "25px", "0"],
  },
  listItemWithBorder: {
    display: "flex",
    alignItems: "center",
    borderBottomWidth: "1px",
    borderColor: "black",
    paddingTop: "6",
    paddingBottom: "6",
  },
};

export default layerStyles;
