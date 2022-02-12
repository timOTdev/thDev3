import Head from 'next/head';
import Layout from '../components/shared/Layout';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Career from '../components/Career';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { getSortedPostsData } from '../assets/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}: {
  allPostsData: Array<{ id: string; date: string; title: string }>;
}) {
  return (
    <>
      <Head>
        <title>Timothy Hoang | Software Engineer</title>
      </Head>
      <Layout>
        <Introduction />
        <Skills />
        <Portfolio />
        <Career />
        <Blog allPostsData={allPostsData} />
        <Contact />
      </Layout>
    </>
  );
}
