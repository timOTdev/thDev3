import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Section = styled.section`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 2560px) {
    width: 80%;
  }
`;

interface PropTypes {
  theme: string;
  allPostsData: Array<{ id: string; date: string; title: string }>;
  toggleTheme: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

export default function Layout(props: PropTypes) {
  return (
    <>
      <Header {...props} />
      <Section>{props.children}</Section>
      <Footer />
    </>
  );
}
