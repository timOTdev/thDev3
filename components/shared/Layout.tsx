import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Section = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export default ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Section>{children}</Section>
    <Footer />
  </>
);
