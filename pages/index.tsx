import Head from 'next/head';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import SecondComponent from '../components/SecondComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my portfolio site!</title>
      </Head>
      <Layout>
        <Introduction />
        <SecondComponent />
      </Layout>
    </>
  );
}
