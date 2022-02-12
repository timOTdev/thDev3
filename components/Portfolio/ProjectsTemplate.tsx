import Image from 'next/image';
import styled from 'styled-components';
import { FaLaptop, FaYoutube, FaGithub } from 'react-icons/fa';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 3px;
  padding: 1rem;
  margin: 1rem;
  h3 {
    margin: 0.5rem;
  }
  @media (min-width: 320px) {
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    max-width: 60%;
    p {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1024px) {
    max-width: 28%;
    margin: 0.5rem;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  * {
    border-radius: 3px;
  }
  @media (min-width: 320px) {
    min-height: 150px;
  }
  @media (min-width: 375px) {
    min-height: 190px;
  }
  @media (min-width: 425px) {
    min-height: 300px;
  }
  @media (min-width: 768px) {
    min-height: 270px;
  }
  @media (min-width: 1024px) {
    min-height: 180px;
  }
  @media (min-width: 1440px) {
    min-height: 240px;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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

export default ({
  project,
}: {
  project: {
    name: string;
    description: string;
    preview: string;
    demo: string;
    video?: string;
    github?: string;
  };
}) => (
  <Card>
    <a href={project.demo}>
      <ImageContainer>
        <Image src={project.preview} layout='fill' />
      </ImageContainer>
    </a>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <IconsContainer>
      {project.demo ? (
        <a href={project.video} target='_blank'>
          <FaLaptop />
        </a>
      ) : (
        ''
      )}
      {project.video ? (
        <a href={project.video} target='_blank'>
          <FaYoutube />
        </a>
      ) : (
        ''
      )}
      {project.github ? (
        <a href={project.github} target='_blank'>
          <FaGithub />
        </a>
      ) : (
        ''
      )}
    </IconsContainer>
  </Card>
);
