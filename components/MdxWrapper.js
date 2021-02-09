import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import hydrate from "next-mdx-remote/hydrate";
import MdxComponents from "@/components/MdxComponents";

// EXAMPLE: getStaticProps to provide `source` to the wrapper
// export async function getStaticProps() {
//   const page = await getPrivacyPage();
//   // MDX text - can be from a local file, database, anywhere
//   // const source = "Some **mdx** text, with a component <Test />";
//   const source = page.text;
//   const mdxSource = await renderToString(source, { components: MdxComponents });
//   return {
//     props: {
//       source: mdxSource,
//     },
//   };
// }

export default function MdxWrapper({ source, ...props }) {
  const content = hydrate(source, { components: MdxComponents });
  return (
    <Box className="md-prose" {...props}>
      {content}
    </Box>
  );
}

MdxWrapper.propTypes = {
  source: PropTypes.objectOf(PropTypes.any),
};
MdxWrapper.defaultProps = {
  source: undefined,
};
