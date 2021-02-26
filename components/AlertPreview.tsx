import { Box, Container, Text } from "@chakra-ui/react";
// import { EXAMPLE_PATH } from "@/lib/constants";

export default function Alert({ preview }: Props) {
  return (
    <Box color={preview ? "form.good" : "black"}>
      <Container>
        <Text py={2}>
          {preview ? (
            <>
              This is page is a preview.{" "}
              <a href="/api/exit-preview">Click here</a> to exit preview mode.
            </>
          ) : (
            "Preview mode is off ."
          )}
        </Text>
      </Container>
    </Box>
  );
}

interface Props {
  preview?: boolean;
}
