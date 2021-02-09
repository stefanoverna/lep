import { gql } from "graphql-request";
import { client } from "../apiDato";
import { ResponsiveImage } from "@/types";

export async function getTestimonials(): Promise<unknown> {
  const data = await client.request(
    gql`
      query AllTestimonials {
        allTestimonials(filter: { name: { eq: "Deborah H" } }) {
          heading
          name
          location
          quote
          image {
            responsiveImage(imgixParams: { w: 800, q: 30, auto: format }) {
              alt
              src
              base64
            }
          }
        }
      }
    `
  );
  return data?.allTestimonials;
}

// TODO: set as array with a gql variable for the name
// allTestimonials: Array<{
//   heading: string;
export interface TestimonialsData {
  heading: string;
  name: string;
  location: string;
  quote: string;
  image?: {
    responsiveImage: ResponsiveImage;
  };
}
