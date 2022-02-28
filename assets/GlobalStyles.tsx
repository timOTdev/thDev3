import { createGlobalStyle } from 'styled-components';

// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// @media (min-width: 320px) {}
// @media (min-width: 375px) {}
// @media (min-width: 425px) {}
// @media (min-width: 768px) {}
// @media (min-width: 1024px) {}
// @media (min-width: 1440px) {}
// @media (min-width: 2560px) {}

interface ThemeType {
  backgroundColor: string;
  textColor: string;
  underlineColor: string;
  rulerColor: string;
  buttonBorder: string;
  buttonColor: string;
  buttonBackground: string;
  shadowColor: string;
}

export const themeColors = {
  white: '#f5f5f5',
  metallic: '#585858',
  slate: '#252525',
  darkslate: '#1c1f21',
  obsidian: '#1d1c21',
  teal: '#8bc7ce',
  sky: '#8aaae5',
};

export const darkTheme = {
  backgroundColor: themeColors.darkslate,
  textColor: themeColors.white,
  underlineColor: themeColors.teal,
  rulerColor: themeColors.teal,
  buttonBorder: themeColors.teal,
  buttonColor: themeColors.teal,
  buttonBackground: themeColors.metallic,
  shadowColor: `1px 1px 5px ${themeColors.metallic}`,
};

export const lightTheme = {
  backgroundColor: themeColors.white,
  textColor: themeColors.darkslate,
  underlineColor: themeColors.sky,
  rulerColor: themeColors.sky,
  buttonBorder: themeColors.sky,
  buttonColor: themeColors.sky,
  buttonBackground: themeColors.obsidian,
  shadowColor: `1px 1px 5px ${themeColors.obsidian}`,
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  html {
    scroll-behavior: smooth;
  }
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Quicksand', sans-serif;
    font-size: 62.5%;
    margin: 0 auto;
    box-sizing: border-box;
    width: 90%;
    max-width: 1440px;
    text-align: center;
  }
  h1 {
    @media (min-width: 320px) {
      font-size: 2rem;
    }
  }
  h2 {
    color: ${({ theme }) => theme.underlineColor};
    @media (min-width: 320px) {
      font-size: 1.8rem;
    }
  }
  h3 {
    text-decoration: underline;
    @media (min-width: 320px) {
      font-size: 1.7rem;
    }
  }
  h4 {
    @media (min-width: 320px) {
      font-size: 1.6rem;
    }
  }
  h5 {
    @media (min-width: 320px) {
      font-size: 1.4rem;
    }
  }
  h6 {
    @media (min-width: 320px) {
      font-size: 1.3rem;
    }
  }
  p, th, td, li, input, textarea {
    @media (min-width: 320px) {
      font-size: 1.2rem;
    }
    @media (min-width: 2568px) {
      font-size: 1.4rem;
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    border-bottom: 2px solid ${({ theme }) => theme.backgroundColor};
    :hover {
      border-bottom: 2px solid ${({ theme }) => theme.underlineColor};
    }
    @media (min-width: 320px) {
      font-size: 1.4rem;
    }
    @media (min-width: 2560px) {
      font-size: 1.6rem;
    }
  }
  svg {
    @media (min-width: 320px) {
      height: 30px;
      width: 30px;
    }
    @media (min-width: 768px) {
      height: 40px;
      width: 40px;
    }
    @media (min-width: 1440px) {
      height: 40px;
      width: 40px;
    }
    @media (min-width: 2560px) {
      height: 60px;
      width: 60px;
    }
  }
  button {
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.underlineColor};
    background: ${({ theme }) => theme.buttonBackground};
    border: 2px solid ${({ theme }) => theme.buttonBorder};
    box-shadow: ${({ theme }) => theme.shadowColor};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.buttonBackground};
      background: ${({ theme }) => theme.underlineColor};
      border: 2px solid ${({ theme }) => theme.buttonBackground};
    }
  }
  hr {
    border-color: ${({ theme }) => theme.rulerColor};
    margin-bottom: 1rem;
  }
`;
