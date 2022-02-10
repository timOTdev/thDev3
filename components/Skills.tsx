import styled from 'styled-components';
import { skills } from '../assets/GlobalData';

const Title = styled.h1`
  text-align: left;
`;
const Skills = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default () => (
  <>
    <Title>Skills</Title>
    <hr />
    <Skills>
      {generateSkillColumn('Front-End', skills.frontEnd)}
      {generateSkillColumn('Back-End', skills.backEnd)}
      {generateSkillColumn('Other', skills.other)}
    </Skills>
  </>
);

function generateSkillColumn(title: string, skills: Array<string>) {
  return (
    <div>
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
}
