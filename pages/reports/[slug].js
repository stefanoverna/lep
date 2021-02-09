/* eslint-disable prettier/prettier */
import * as React from "react";
import PropTypes from "prop-types";
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import { SimpleGrid, Box, Flex, Text, Button } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import LayoutBase from "@/components/LayoutBase";
import GridArticle from "@/components/GridArticle";
// import MediaImage from "@/components/MediaImage";




export default function Report({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <LayoutBase preview={preview}>
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
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            {/* <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </GridArticle>

    </LayoutBase>
  );
}

Report.propTypes = {
  preview: PropTypes.bool,
  datoProduct: PropTypes.objectOf(PropTypes.any).isRequired,
  shopifyProduct: PropTypes.objectOf(PropTypes.any).isRequired,
};
Report.defaultProps = {
  preview: false,
};
