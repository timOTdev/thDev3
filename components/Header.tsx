import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Socials from './shared/Socials';

const Section = styled.section`
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
  flex: 1 1 25%;
`;
const Navigation = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  a {
    padding: 1rem;
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
    <Section id='header'>
      <Brand>
        {theme == 'dark' ? (
          <Link href='/'>
            <a>
              <Image
                alt='logo_dark'
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
                alt='logo_light'
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
        <Link href='#skills'>Skills</Link>
        <Link href='#blog'>Blog</Link>
        <Link href='#contact'>Contact</Link>
        <button onClick={() => toggleTheme(theme)}>
          {theme == 'dark' ? <span>☀️</span> : <span>🌙</span>}
        </button>
      </Navigation>

      <Socials />
    </Section>
  );
}
