/* eslint-disable react/prop-types */
import * as React from "react";
// import PropTypes from "prop-types";
// import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { VStack, Container, Text } from "@chakra-ui/react";
import LayoutBase from "@/components/LayoutBase";
import GridArticle from "@/components/GridArticle";
import { PostBody } from "@/components/PostBody";
// import ReactMarkdown from "react-markdown";
// import MediaImage from "@/components/MediaImage";
// import { getAllReportsBySlug, getPostAndMorePosts } from "@/lib/api";
// import { getReportBySlug, getAllReportsWithSlug } from "@/lib/pages/Reports";
import { getReportQuery } from "@/lib/pages/Reports";
import { request } from "@/lib/datocms";

// When you use getStaticProps on a page with dynamic route parameters,
// you must also use getStaticPaths.
// export const getStaticPaths: GetStaticPaths = async () => {
export async function getStaticPaths() {
  const data = await request({ query: `{ allReports { slug } }` });

  return {
    paths: data.allReports.map((post) => `/reports/${post.slug}`) || [],
    fallback: false,
  };
}

// export const getStaticProps: GetStaticProps = async (context) => {
export async function getStaticProps({ params, preview = false }) {
  // or const data = await getReportBySlug(params.slug, preview);
  // or useQuerySubscription from Dato's nextjs-demo
  const data = await request({
    query: getReportQuery,
    variables: { slug: params.slug },
    preview,
  });

  return {
    props: {
      preview,
      post: {
        ...data?.report,
      },
      // morePosts: data?.morePosts ?? [],
    },
  };
}

export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // …from notion-blog
  // if we can't find the post or if it is unpublished and
  // viewed without preview mode then we just redirect to /blog
  // if (!post || (post._status !== "published" && !preview)) {
  //   console.log(`Failed to find post for slug: ${post.slug}`);
  //   return {
  //     props: {
  //       redirect: "/reports",
  //       preview: false,
  //     },
  //     unstable_revalidate: 5,
  //   };
  // }

  return (
    <LayoutBase preview={preview}>
      <Head>{post && renderMetaTags(post.seo)}</Head>

      <VStack align="flex-start" spacing="w1">
        <GridArticle>
          <Text textStyle="textXl">Reports</Text>
        </GridArticle>

        {/* TODO: loading  */}
        {router.isFallback ? (
          <GridArticle>
            {" "}
            <Text>Loading…</Text>
          </GridArticle>
        ) : (
          <GridArticle>
            <Text>Loaded</Text>
          </GridArticle>
        )}

        <GridArticle>
          <Text textStyle="text5xl">{post.title}</Text>
          <Text>This like the published date will also go here…</Text>
          <Text>{post.heroLede}</Text>
          {/* <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          />
        <PostBody content={post.content} /> */}
        </GridArticle>

        {/* Not working. Might be multi fields on an ST component? Opened an issue: https://github.com/datocms/nextjs-demo/issues/11 */}
        {/* <PostBody content={post.stContent} /> */}

        {/* {post.content?.map((item) => (
        <GridArticle
        key={item.id}
        aside={
          item.footnote ? (
            <Text textStyle="article">{item.footnote}</Text>
            ) : null
          }
          >
          <VStack align="flex-start" spacing={2} textStyle="article">
          <ReactMarkdown key={item.id}>{item.text}</ReactMarkdown>
          </VStack>
          </GridArticle>
        ))} */}

        <GridArticle>
          <Container layerStyle="spaceXlY">
            {/* {morePosts.length > 0 && <Text>there are more posts…</Text>} */}
          </Container>
        </GridArticle>
      </VStack>
    </LayoutBase>
  );
}
