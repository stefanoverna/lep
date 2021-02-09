import { gql } from "graphql-request";
import { client } from "../apiDato";
import { ResponsiveImage } from "@/types";

export async function getSectionManufacturing(): Promise<unknown> {
  const data = await client.request(
    gql`
      query sectionManufacturing {
        sectionManufacturing {
          heading
          lede
          image {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              src
              base64
              alt
            }
          }
        }
      }
    `
  );
  return data?.sectionManufacturing;
}

export interface SectionManufacturingData {
  heading: string;
  lede: string;
  image: {
    responsiveImage: ResponsiveImage;
  };
}
