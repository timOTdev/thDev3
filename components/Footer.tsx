import styled from 'styled-components';
import Socials from './shared/Socials';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Link from 'next/link';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  * {
    flex: 1 1 33%;
  }
`;
const Arrow = styled.a`
  margin: 1rem;
  padding: 1rem;
  border-top: ${(props) => props.theme.xBorderColor};
  :hover {
    cursor: pointer;
    border-top: ${({ theme }) => theme.yBorderColor};
  }
`;

export default () => (
  <section>
    <hr />
    <FooterContainer>
      <div>
        <p>
          "Excellence is an art won by training and habituation. We do not act
          rightly because we have virtue or excellence, but we rather have those
          because we have acted rightly. We are what we repeatedly do.
          Excellence, then, is not an act but a habit."
        </p>
        <p>-Aristotle</p>
      </div>
      <div>
        <Link href='#header'>
          <Arrow>
            <FaArrowAltCircleUp />
          </Arrow>
        </Link>
        <p>Back to the top</p>
      </div>
      <div>
        <Socials />
        <p>Timothy Hoang © {new Date().getFullYear()}</p>
      </div>
    </FooterContainer>
  </section>
);
