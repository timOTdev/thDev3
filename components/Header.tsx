import Link from 'next/link';
import { links } from '../assets/GlobalData';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import Image from 'next/image';
import GlobalContext from '../assets/GlobalContext';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
const Brand = styled.div`
  flex: 1 1 20%;
`;
const Navigation = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a {
    margin: 0.3rem;
    padding: 0.5rem;
    border-bottom: ${({ theme }) => theme.yBorderColor};
    border-left: ${({ theme }) => theme.xBorderColor};
    border-right: ${({ theme }) => theme.xBorderColor};
    :hover {
      border-bottom: ${(props) => props.theme.xBorderColor};
      border-left: ${(props) => props.theme.yBorderColor};
      border-right: ${(props) => props.theme.yBorderColor};
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Socials = styled.div`
  flex: 1 1 30%;
  display: flex;
  justify-content: space-around;
  a {
    margin: 0.5rem;
    padding: 0.5rem;
    border-left: ${({ theme }) => theme.xBorderColor};
    border-right: ${({ theme }) => theme.xBorderColor};
    :hover {
      border-left: ${(props) => props.theme.yBorderColor};
      border-right: ${(props) => props.theme.yBorderColor};
    }
  }
`;

const Header = () => (
  <Section>
    <Brand>
      <GlobalContext.Consumer>
        {(data) =>
          data.theme == 'dark' ? (
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/logo_dark.png'
                  height={200}
                  width={200}
                />
              </a>
            </Link>
          ) : (
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/logo_light.png'
                  height={200}
                  width={200}
                />
              </a>
            </Link>
          )
        }
      </GlobalContext.Consumer>
    </Brand>

    <Navigation>
      <Link href='#portfolio'>Portfolio</Link>
      <Link href='#career'>Career</Link>
      <Link href='#blog'>Blog</Link>
      <a href={links.resume.url} target='_blank' rel='noopener noreferrer'>
        Resume
      </a>
      <Link href='#contact'>Contact</Link>
    </Navigation>

    <Socials>
      <a href={links.github.url} target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
      <a href={links.linkedIn.url} target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href={links.twitter.url} target='_blank' rel='noopener noreferrer'>
        <FaTwitter />
      </a>
    </Socials>
  </Section>
);

export default Header;
