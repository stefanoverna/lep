import { Heading, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@/components/Icons";

const BoxTestimonial = ({
  heading,
  quote,
  person,
  location,
}: BoxTestimonialProps) => {
  const stars = [...Array(5)].map((e, i) => <StarIcon key={i.toString()} />);

  return (
    <Flex direction="column" justifyContent="center" h="full">
      <Heading as="h3" textStyle="text4xl" w={{ xl: 7 / 12 }}>
        {heading}
      </Heading>
      <Flex columns="5" mt={{ base: 4, md: 6, xl: 8 }} mb={[4]}>
        {stars}
      </Flex>
      <Text textStyle="text2xl" fontStyle="italic">
        {quote}
      </Text>
      <Text textStyle="textBody" fontWeight="700" mt="4">
        {person}
      </Text>
      {location ? <Text textStyle="textXs">{location}</Text> : null}
    </Flex>
  );
};

export interface BoxTestimonialProps {
  heading: string;
  quote: string;
  person: string;
  location?: string;
}

export default BoxTestimonial;
