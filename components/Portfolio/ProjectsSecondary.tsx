import styled from 'styled-components';
import ProjectsTemplate from './ProjectsTemplate';
import { projectsSecondary } from '../../assets/GlobalData';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function ProjectsSecondary() {
  return (
    <ProjectsContainer>
      {projectsSecondary.map((project) => (
        <ProjectsTemplate key={project.name} project={project} />
      ))}
    </ProjectsContainer>
  );
}
