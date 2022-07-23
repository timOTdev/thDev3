import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { links } from '../../assets/GlobalData';

const Div = styled.div`
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

export default function Socials() {
  return (
    <Div>
      <a href={links.github.href} target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
      <a href={links.linkedIn.href} target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
      <a href={links.twitter.href} target='_blank' rel='noopener noreferrer'>
        <FaTwitter />
      </a>
    </Div>
  );
}
