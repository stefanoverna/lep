/* eslint-disable import/prefer-default-export */
import { gql } from "graphql-request";
import { client } from "../apiDato";

export async function getReliefStepsCta(): Promise<unknown> {
  const data = await client.request(
    gql`
      query componentReliefStepsCta {
        componentReliefStepsCta {
          heading
          subheading
          steps {
            id
            label
            description
            image {
              responsiveImage(
                imgixParams: { w: 640, h: 600, q: 30, auto: format }
              ) {
                src
                base64
                alt
              }
            }
          }
        }
      }
    `
  );
  return data?.componentReliefStepsCta;
  // return {
  //   reliefStepsCta: data?.componentReliefStepsCta,
  // };
}

export interface ReliefStepsCtaData {
  heading: string;
  subheading: string;
  steps: Array<{
    id: string;
    label: string;
    description: string;
    image?: {
      responsiveImage: {
        alt: string;
        src: string;
        base64: string;
      };
    };
  }>;
}
