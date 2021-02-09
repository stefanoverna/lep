import { FunctionComponent } from "react";
import { HStack, Box } from "@chakra-ui/react";

const Track: FunctionComponent<TrackProps> = ({ steps }: TrackProps) => {
  return (
    <HStack spacing={2}>
      {steps.map((step) => {
        const { index, isCurrent, onClick } = step;
        return (
          <Box
            key={index.toString()}
            w="13px"
            h="13px"
            borderRadius="50%"
            bg={isCurrent ? "yellow.50" : "white"}
            onClick={onClick}
            role="button"
            aria-label={`Switch to ${index + 1} slide`}
            style={{ transition: "background-color 0.5s ease" }}
          />
        );
      })}
    </HStack>
  );
};

interface TrackProps {
  steps: Array<{
    isCurrent?: boolean;
    index: number;
    onClick?: () => void;
  }>;
}

export default Track;
