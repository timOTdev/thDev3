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

export default function Portfolio() {
  const [showSecondary, setShowSecondary] = useState(false);
  const makeButton = (text: string) => (
    <button onClick={() => setShowSecondary((prevCheck) => !prevCheck)}>
      {text}
    </button>
  );
  return (
    <Section>
      <h2>Portfolio</h2>
      <hr />
      <ProjectsPrimary />
      {showSecondary
        ? makeButton('Hide projects')
        : makeButton('More projects')}
      {showSecondary ? <ProjectsSecondary /> : ''}
    </Section>
  );
}
