import Head from 'next/head';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my portfolio site!</title>
      </Head>
      <Layout>
        <Introduction />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </Layout>
    </>
  );
}
