import Container from "../../components/post/container";
import MoreStories from "../../components/post/more-stories";
import HeroPost from "../../components/post/hero-post";
import Intro from "../../components/post/intro";
import Layout from "../../components/post/layout";
import { getAllPosts } from "../../lib/api";

import SectionLayout from "../../components/SectionLayout";
import SplitShow from "../../components/post/SplitShow";

export default function Index({ allPosts }) {
  const totalPosts = allPosts.length;
  const heroPostLeft = allPosts.slice(0, totalPosts / 2 + 1);
  const heroPostRight = allPosts.slice(totalPosts / 2 + 1, totalPosts);

  return (
    <>
      <SectionLayout>
        <Intro />
        <SplitShow left={heroPostLeft} right={heroPostRight} />

        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )} */}
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </SectionLayout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "heroImage",
    "challenge",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
