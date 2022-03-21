import Link from 'next/link';
import styled from 'styled-components';
import Date from '../assets/date';

const Section = styled.section`
  ul {
    list-style-type: none;
    margin: 0 auto;
    width: 35%;
    text-align: left;
  }
  ul p {
    display: inline;
  }
  h2 {
    text-align: left;
  }
  a {
    font-size: 1.2rem;
    border-bottom: 2px solid ${({ theme }) => theme.underlineColor};
  }
`;

interface AllPostsDataTypes {
  allPostsData: Array<{ id: string; date: string; title: string }>;
}

export default function Blog({ allPostsData }: AllPostsDataTypes) {
  return (
    <Section id='blog'>
      <h2>Blog</h2>
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
              <p>
                <Date dateString={date} />
              </p>{' '}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </Section>
  );
}
