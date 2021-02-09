import { FunctionComponent } from "react";
import {
  Grid,
  Box,
  Flex,
  VStack,
  Button,
  Image,
  Divider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import { RightArrowThin } from "@/components/Icons";
import { ResponsiveImage } from "@/types";

const BlockMiniStepCta: FunctionComponent<BlockMiniStepCtaProps> = ({
  steps,
  cta,
}: BlockMiniStepCtaProps) => {
  const renderItems = steps.map((step, index) => {
    const isLast = steps.length - 1 === index;
    const { image, text } = step;

    return (
      <Box key={index.toString()} w="100%" maxW={{ base: "100%", md: "140px" }}>
        <VStack spacing={3} align="flex-start">
          <Flex justifyContent="space-between" alignItems="center" w="100%">
            <Image
              src={image.src}
              alt={image.alt}
              fallbackSrc={image.base64}
              w="40px"
              h="40px"
              objectFit="contain"
            />
            {!isLast && (
              <Box transform={{ base: "rotate(90deg)", sm: "rotate(0)" }}>
                <RightArrowThin height="20px" width="20px" />
              </Box>
            )}
          </Flex>
          <Divider borderColor="black" />
          <Text textStyle="textBody">{text}</Text>
        </VStack>
      </Box>
    );
  });

  return (
    <Box w={{ base: "100%", md: "auto" }}>
      <VStack w="100%" spacing={6} align="flex-start">
        <Grid
          gridGap={8}
          w="100%"
          gridTemplateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
        >
          {renderItems}
        </Grid>
        {!!cta && (
          <Link href={cta?.href || "#"} passHref>
            <Button variant="accent" size="xl" w="100%">
              {cta.label}
            </Button>
          </Link>
        )}
      </VStack>
    </Box>
  );
};

export interface BlockMiniStepCtaProps {
  steps: Array<{
    image: ResponsiveImage;
    text: string;
  }>;
  cta?: {
    label: string;
    href?: string;
  };
}

export default BlockMiniStepCta;
