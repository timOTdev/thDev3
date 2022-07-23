import styled from 'styled-components';
import Image from 'next/image';
import { introduction } from '../assets/GlobalData';

const Section = styled.section`
  margin: 2rem 0;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  img {
    box-shadow: ${({ theme }) => theme.shadowColor};
    border-radius: 50%;
  }
`;
const HeaderContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
`;
const TextContainer = styled.div`
  margin: 0 auto;
  max-width: 90%;
  text-align: left;
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 2568px) {
    max-width: 70%;
  }
`;

export default function Introduction() {
  return (
    <Section>
      <ImageContainer>
        <Image
          priority
          alt='profile image'
          src='/images/profile.png'
          layout='fill'
        />
      </ImageContainer>
      <HeaderContainer>
        <h1>Hello, I'm Tim.</h1>
        <h4>
          I'm a Frontend Engineer at MadHive.
        </h4>
      </HeaderContainer>
      <TextContainer>
        {introduction.map((text, index) => (
          <div key={index}>
            <p>{text}</p>
          </div>
        ))}
      </TextContainer>
    </Section>
  );
}
