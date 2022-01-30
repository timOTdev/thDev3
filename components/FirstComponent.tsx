import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;

export default function FirstComponent() {
  return (
    <>
      <H1>FirstComponent</H1>
    </>
  );
}
