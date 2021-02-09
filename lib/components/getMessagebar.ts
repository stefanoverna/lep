import { gql } from "graphql-request";
import { client } from "../apiDato";

export async function getMessagebar(): Promise<unknown> {
  const data = await client.request(
    gql`
      query messagebar {
        messagebar {
          text
          bgColor
        }
      }
    `
  );
  return data?.messagebar;
}

export interface MessagebarData {
  messagebar: {
    text: string;
    bgColor: string;
  };
}
