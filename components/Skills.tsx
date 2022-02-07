import { skills } from '../assets/GlobalData';
export default () => (
  <>
    <h1>Front-End Skills</h1>
    {skills.frontEnd.map((skill) => (
      <p>{skill}</p>
    ))}
    <h1>Back-End Skills</h1>
    {skills.backEnd.map((skill) => (
      <p>{skill}</p>
    ))}
    <h1>Other Skills</h1>
    {skills.other.map((skill) => (
      <p>{skill}</p>
    ))}
  </>
);
