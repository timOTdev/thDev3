import styled from 'styled-components';
import { ProjectsPrimary } from './Portfolio/ProjectsPrimary';
import { ProjectsSecondary } from './Portfolio/ProjectsSecondary';

const P1 = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;

export default function Portfolio(props: any) {
  return (
    <section>
      <P1>Portfolio</P1>
      <hr />
      <ProjectsPrimary />
      <ProjectsSecondary />
      <button>More projects</button>
    </section>
  );
}
