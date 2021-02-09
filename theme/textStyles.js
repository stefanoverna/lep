// @refresh reset
// https://next.chakra-ui.com/docs/features/text-and-layer-styles

// Properties defined in a text style
// * Font family, weight, and size
// * Line height
// * Letter spacing
// * Text decoration (strikethrough and underline)
// * Text transform (uppercase, lowercase, and capitalization)

// NB. the uppercase style only works when the component is `Heading`

const textStyles = {
  text6xl: {
    fontSize: { base: "38px", md: "48px", lg: "54px", xxl: "64px" },
    fontWeight: "300",
    lineHeight: "none",
    letterSpacing: "-0.025em",
  },
  text5xl: {
    fontSize: { base: "32px", md: "40px", lg: "44px", xl: "54px" },
    fontWeight: "700",
    lineHeight: "title",
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
  },
  text4xl: {
    fontSize: { base: "28px", md: "30px", lg: "36px", xl: "42px" },
    fontWeight: "700",
    lineHeight: "title",
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
  },
  text3xl: {
    fontSize: { base: "22px", lg: "30px", xl: "34px" },
    fontWeight: "700",
    lineHeight: "shortest",
    letterSpacing: "-0.01em",
    textTransform: "uppercase",
  },
  text2xl: {
    fontSize: { base: "18px", sm: "20px", lg: "21px", xl: "27px" },
    fontWeight: "300",
    lineHeight: "short",
  },
  textXlThin: {
    fontSize: { base: "25px", lg: "27px", xl: "30px" },
    fontWeight: "300",
    lineHeight: "short",
    letterSpacing: "-0.005em",
  },
  textXl: {
    fontSize: { base: "17px", sm: "19px", lg: "22px", xl: "24px" },
    fontWeight: "300",
    lineHeight: "short",
    letterSpacing: "-0.005em",
  },
  textLg: {
    fontSize: { base: "15px", sm: "18px", lg: "20px", xl: "21px" },
    fontWeight: "300",
    lineHeight: "short",
    letterSpacing: "-0.005em",
  },
  article: {
    fontFamily: "text",
    fontSize: { base: "14px", lg: "16px", xl: "18px" },
    fontWeight: "400",
    letterSpacing: "-0.005em",
  },
  textMd: {
    fontSize: { base: "14px", lg: "16px", xl: "18px" },
    fontWeight: "300",
    letterSpacing: "-0.005em",
  },
  textBody: {
    fontSize: { base: "14px", lg: "15px", xl: "16px" },
    fontWeight: "300",
    letterSpacing: "-0.0025em",
  },
  textSmMeta: {
    fontSize: { base: "12px", lg: "13px", xl: "14px" },
    fontWeight: "700",
    lineHeight: "short",
    textTransform: "uppercase",
  },
  textSm: {
    fontSize: { base: "12px", lg: "13.5px", xl: "14px" },
    fontWeight: "300",
  },
  textButton: {
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  textXs: {
    fontSize: { base: "11px", lg: "12px", xl: "13px" },
    fontWeight: "300",
  },
};

export default textStyles;
