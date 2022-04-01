import styled from 'styled-components';
import { skills } from '../assets/GlobalData';

const Section = styled.section`
  h2 {
    text-align: left;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    @media (min-width: 320px) {
      flex-direction: column;
    }
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export default function Skills() {
  const generateSkillColumn = (title: string, skills: Array<string>) => (
    <article>
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </article>
  );

  return (
    <Section id='skills'>
      <h2>Skills</h2>
      <hr />
      <div>
        {generateSkillColumn('Front-End', skills.frontEnd)}
        {generateSkillColumn('Back-End', skills.backEnd)}
        {generateSkillColumn('Other', skills.other)}
      </div>
    </Section>
  );
}
