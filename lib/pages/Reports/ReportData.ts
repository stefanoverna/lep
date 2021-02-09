import type { SeoMetaTagType } from "react-datocms";

export interface ReportData {
  seo: SeoMetaTagType[];
  title: string;
  slug: string;
  heroLede: string;
  content: Array<{
    id: string;
    text: string;
  }>;
  preview: boolean;
}
