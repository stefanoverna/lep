import PropTypes from "prop-types";
import { useEffect, createRef } from "react";
import { Text, SimpleGrid, Divider, VStack } from "@chakra-ui/react";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
export const ProgressCircle = ({ percent }) => {
  const valueCircleRef = createRef();

  useEffect(() => {
    const progress = percent / 100;
    const dashoffset = CIRCUMFERENCE * (1 - progress);
    valueCircleRef.current.style.strokeDashoffset = dashoffset;
    valueCircleRef.current.style.strokeDasharray = `${CIRCUMFERENCE} ${CIRCUMFERENCE}`;
  }, [percent, valueCircleRef]);

  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 120 120"
      style={{ transform: "rotate(90deg) scaleY(-1)" }}
    >
      <defs>
        <linearGradient id="linearColors" x1="1" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#A0DEE2" />
          <stop offset="100%" stopColor="#F0E9D7" />
        </linearGradient>
      </defs>
      <circle
        fill="none"
        stroke="#F6F6F6"
        cx="60"
        cy="60"
        r="54"
        strokeWidth="12"
      />
      <circle
        ref={valueCircleRef}
        fill="none"
        strokeLinecap="round"
        cx="60"
        cy="60"
        r="54"
        strokeWidth="12"
        stroke="url(#linearColors)"
      />
    </svg>
  );
};

export const ProgressDescription = ({ percent, description }) => (
  <VStack align="flex-start" spacing={{ base: "8px" }}>
    <Text textStyle="text5xl" fontWeight="500">
      {percent.toFixed(1)}
      <Text as="sup">%</Text>
    </Text>
    <Divider borderColor="black" />
    <Text>{description}</Text>
  </VStack>
);

const ProgressCard = ({ trialPercen, trialResultText }) => (
  <SimpleGrid
    gridTemplateColumns={{
      base: "1fr",
      sm: "1fr 2fr",
    }}
    gap={{ base: "25px", md: "35px" }}
    alignItems="center"
    justifyItems="center"
  >
    <ProgressCircle percent={trialPercen} />
    <ProgressDescription percent={trialPercen} description={trialResultText} />
  </SimpleGrid>
);

ProgressDescription.propTypes = {
  percent: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

ProgressCircle.propTypes = {
  percent: PropTypes.number.isRequired,
};

ProgressCard.propTypes = {
  trialPercen: PropTypes.number.isRequired,
  trialResultText: PropTypes.string.isRequired,
};

export default ProgressCard;
