import * as React from "react";
import { Text, Box, VStack, Image, Button } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { ResponsiveImage } from "@/types";

const HeroTitle = ({
  align = "start",
  preHeading,
  heading,
  subheading,
  graphic,
  lede,
  customCta,
  cta,
  ctaSecondary,
}: HeroTitleProps) => {
  return (
    <Box w="full">
      <VStack align={align} spacing={{ base: 2, md: 3 }}>
        <VStack align={align} spacing={{ base: 2, md: 3 }}>
          {preHeading && (
            <Text
              as="h3"
              textStyle="textXl"
              textTransform="uppercase"
              fontWeight="700"
              align={align}
            >
              {preHeading}
            </Text>
          )}
          <Text
            as="h1"
            textStyle="text4xl"
            textTransform="uppercase"
            align={align}
          >
            {heading}
          </Text>
          {!!subheading && (
            <Text as="h2" textStyle="text2xl" align={align}>
              {subheading}
            </Text>
          )}
        </VStack>

        {!!graphic && (
          <Image
            src={graphic.src}
            alt={graphic.alt}
            maxH={{ base: "24px", md: "48px" }}
            fallbackSrc={graphic.base64}
          />
        )}

        {lede && (
          <Text as="div" textStyle="textMd" align={align}>
            <ReactMarkdown allowDangerousHtml>{lede}</ReactMarkdown>
          </Text>
        )}

        <VStack spacing={2} pt={{ base: 3, md: 4 }}>
          {customCta}
          {cta && cta?.label !== "" && (
            <Button
              as="a"
              size="xl"
              colorScheme={
                cta.variant && cta.variant === "accent" ? null : "black"
              }
              bg={
                cta.variant && cta.variant === "accent"
                  ? "yellow.500"
                  : "transparent"
              }
              minW={{ base: "200px", md: "260px" }}
              href={cta.link}
            >
              {cta.label}
            </Button>
          )}

          {ctaSecondary && (
            <Button
              as="a"
              variant="link"
              size="xl"
              href={ctaSecondary.link}
              bg="transparent"
              minW={{ base: "200px", md: "260px" }}
              fontWeight="light"
              textDecoration="underline"
            >
              {ctaSecondary.label}
            </Button>
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export interface HeroTitleProps {
  align?:
    | Align
    | {
        base?: Align;
        md?: Align;
        lg?: Align;
        xl?: Align;
      };
  preHeading?: string;
  heading: string;
  subheading?: string;
  lede?: string;
  graphic?: ResponsiveImage;
  customCta?: React.ReactNode;
  cta?: {
    label: string;
    link?: string;
    variant?: "outline" | "accent";
  };
  ctaSecondary?: {
    label: string;
    link?: string;
  };
}

type Align = "start" | "center" | "end";

export default HeroTitle;
