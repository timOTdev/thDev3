import { useState } from 'react';
import styled from 'styled-components';
import { ProjectsPrimary } from './Portfolio/ProjectsPrimary';
import { ProjectsSecondary } from './Portfolio/ProjectsSecondary';

const Section = styled.section`
  margin: 0 auto;
  @media (min-width: 320px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  text-align: left;
`;

export default function Portfolio(props: any) {
  const [showSecondary, setShowSecondary] = useState(false);
  return (
    <Section>
      <Title>Portfolio</Title>
      <hr />
      <ProjectsPrimary />
      {showSecondary ? (
        <button onClick={() => setShowSecondary((prevCheck) => !prevCheck)}>
          Hide projects
        </button>
      ) : (
        <button onClick={() => setShowSecondary((prevCheck) => !prevCheck)}>
          More projects
        </button>
      )}
      {showSecondary ? <ProjectsSecondary /> : ''}
    </Section>
  );
}
