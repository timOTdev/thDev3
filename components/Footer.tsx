import styled from 'styled-components';
import Socials from './shared/Socials';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import Link from 'next/link';

const Section = styled.section`
  background: #252525;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-shadow: black 0px -8px 6px -6px;
  * {
    flex: 1 1 33.3%;
  }
`;

const Footer = (props: any) => (
  <Section>
    <div>
      <p>
        "Excellence is an art won by training and habituation. We do not act
        rightly because we have virtue or excellence, but we rather have those
        because we have acted rightly. We are what we repeatedly do. Excellence,
        then, is not an act but a habit."
      </p>
      <p>-Aristotle</p>
    </div>
    <div>
      <Link href='#header'>
        <a>
          <FaArrowAltCircleUp />
        </a>
      </Link>
      <p>Back to the top</p>
    </div>
    <div>
      <Socials />
      <p>Timothy Hoang © {new Date().getFullYear()}</p>
    </div>
  </Section>
);

export default Footer;
