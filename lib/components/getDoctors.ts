import { gql } from "graphql-request";
import { client } from "../apiDato";

export async function getDoctors(): Promise<unknown> {
  const data = await client.request(
    gql`
      query allDoctors {
        allDoctors(filter: { showOnPublicWebsite: { eq: "true" } }) {
          id
          name
          charmId
          specialty
          location
          bio
          portrait {
            responsiveImage(imgixParams: { w: 400, q: 30, auto: format }) {
              src
              base64
              alt
            }
          }
        }
      }
    `
  );
  return data?.allDoctors;
}

export interface DoctorsData {
  allDoctors: Array<{
    id: string;
    name: string;
    charmId: string;
    specialty: string;
    location: string;
    bio: string;
    portrait?: {
      responsiveImage: {
        alt: string;
        src: string;
        base64: string;
      };
    };
  }>;
}
