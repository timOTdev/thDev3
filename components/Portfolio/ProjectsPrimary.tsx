import styled from 'styled-components';
import ProjectsTemplate from './ProjectsTemplate';
import { projectsPrimary } from '../../assets/GlobalData';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default () => (
  <ProjectsContainer>
    {projectsPrimary.map((project, index) => (
      <ProjectsTemplate key={index} project={project} />
    ))}
  </ProjectsContainer>
);
