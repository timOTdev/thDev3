import styled from 'styled-components';
import Socials from './shared/Socials';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Link from 'next/link';

const Section = styled.section`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 2560px) {
    width: 60%;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const Top = styled.div`
  flex: 1 1 25%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
  }
  svg {
    padding-top: 1rem;
    border-top: ${(props) => props.theme.xBorderColor};
    :hover {
      cursor: pointer;
      border-top: ${({ theme }) => theme.yBorderColor};
    }
  }
`;
const Quote = styled.div`
  flex: 1 1 50%;
`;
const Related = styled.div`
  flex: 1 1 25%;
`;

export default () => (
  <Section>
    <hr />
    <hr />
    <FooterContainer>
      <Top>
        <Link href='#header'>
          <a>
            <FaArrowAltCircleUp />
          </a>
        </Link>
        <p>Back to the top</p>
      </Top>
      <Quote>
        <p>
          "Excellence is an art won by training and habituation. We do not act
          rightly because we have virtue or excellence, but we rather have those
          because we have acted rightly. We are what we repeatedly do.
          Excellence, then, is not an act but a habit."
        </p>
        <p>-Aristotle</p>
      </Quote>
      <Related>
        <Socials />
        <p>Timothy Hoang © {new Date().getFullYear()}</p>
      </Related>
    </FooterContainer>
  </Section>
);
