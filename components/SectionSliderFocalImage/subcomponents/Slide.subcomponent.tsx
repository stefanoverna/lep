import { FunctionComponent } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";

import BoxContainer from "@/components/BoxContainer";
import HeroTitle, { HeroTitleProps } from "@/components/HeroTitle";
import { ResponsiveImage } from "@/types";

const Slide: FunctionComponent<SlideProps> = ({
  animate,
  currentSlide,
  index,
  bg,
  image,
  badge,
  focalPoint,
  ...heroTitleProps
}: SlideProps) => {
  const imageFocalPoint =
    focalPoint && `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
  const isCurrent = currentSlide;
  const isPrev = index < currentSlide;
  const isNext = index > currentSlide;

  const slidePosition = (): string => {
    if (isPrev) {
      return "translateX(-50%)";
    }
    if (isNext) {
      return "translateX(100%)";
    }
    return "translateX(0)";
  };

  return (
    <Box
      bg={{ lg: `${bg}` }}
      w="100%"
      h={{ base: "auto", md: "100%" }}
      pos={{ base: "relative", lg: "absolute" }}
      top={{ md: 0 }}
      left={{ md: 0 }}
      transition={animate ? "transform 1.2s ease, opacity 1.2s ease" : ""}
      transform={{ lg: slidePosition() }}
      zIndex={{ lg: isCurrent ? 1 : 0 }}
      mb={{ base: 8, lg: 0 }}
    >
      <Flex
        alignItems={{ base: "flex-start", lg: "center" }}
        flexDirection={{ base: "column", lg: "row" }}
        py={{ lg: 36 }}
        h={{ base: "auto", lg: "100%" }}
      >
        <Box
          as="div"
          bg={bg}
          pt={{ base: "70%", lg: 0 }}
          h={{ base: 0, lg: "100%" }}
          rounded={{ base: "3xl", lg: 0 }}
          w="100%"
          overflow="hidden"
          zIndex={0}
          pos={{ base: "relative", lg: "absolute" }}
          mb={{ base: 8, lg: 0 }}
        >
          <Image
            h="100%"
            left={0}
            objectFit="cover"
            pos="absolute"
            ratio={1 / 1}
            src={image?.src}
            alt={image?.alt}
            fallbackSrc={image?.base64}
            objectPosition={imageFocalPoint}
            top={0}
            w="100%"
          />

          {!!badge && (
            <Box
              pos="absolute"
              left={0}
              top={0}
              pt={{ base: 6, lg: 32 }}
              px={{ base: 6, lg: 0 }}
              zIndex={1}
              w="100%"
            >
              {/* @ts-ignore */}
              <BoxContainer px={{ base: 0, lg: 12 }}>
                <Flex justifyContent="flex-end">
                  <Box>
                    <Image src={badge?.src} />
                  </Box>
                </Flex>
              </BoxContainer>
            </Box>
          )}
        </Box>
        {/* @ts-ignore */}
        <BoxContainer px={{ base: 0, lg: 12 }} zIndex={1} pos="relative">
          <Box w={{ base: "100%", lg: "50%" }}>
            <HeroTitle
              align={{ base: "center", md: "start" }}
              {...heroTitleProps}
            />
          </Box>
        </BoxContainer>
      </Flex>
    </Box>
  );
};

interface SlideProps extends SlideContent {
  currentSlide: number;
  index: number;
  animate?: boolean;
}

export interface SlideContent extends HeroTitleProps {
  bg?: string;
  image?: ResponsiveImage;
  focalPoint?: {
    x: number;
    y: number;
  };
  lede?: string;
  badge?: ResponsiveImage;
}

export default Slide;
