import { Box, VStack, Text, Divider, Flex, Center } from "@chakra-ui/react";
import BoxContainer2 from "@/components/BoxContainer2";
import { Slide, SlideContent, Track, SlideButton } from "./subcomponents";
import useSlider from "@/hooks/useSlider";
import { LayerStyle } from "@/types";

const SectionSliderFocalImage = ({
  layerStyle,
  animate,
  bg,
  heading,
  slides,
}: SectionSliderFocalImageProps) => {
  const { currentSlide, nextSlide, prevSlide, setSlide } = useSlider(
    slides?.length
  );
  const renderSlides = slides?.map((slide, index) => (
    <Slide
      animate={animate}
      key={index.toString()}
      currentSlide={currentSlide}
      index={index}
      bg={bg}
      {...slide}
    />
  ));
  const trackDots = slides?.map((slide, i) => ({
    index: i,
    isCurrent: currentSlide === i,
    onClick: () => setSlide(i),
  }));

  return (
    <Box as="section" layerStyle={layerStyle}>
      <Box
        pos="relative"
        bg={{ lg: `${bg}` }}
        h={{ base: "auto", lg: "700px" }}
        overflow={{ base: "initial", lg: "hidden" }}
        pt={{ base: 0, lg: 12 }}
        pb={{ base: 0, lg: 8 }}
      >
        <BoxContainer2 boxProps={{ h: { base: "auto", md: "100%" } }}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            h={{ base: "auto", lg: "100%" }}
          >
            {/* Header */}
            <VStack align="flex-start" spacing={4} mb={8} zIndex={1}>
              <Text
                as="h3"
                textStyle="textXl"
                textTransform="uppercase"
                fontWeight="700"
              >
                {heading}
              </Text>
              <Divider borderColor="black" />
            </VStack>
            {/* Slides */}
            <Box zIndex={0}>{renderSlides}</Box>
            {/* Track */}
            {!!trackDots && (
              <Center display={{ base: "none", lg: "flex" }} zIndex={1}>
                <Track steps={trackDots} />
              </Center>
            )}
          </Flex>
        </BoxContainer2>

        {/* Prev/Next */}
        <Box
          pos="absolute"
          top="50%"
          left={2}
          transform="translateY(-50%)"
          display={{ base: "none", lg: "block" }}
        >
          <SlideButton direction="left" onClick={prevSlide} />
        </Box>
        <Box
          pos="absolute"
          top="50%"
          right={2}
          transform="translateY(-50%)"
          display={{ base: "none", lg: "block" }}
        >
          <SlideButton direction="right" onClick={nextSlide} />
        </Box>
      </Box>
    </Box>
  );
};

interface SectionSliderFocalImageProps {
  layerStyle?: LayerStyle;
  animate?: boolean;
  bg?: string;
  heading: string;
  slides?: SlideContent[];
}

export default SectionSliderFocalImage;
