import Link from 'next/link';
import styled from 'styled-components';
import Date from '../assets/date';

const Section = styled.section`
  ul {
    list-style-type: none;
  }
  h1 {
    text-align: left;
  }
  a {
    border-bottom: ${({ theme }) => theme.yBorderColor};
  }
`;

interface allPostsDataTypes {
  allPostsData: Array<{ id: string; date: string; title: string }>;
}

export default function Blog({ allPostsData }: allPostsDataTypes) {
  return (
    <Section>
      <h1>Blog</h1>
      <hr />
      <ul>
        {allPostsData.map(
          ({
            id,
            date,
            title,
          }: {
            id: string;
            date: string;
            title: string;
          }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <p>
                <Date dateString={date} />
              </p>
            </li>
          )
        )}
      </ul>
    </Section>
  );
}
