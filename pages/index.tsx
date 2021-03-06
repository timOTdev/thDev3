import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Career from '../components/Career';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Layout from '../components/shared/Layout';
import { getSortedPostsData } from '../assets/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

interface PropTypes {
  theme: string;
  allPostsData: Array<{ id: string; date: string; title: string }>;
  toggleTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function Home(props: PropTypes) {
  return (
    <>
      <Layout {...props}>
        <Introduction />
        <Portfolio />
        <Career />
        <Skills />
        <Blog allPostsData={props.allPostsData} />
        <Contact />
      </Layout>
    </>
  );
}
