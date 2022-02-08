import Head from 'next/head';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home({ props: any }) {
  return (
    <>
      <Head>
        <title>Timothy Hoang | Software Engineer</title>
      </Head>
      <Layout>
        <Introduction />
        <Portfolio />
        <About />
        <Skills />
        <Blog />
        <Contact />
      </Layout>
    </>
  );
}
