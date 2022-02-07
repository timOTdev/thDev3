import ProjectsTemplate from './ProjectsTemplate';
import { projectsPrimary } from '../../assets/GlobalData';

export const ProjectsPrimary = () => (
  <>
    <h1>ProjectsPrimary</h1>
    <div>
      {projectsPrimary.map((project) => {
        return <ProjectsTemplate key={project.name} project={project} />;
      })}
    </div>
  </>
);
