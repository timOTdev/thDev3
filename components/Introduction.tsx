import styled from 'styled-components';
import Image from 'next/image';

const P1 = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;

export default function Introduction() {
  return (
    <section>
      <Image priority src='/images/profile.png' height={144} width={144} />
      <P1>
        Hi, I'm a software engineer building elegant software across the full
        stack. I love learning about technology, finances, and blockchain. I've
        held titles of Web Applications Developer, Associate Full Stack Software
        Engineer, Frontend Developer, and Pharamacist.
      </P1>
    </section>
  );
}
