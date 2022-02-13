import { getAllPostIds, getPostData } from '../../assets/posts';
import Link from 'next/link';
import Head from 'next/Head';
import styled from 'styled-components';
import Date from '../../assets/date';

const PostContainer = styled.div`
  width: 50%;
  margin: 1rem auto;
  text-align: left;
  h1 {
    text-decoration: underline;
  }
`;

export default ({ postData }) => (
  <PostContainer>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h2>{postData.title}</h2>
    <h6>
      <Date dateString={postData.date} />
    </h6>
    <hr />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    <hr />
    <Link href='/'>
      <a>← Back to home</a>
    </Link>
  </PostContainer>
);

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
