import { getAllPostIds, getPostData } from '../../assets/posts';
import Link from 'next/link';
import Head from 'next/Head';
import styled from 'styled-components';
import Date from '../../assets/date';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const PostContainer = styled.div`
  width: 50%;
  margin: 1rem auto;
  text-align: left;
  h1 {
    text-decoration: underline;
  }
`;

export default function Post({ postData }) {
  return (
    <PostContainer>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <p>
        <Date dateString={postData.date} />
      </p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <hr />
      <Link href='/'>
        <a>← Back to home</a>
      </Link>
    </PostContainer>
  );
}
