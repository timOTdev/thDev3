import Image from 'next/image';
import styled from 'styled-components';
import { FaLaptop, FaYoutube, FaGithub } from 'react-icons/fa';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  border: 2px solid ${({ theme }) => theme.textColor};
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
    max-width: 25%;
    margin: 0.5rem;
  }
  @media (min-width: 2568px) {
    max-width: 28%;
    margin: 0.5rem;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
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
    min-height: 220px;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    padding: 0.5rem;
  }
`;

interface ProjectTypes {
  name: string;
  description: string;
  preview: string;
  demo: string;
  video?: string;
  github?: string;
}

export default function ProjectsTemplate({
  project,
}: {
  project: ProjectTypes;
}) {
  return (
    <Card>
      <h4>{project.name}</h4>
      <a href={project.demo}>
        <ImageContainer>
          <Image
            alt={project.name}
            src={project.preview}
            layout='fill'
            objectFit='contain'
          />
        </ImageContainer>
      </a>
      <p>{project.description}</p>
      <IconsContainer>
        {project.demo ? (
          <a href={project.video} target='_blank' rel='noopener noreferrer'>
            <FaLaptop />
          </a>
        ) : (
          ''
        )}
        {project.video ? (
          <a href={project.video} target='_blank' rel='noopener noreferrer'>
            <FaYoutube />
          </a>
        ) : (
          ''
        )}
        {project.github ? (
          <a href={project.github} target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>
        ) : (
          ''
        )}
      </IconsContainer>
    </Card>
  );
}
