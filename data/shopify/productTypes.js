/**
 * Product Types exist in shopify as Title Case strings
 * Urls are slugified versions
 *
 * Product types are listed explicitly here instead of generating pages for all product types
 * because each pages has unique layout requirements
 */
import slugify from "@/lib/slugify";

const productTypes = ["Relief Medications", "Daily support", "Immunotherapy"];

export default productTypes.map((type) => ({
  title: type,
  slug: slugify(type),
}));
