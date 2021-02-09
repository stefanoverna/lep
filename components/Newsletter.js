import React from "react";
import * as api from "@/lib/api";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import BoxContainer from "@/components/BoxContainer";
import { BoxSimpleGrid } from "@/components/BoxGrid";

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);
  const [email, setEmail] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    const res = await api.subscribeToNewsletter(email);
    if (!res.error) setSubscribed(true);
    setIsSubmitting(false);
  }

  return (
    <BoxContainer as="section" layerStyle="spaceLgT">
      <BoxSimpleGrid columns={{ base: 1, md: 2 }}>
        <Box textAlign={["center", "center", "left"]} pr={{ lg: 12 }}>
          <Heading as="h3" textStyle="text3xl" layerStyle="gapLgB">
            Healthy habits start here
          </Heading>
          <Text textStyle="textLg" fontWeight="700" layerStyle="gapSmB">
            Sign up to our email newsletter to get 10% off your next purchase
          </Text>
          <Text textStyle="textMd">
            Plus other exclusive offers + ongoing advice from our nutritional
            and medical experts.
          </Text>
        </Box>
        <Flex align="center">
          <Box as="form" w="full" onSubmit={handleSubmit}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                h="70px"
                borderRadius="0"
                type="email"
                variant="filled"
                backgroundColor="thiel.50"
                placeholder="Enter your email"
                _hover={{ backgroundColor: "thiel.500" }}
                onChange={(event) => setEmail(event.target.value)}
              />
              <InputRightElement width="4.5rem" h="70px">
                <Button
                  type="submit"
                  h="1.75rem"
                  mr="4"
                  fontWeight="700"
                  size="sm"
                  variant="link"
                  minW="auto"
                  isDisabled={isSubmitting}
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          {subscribed && (
            <Flex pos="absolute" bottom={-10} right="0" justify="flex-end">
              <Text textStyle="textBody">
                Success! Please check your inbox to confirm your subscription
              </Text>
            </Flex>
          )}
        </Flex>
      </BoxSimpleGrid>
    </BoxContainer>
  );
}
