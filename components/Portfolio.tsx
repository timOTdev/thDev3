import { useState } from 'react';
import styled from 'styled-components';
import ProjectsPrimary from './Portfolio/ProjectsPrimary';
import ProjectsSecondary from './Portfolio/ProjectsSecondary';

const Section = styled.section`
  margin: 0 auto;
  h2 {
    text-align: left;
  }
  button {
    margin: 3rem 0;
  }
  @media (min-width: 320px) {
    width: 100%;
  }
`;

export default () => {
  const [showSecondary, setShowSecondary] = useState(false);
  return (
    <Section>
      <h2>Portfolio</h2>
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
};
