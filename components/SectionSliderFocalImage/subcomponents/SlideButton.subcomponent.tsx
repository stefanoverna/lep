import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";

import { IconArrowLeft, IconArrowRight } from "@/components/Icons";

const SlideButton: FunctionComponent<SlideButtonProps> = ({
  onClick,
  direction,
}: SlideButtonProps) => {
  return (
    <Box
      as="button"
      bg="#fff"
      borderRadius="50%"
      width="48px"
      height="48px"
      textAlign="center"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClick}
    >
      {direction === "left" && <IconArrowLeft height="19px" />}
      {direction === "right" && <IconArrowRight height="19px" />}
    </Box>
  );
};

interface SlideButtonProps {
  onClick?: () => void;
  direction: "left" | "right";
}

export default SlideButton;
