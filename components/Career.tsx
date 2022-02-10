import styled from 'styled-components';
import { timeline, accolades } from '../assets/GlobalData';

const Section = styled.section`
  h3 {
    text-decoration: underline;
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
    <Title>Career</Title>
    <hr />
    <h3>Timeline</h3>
    <Timeline>
      <tbody>{generateTimeline()}</tbody>
    </Timeline>
    <h3>Accolades</h3>
    <Accolades>{generateAccolades()}</Accolades>
  </Section>
);

function generateTimeline() {
  return timeline.years.map((item, index) => {
    return (
      <tr key={index}>
        <th>{item}</th>
        <td>{timeline.experiences[index]}</td>
      </tr>
    );
  });
}

const generateAccolades = () => {
  return accolades.map((accolade, index) => {
    return (
      <a
        key={index}
        href={accolade.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <button>{accolade.name}</button>
      </a>
    );
  });
};
