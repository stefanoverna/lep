/* eslint-disable prettier/prettier */
import * as React from "react";
// import PropTypes from "prop-types";
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { renderMetaTags } from "react-datocms";
import { SimpleGrid, Box, Flex, Text, Button } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import LayoutBase from "@/components/LayoutBase";
import GridArticle from "@/components/GridArticle";
// import MediaImage from "@/components/MediaImage";

import { getReportBySlug, ReportData, getAllReportsWithSlug } from "@/lib/pages/Reports";

// export const getStaticProps = async ({ params, preview = false }): Promise<unknown> => {
//   const data = await getReportBySlug(params.slug)
//   return {
//     props: {
//       preview,
//       // post: data?.report,
//       data
//     },
//   };
// };

export const getStaticProps: GetStaticProps<ReportProps> = async ({ params }) => {
  const data = await getReportBySlug(params.slug)
  return {
    props: {
      data
    }
  };
};

interface ReportProps {
  post: ReportData;
}


// export async function getStaticProps({ params, preview = false }) {
//   const data = await getReportBySlug(params.slug, preview)

//   return {
//     props: {
//       preview,
//       // post: data?.report
//       post: {
//         ...data?.report,
//       },
//     },
//   }
// }

// export async function getStaticProps({ params, preview = false }) {
//   const [post] = await Promise.all([getReportBySlug(slug)]);
//   // const data = await getPostAndMorePosts(params.slug, preview)

//   return {
//     props: {
//       preview,
//       post,
//     },
//   }
// }

// https://github.com/vercel/next.js/blob/master/errors/invalid-getstaticpaths-value.md
export async function getStaticPaths() {
  const allPosts = await getAllReportsWithSlug()
  return {
    paths: allPosts?.map((post) => `/reports/${post.slug}`) || [],
    fallback: true,
  }
}

export const getStaticPaths = async () => {
    const res: IVaccinationQuery = await request(API, VACCINATION_ID);
    const paths = res.vaccination.map((vacc) => ({ params: { id: vacc.id } }));
    return { paths, fallback: false };
};





export default function Report({ post }: ReportProps) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <LayoutBase>
      {/* <Head>{page && renderMetaTags(page.seo)}</Head> */}

      <GridArticle>
        <Text textStyle="text4xl">Reports</Text>
      </GridArticle>

      <GridArticle>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <>
            <article>
              <Head>
                {post && renderMetaTags(post.seo)}
                </Head>
                <Text>{ post.title}</Text>
              {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
              {/* <PostBody content={post.content} /> */}
            </article>

            {/* <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </GridArticle>

    </LayoutBase>
  );
}
