import { forwardRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { ClButton } from "@/components/Button";

const styles = {
  slim: {
    variant: "slimGhost",
    size: "sm",
    textDecoration: "underline",
    px: 0,
    h: "auto",
  },
  ghost: {
    variant: "ghost",
    size: "xl",
    textDecoration: "underline",
  },
  white: {
    variant: "outline",
    colorScheme: "white",
    size: "xl",
  },
};

const FaqButton = forwardRef(({ kind, longLabel, slimWeight, ...props }) => {
  return (
    <ClButton
      as="a"
      {...styles[kind]}
      fontWeight={slimWeight}
      id="learn-more"
      {...props}
    >
      {longLabel ? "Learn more about allergy immunotherapy" : "Learn more"}
    </ClButton>
  );
});
FaqButton.displayName = "FaqButton";
FaqButton.propTypes = {
  kind: PropTypes.string.isRequired,
  longLabel: PropTypes.bool.isRequired,
  slimWeight: PropTypes.string.isRequired,
};
// FaqButton.defaultProps = {
//   slimWeight: "light",
// };

// pass the href: https://nextjs.org/docs/api-reference/next/link
// see also: https://github.com/ljosberinn/personal-react-boilerplate/blob/master/src/client/components/InternalLink.tsx

// eslint-disable-next-line import/prefer-default-export
export const ButtonToFaqs = ({ hash, ...props }) => {
  return (
    <Link
      passHref
      href={
        hash === null
          ? "/frequently-asked-questions"
          : `/frequently-asked-questions#${hash}`
      }
    >
      <FaqButton {...props} />
    </Link>
  );
};

ButtonToFaqs.displayName = "ButtonToFaqs";
ButtonToFaqs.propTypes = {
  kind: PropTypes.oneOf(["slim", "ghost", "white"]),
  slimWeight: PropTypes.string,
  hash: PropTypes.string,
  longLabel: PropTypes.bool,
};
ButtonToFaqs.defaultProps = {
  kind: "slim",
  slimWeight: "light",
  hash: null,
  longLabel: false,
};
