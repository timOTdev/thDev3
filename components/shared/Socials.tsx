import { links } from '../../assets/GlobalData';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const Socials = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 25%;
  a {
    padding: 1rem;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export default () => (
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
);
