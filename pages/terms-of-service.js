import PropTypes from "prop-types";
import LayoutPageInfo from "@/components/LayoutPageInfo";
import MdxComponents from "@/components/MdxComponents";
import { getTermsPage } from "@/lib/apiDato";
import renderToString from "next-mdx-remote/render-to-string";

export async function getStaticProps() {
  const page = await getTermsPage();
  const source = page.text;
  const mdxSource = await renderToString(source, { components: MdxComponents });
  return {
    props: {
      page,
      source: mdxSource,
    },
  };
}

export default function termsPage({ preview, page, source }) {
  return <LayoutPageInfo preview={preview} page={page} source={source} />;
}

termsPage.propTypes = {
  preview: PropTypes.bool,
  page: PropTypes.objectOf(PropTypes.any),
};
termsPage.defaultProps = {
  preview: false,
  page: undefined,
};
