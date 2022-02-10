import Head from 'next/head';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Career from '../components/Career';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
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
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}
