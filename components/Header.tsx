import Link from 'next/link';
import { links } from '../assets/GlobalData';
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Brand = styled.div``;
const Navigation = styled.div``;
const Socials = styled.div``;

const Header = (props: any) => (
  <Section>
    <Brand>
      <Link href='/'>
        <h1>Timothy Hoang</h1>
      </Link>
    </Brand>

    <Navigation>
      <a href={links.resume.url} target='_blank' rel='noopener noreferrer'>
        Resume
      </a>
      <Link href='#portfolio'>Portfolio</Link>
      <Link href='#about'>About</Link>
      <Link href='#contact'>Contact</Link>
      <Link href='/blog'>Blog</Link>
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
      <a href={links.youtube.url} target='_blank' rel='noopener noreferrer'>
        <FaYoutube />
      </a>
    </Socials>
  </Section>
);

export default Header;
