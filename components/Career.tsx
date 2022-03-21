import styled from 'styled-components';
import { timeline, accolades } from '../assets/GlobalData';

const Section = styled.section`
  h2 {
    text-align: left;
  }
  table {
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
  }
  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default function Career() {
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

  return (
    <Section id='career'>
      <h2>Career</h2>
      <hr />
      <table>
        <tbody>{generateTimeline()}</tbody>
      </table>
      <h3>Accolades</h3>
      <div>{generateAccolades()}</div>
    </Section>
  );
}
