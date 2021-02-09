import { Image, Box } from "@chakra-ui/react";

export default function MediaImage({
  src,
  fallbackSrc,
  alt,
  ratio = 1,
  bg = "rgba(235, 211, 202, 0.4)",
  rounded = "0",
  hideOverflow,
  boxProps,
}: MediaImageProps) {
  return (
    <Box
      as="figure"
      position="relative"
      h={0}
      w="full"
      bg={bg}
      rounded={rounded}
      pb={`calc(100% * ${ratio})`}
      overflow={hideOverflow ? "hidden" : "auto"}
      {...boxProps}
    >
      <Image
        src={src}
        fallbackSrc={fallbackSrc}
        alt={alt}
        pos="absolute"
        inset={0}
        w="full"
        h="full"
        objectFit="cover"
      />
    </Box>
  );
}

interface MediaImageProps {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  bg?: string;
  rounded: Rounded;
  ratio?: string | number | Record<string, unknown>;
  hideOverflow?: boolean;
  boxProps?: any;
}

type Rounded = "0" | "xl" | "3xl" | "full";
