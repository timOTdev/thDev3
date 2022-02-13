import styled from 'styled-components';
import { timeline, accolades } from '../assets/GlobalData';

const Section = styled.section`
  h2 {
    text-align: left;
  }
`;
const Title = styled.h1`
  text-align: left;
`;
const Timeline = styled.table`
  margin: 2rem auto;
  text-align: left;
  th,
  td {
    padding: 0.5rem 1.5rem;
  }
  @media (min-width: 2560px) {
    th,
    td {
      padding: 1rem 2rem;
    }
  }
`;
const Accolades = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default () => (
  <Section>
    <h2>Career</h2>
    <hr />
    <h3>Timeline</h3>
    <Timeline>
      <tbody>{generateTimeline()}</tbody>
    </Timeline>
    <h3>Accolades</h3>
    <Accolades>{generateAccolades()}</Accolades>
  </Section>
);

const generateTimeline = () =>
  timeline.years.map((item, index) => (
    <tr key={index}>
      <th>{item}</th>
      <td>{timeline.experiences[index]}</td>
    </tr>
  ));

const generateAccolades = () =>
  accolades.map((accolade, index) => (
    <a
      key={index}
      href={accolade.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <button>{accolade.name}</button>
    </a>
  ));
