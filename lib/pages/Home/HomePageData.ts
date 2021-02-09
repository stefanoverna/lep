import type { SeoMetaTagType } from "react-datocms";

export interface HomePageData {
  seo: SeoMetaTagType[];
  allReports: Array<{
    id: string;
    title: string;
    slug: string;
  }>;
}
