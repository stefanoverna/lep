import React from "react";
import BoxTestimonial, {
  BoxTestimonialProps,
} from "@/components/BoxTestimonial";

export default {
  title: "BoxTestimonial",
  component: BoxTestimonial,
  argTypes: {
    heading: {
      control: "text",
      defaultValue: "heading",
    },
    quote: {
      control: "text",
      defaultValue: "quote",
    },
    person: {
      control: "text",
      defaultValue: "person",
    },
    location: {
      control: "text",
      defaultValue: "location",
    },
  },
};

export const BoxTestimonialStory = ({
  heading,
  quote,
  person,
  location,
}: BoxTestimonialProps) => (
  // storybook will fix default values bug in the next release 6.2
  <BoxTestimonial
    heading={heading || "heading"}
    quote={quote || "quote"}
    person={person || "person"}
    location={location || "location"}
  />
);
