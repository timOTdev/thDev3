import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;

export default function SecondComponent() {
  return (
    <>
      <H1>SecondComponent</H1>
    </>
  );
}
