import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPage from "next/error";
import Container from "../../components/post/container";
import PostBody from "../../components/post/post-body";
import Header from "../../components/post/header";
import PostHeader from "../../components/post/post-header";
import Layout from "../../components/post/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import SectionLayout from "../../components/SectionLayout";

import styles from "../../styles/Posts/Slug.module.css";
import CoverImage from "../../components/post/cover-image";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {/* <Header /> */}
      {router.isFallback ? (
        <SectionLayout>
          <PostTitle>Loading…</PostTitle>
        </SectionLayout>
      ) : (
        <>
          <article>
            <Head>
              <title>Datadigm | {post.title} </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <SectionLayout>
              <PostHeader title={post.title} />
            </SectionLayout>
            {post.heroImage ? (
              <Image
                src={post.heroImage}
                alt="image"
                width={1920}
                height={1080}
              />
            ) : (
              <div></div>
            )}
            <SectionLayout>
              <div className={styles.challengeWrapper}>
                <div className={styles.challenge}>
                  <span>Challenge</span>
                  <p>{post.challenge}</p>
                </div>
              </div>
            </SectionLayout>
            <SectionLayout>
              <PostBody content={post.content} />
            </SectionLayout>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "heroImage",
    "challenge",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
