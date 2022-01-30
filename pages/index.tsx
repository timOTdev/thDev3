import Head from 'next/head';
import Layout from '../components/Layout';
import FirstComponent from '../components/FirstComponent';
import SecondComponent from '../components/SecondComponent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to my portfolio site!</title>
      </Head>
      <Layout>
        <FirstComponent />
        <SecondComponent />
      </Layout>
    </>
  );
}
