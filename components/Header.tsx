import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Socials from './shared/Socials';
import { links } from '../assets/GlobalData';

const Section = styled.section`
  width: 90%;
  margin: 0 auto;
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
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a {
    padding: 1rem;
    border-bottom: ${(props) => props.theme.xBorderColor};
    :hover {
      border-bottom: ${({ theme }) => theme.yBorderColor};
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

interface PropTypes {
  theme: string;
  toggleTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ theme, toggleTheme }: PropTypes) {
  return (
    <Section>
      <Brand>
        {theme == 'dark' ? (
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
        )}
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

      <Socials />

      <button onClick={() => toggleTheme(theme)}>
        {theme == 'dark' ? <span>☀️</span> : <span>🌙</span>}
      </button>
    </Section>
  );
}
