/* eslint-disable */
import React from "react";
import { Text, Box } from "@chakra-ui/react";

const mdxComponents = {
  h1: (props) => (
    <Text
      as="h1"
      textStyle="text3xl"
      textTransform="uppercase"
      mb={3}
      {...props}
    />
  ),
  h2: (props) => (
    <Text
      as="h2"
      textStyle="textSmMeta"
      textTransform="uppercase"
      marginTop={8}
      mb={3}
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      as="h3"
      textStyle="textMd"
      fontWeight="bold"
      marginTop={8}
      mb={3}
      {...props}
    />
  ),
  p: (props) => (
    <Text as="p" textStyle="textBody" _notLast={{ mb: 3 }} {...props} />
  ),
  ul: (props) => (
    <Text
      as="ul"
      textStyle="textBody"
      marginTop={3}
      _notLast={{ mb: 3 }}
      pl={8}
      {...props}
    />
  ),
  ol: (props) => (
    <Text
      as="ol"
      textStyle="textBody"
      marginTop={3}
      _notLast={{ mb: 3 }}
      pl={8}
      {...props}
    />
  ),
  li: (props) => (
    <Text as="li" textStyle="textBody" _notLast={{ mb: 3 }} {...props} />
  ),
  table: (props) => (
    <Box
      as="table"
      textStyle="textBody"
      borderBottom="1px solid black"
      verticalAlign="top"
      py={[6, 8]}
      {...props}
    />
  ),
  thead: (props) => (
    <Text
      as="thead"
      textStyle="textBody"
      borderBottom="1px solid black"
      verticalAlign="top"
      {...props}
    />
  ),
  tbody: (props) => (
    <Text as="tbody" textStyle="textBody" verticalAlign="top" {...props} />
  ),
  tr: (props) => (
    <Text
      as="tr"
      borderBottom="1px solid"
      borderColor="blackAlpha.300"
      {...props}
    />
  ),
  td: (props) => (
    <Text
      as="td"
      _first={{ w: ["35%", "30%"] }}
      _notLast={{ mb: 3 }}
      {...props}
    />
  ),
  th: (props) => <Text as="td" fontWeight="bold" {...props} />,
};

// import { MDXProvider } from "@mdx-js/react";
// export default function MDXStyledProvider({ children }) {
//   return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
// }

export default mdxComponents;
