import { Button } from "@chakra-ui/react";
import config from "@/config";
import * as gtag from "@/lib/gtag";
import * as fbpx from "@/lib/fbpx";

export default function ButtonToPortal({
  isWhite = false,
  buttonText = "Start Your Online Visit",
  handleClick,
  boxProps,
}: ButtonToPortalProps) {
  const defaultHandleEvent = () => {
    gtag.event({
      action: "QuizStart",
      category: "QuizStart",
      label: "QuizStart",
      value: "QuizStart",
    });
    fbpx.event({
      action: "QuizStart",
      name: "QuizStart",
      category: "QuizStart",
    });
  };

  const onButtonClickHandler = () => {
    if (handleClick) {
      handleClick();
    } else {
      defaultHandleEvent();
    }
  };

  return (
    <Button
      as="a"
      variant={isWhite ? "outline" : "accent"}
      colorScheme={isWhite ? "white" : "crayola"}
      size="xl"
      w={{ base: "full", md: "260px" }}
      href={`${config.portalUrl}/register`}
      rel="noopener noreferrer"
      id="start-visit"
      onClick={onButtonClickHandler}
      {...boxProps}
    >
      {buttonText}
    </Button>
  );
}

interface ButtonToPortalProps {
  isWhite?: boolean;
  buttonText?: string;
  handleClick?: () => void;
  boxProps?: any;
}
