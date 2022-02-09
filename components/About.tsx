import { aboutHistory } from '../assets/GlobalData';
export default () => (
  <>
    <h1>About</h1>
    {aboutHistory.map((item) => (
      <p>{item}</p>
    ))}
  </>
);
