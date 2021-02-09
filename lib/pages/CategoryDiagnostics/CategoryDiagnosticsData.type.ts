import type { SeoMetaTagType } from "react-datocms";
import type { ResponsiveImage } from "@/types";

export interface CategoryDiagnosticsData {
  seo: SeoMetaTagType[];
  heroPreheading: string;
  heroHeading: string;
  heroLede: string;
  heroCtaLabel: string;
  heroCtaLabelSecondary: string;
  heroCtaLink: string;
  heroCtaLinkSecondary: string;
  heroImage: {
    url: string;
    responsiveImage: ResponsiveImage;
    focalPoint: {
      x: number;
      y: number;
    };
  };
  diagnosticsSteps: Array<{
    icon: {
      alt: string;
      url: string;
    };
    title: string;
  }>;
  featureSubheading: string;
  featureHeading: string;
  featureLede: string;
  featurePortalCtaLabel: string;
  featureList: Array<{
    heading: string;
    subheading: string;
    image?: {
      alt: string;
      url: string;
      responsiveImage: ResponsiveImage;
    };
  }>;
  infoTitle: string;
  infoCtaLabel: string;
  infoBlocks: Array<{
    title: string;
    lede: string;
    image: {
      alt: string;
      url: string;
    };
  }>;
  featureBlockTitle: string;
  featureBlockLede: string;
  featureBlockImage: {
    url: string;
    alt: string;
  };
  hiwHeading: string;
  hiwSteps: Array<{
    id: string;
    title: string;
    lede: string;
    image: {
      responsiveImage: ResponsiveImage;
    };
  }>;
  testimonialImage: {
    responsiveImage: ResponsiveImage;
  };
  testimonial: {
    id: string;
    heading: string;
    location: string;
    name: string;
    quote: string;
    image: {
      responsiveImage: ResponsiveImage;
    };
  };
  faqTitle: string;
  faqList: Array<{
    id: string;
    answer: string;
    question: string;
  }>;
  ctaSectionTitle: string;
  ctaSectionLede: string;
}
