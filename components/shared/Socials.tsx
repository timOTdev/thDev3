import { links } from '../../assets/GlobalData';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const Socials = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    margin: 1rem;
    padding: 1rem;
    border-left: ${({ theme }) => theme.xBorderColor};
    border-right: ${({ theme }) => theme.xBorderColor};
    :hover {
      border-left: ${(props) => props.theme.yBorderColor};
      border-right: ${(props) => props.theme.yBorderColor};
    }
  }
  svg {
    width: 30px;
    height: 30px;
  }
  * {
    flex: 1 1 33.3%;
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
