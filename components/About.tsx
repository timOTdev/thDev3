import { aboutHistory, aboutDescription } from '../assets/GlobalData';
export default () => (
  <>
    <h1>About</h1>
    {aboutHistory.map((item) => (
      <p>{item}</p>
    ))}
    <hr />
    {aboutDescription.map((item) => (
      <p>{item}</p>
    ))}
  </>
);
