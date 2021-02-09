import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import { renderMetaTags } from "react-datocms";
import { Text } from "@chakra-ui/react";
import LayoutBase from "@/components/LayoutBase";
import BoxContainer2 from "@/components/BoxContainer2";
import { getHomePage, HomePageData } from "@/lib/pages/Home";

export const getStaticProps = async (): Promise<unknown> => {
  const [page] = await Promise.all([getHomePage()]);
  return {
    props: {
      pageData: page,
    },
  };
};

interface HomePageProps {
  pageData: HomePageData;
}

const HomePage = ({ pageData }: HomePageProps) => {
  return (
    <LayoutBase>
      <Head>{pageData && renderMetaTags(pageData.seo)}</Head>
      <BoxContainer2 isSection boxProps={{ layerStyle: "spaceXlY" }}>
        <Text>Reports</Text>

        {pageData.allReports?.map((item) => (
          <Link key={item.id} href={`/reports/${item.slug}`} passHref>
            <Text cursor="pointer">{item.title}</Text>
          </Link>
        ))}
      </BoxContainer2>
    </LayoutBase>
  );
};

export default HomePage;
