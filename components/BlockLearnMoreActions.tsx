import { ReactNode } from "react";
import Link from "next/link";
import { VStack, Text, Grid, Button } from "@chakra-ui/react";
import ButtonToPortal from "@/components/ButtonToPortal";

const BlockLearnMoreActions = ({
  align = "flex-start",
  heading,
  actionMinWidth,
  actions,
}: BlockLearnMoreActionsProps) => {
  const renderActions: ReactNode[] | null = actions.map((action, index) => {
    const { label, href, asLink, asPortalButton } = action;

    if (!label) return null;

    return (
      <>
        {asPortalButton ? (
          <ButtonToPortal isWhite />
        ) : (
          <Link key={index.toString()} href={href || "#"} passHref>
            <Button
              variant={asLink ? "ghost" : "outline"}
              textDecoration={asLink && "underline"}
              colorScheme="black"
              size="xl"
              bg="transparent"
              minWidth={actionMinWidth}
            >
              {label}
            </Button>
          </Link>
        )}
      </>
    );
  });

  return (
    <VStack align={align} spacing={{ base: 4, lg: 6 }}>
      {!!heading && (
        <Text as="p" textStyle="textBody" fontWeight="700">
          {heading}
        </Text>
      )}

      <Grid gridGap={4} gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        {renderActions}
      </Grid>
    </VStack>
  );
};

export interface BlockLearnMoreActionsProps {
  align?:
    | Align
    | {
        base?: Align;
        sm?: Align;
        md?: Align;
        lg?: Align;
        xl?: Align;
      };
  heading?: string;
  actionMinWidth?: string;
  actions: Array<{
    label?: string;
    href?: string;
    asLink?: boolean;
    asPortalButton?: boolean;
  }>;
}
type Align = "flex-start" | "center" | "flex-end";

export default BlockLearnMoreActions;
