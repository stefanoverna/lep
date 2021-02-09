import React from "react";
import PropTypes from "prop-types";
import { Container } from "@chakra-ui/react";

// px matches layerStyle="containerInset"
// we avoid using layerStyle here so we can use it via props on the component
const BoxContainer = React.forwardRef(
  ({ as, maxW, children, ...props }, ref) => (
    <Container
      as={as}
      maxW={maxW}
      px={{ base: 6, lg: 12 }}
      {...props}
      ref={ref}
    >
      {children}
    </Container>
  )
);

BoxContainer.propTypes = {
  as: PropTypes.string,
  maxW: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

BoxContainer.defaultProps = {
  as: "div",
  maxW: "xl",
};

// interface CapsuleProps {
//   bg?: string;
//   heading?: string;
//   lede?: string;
//   price?: string;
//   showPriceCondition?: boolean;
//   isFeatured?: boolean;
// }

export default BoxContainer;
