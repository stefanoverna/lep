import * as React from "react";
import { Box, Image, Flex, useBreakpointValue } from "@chakra-ui/react";
import BoxContainer2 from "@/components/BoxContainer2";
import HeroTitle, { HeroTitleProps } from "@/components/HeroTitle";

// MOBILE HERO HEIGHTS
// Charka useMediaQuery returns false if SSR, so using sx prop for now
// see: https://chakra-ui.com/docs/hooks/use-media-query
// iphone media queries
// https://stackoverflow.com/a/46313641
// https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
// const [isLargePhone] = useMediaQuery(
//   "(min-width: 375px) and (max-width: 440px) and (max-height: 900px) and (orientation: portrait)"
// );
// h={isLargePhone ? heroHeightLargePhone : heroHeight}

const Hero = ({
  height = { base: "calc(100vh - 64px)", md: "500px", lg: "700px" },
  bg = "peach.500",
  imageIsNotBleed = false,
  image,
  imageMobile,
  imageAlt,
  imageFallback,
  showFallback,
  focalPoint,
  heroContent,
  heroContentWidth = { base: "100%", md: "60%" },
  children,
}: HeroProps) => {
  const imageFocalPoint =
    focalPoint && `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;

  // useBreakpointValue to allow a different image on mobile
  const imageMobileSrc = useBreakpointValue({ base: imageMobile, md: image });

  return (
    <Box
      as="header"
      pos="relative"
      bg={bg}
      h={height}
      overflow="hidden"
      // media query that also works for SSR
      sx={{
        "@media screen and (min-width: 375px) and (max-width: 540px) and (max-height: 900px) and (orientation: portrait)": {
          height: "85vh",
        },
      }}
    >
      {imageIsNotBleed ? (
        <Box pos="absolute" inset={0}>
          {children}
        </Box>
      ) : (
        <Image
          src={imageMobile ? imageMobileSrc : image}
          fallbackSrc={showFallback ? imageFallback : null}
          alt={imageAlt}
          pos="absolute"
          top={0}
          h="full"
          w="full"
          fit="cover"
          objectPosition={focalPoint && imageFocalPoint}
        />
      )}

      {/* TYPOGRAPHY */}
      <Flex
        pos="relative"
        h="full"
        align={{ md: "center" }}
        justify={{ base: "flex-start", lg: "flex-end" }}
        pt={{ base: 8, lg: 0 }}
      >
        <BoxContainer2>
          <Box w={heroContentWidth}>
            <HeroTitle {...heroContent} />
          </Box>
        </BoxContainer2>
      </Flex>
    </Box>
  );
};

interface HeroProps {
  bg?: string;
  imageIsNotBleed?: boolean;
  image?: string;
  imageMobile?: string;
  imageAlt?: string;
  imageFallback?: string;
  showFallback?: boolean;
  height?: {
    base?: string;
    md?: string;
    lg?: string;
  };
  focalPoint?: {
    x: number;
    y: number;
  };
  heroContentWidth?: {
    base?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
  };
  heroContent: HeroTitleProps;
  children?: any;
}

export default Hero;
