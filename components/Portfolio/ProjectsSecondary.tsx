import ProjectsTemplate from './ProjectsTemplate';
import { projectsSecondary } from '../../assets/GlobalData';

export const ProjectsSecondary = () => (
  <>
    <h1>ProjectsSecondary</h1>
    <div>
      {projectsSecondary.map((project) => {
        return <ProjectsTemplate key={project.name} project={project} />;
      })}
    </div>
  </>
);
