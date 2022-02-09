import styled from 'styled-components';
import ProjectsTemplate from './ProjectsTemplate';
import { projectsPrimary } from '../../assets/GlobalData';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ProjectsPrimary = () => (
  <ProjectsContainer>
    {projectsPrimary.map((project, index) => {
      return <ProjectsTemplate key={index} project={project} />;
    })}
  </ProjectsContainer>
);
