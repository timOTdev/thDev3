import { createGlobalStyle } from 'styled-components';

// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// @media (min-width: 320px) {}
// @media (min-width: 375px) {}
// @media (min-width: 425px) {}
// @media (min-width: 768px) {}
// @media (min-width: 1024px) {}
// @media (min-width: 1440px) {}
// @media (min-width: 2560px) {}

export const themeColors = {
  slate: '#1d1e22',
  gray: '#ababab',
  white: '#f5f5f5',
  purple: '#3333ff',
  orange: '#ffcc00',
  teal: '#8bd8bd',
  forest: '#295f2d',
  sky: '#8aaae5',
  metallic: '#585858',
};

export const darkTheme = {
  textColor: `${themeColors.white}`,
  backgroundColor: themeColors.slate,
  yBorderColor: `2px solid ${themeColors.gray}`,
  xBorderColor: `2px solid ${themeColors.slate}`,
  separatorColor: `3px solid ${themeColors.white}`,
  imageShadow: `1px 1px 5px ${themeColors.gray}`,
  buttonShadow: `1px 1px 5px ${themeColors.teal}`,
  themeToggleButton: themeColors.teal,
  buttonBackground: themeColors.metallic,
  buttonBorder: themeColors.teal,
  underlineColor: themeColors.teal,
  socialIconColor: themeColors.white,
};

export const lightTheme = {
  textColor: themeColors.slate,
  backgroundColor: themeColors.white,
  yBorderColor: `2px solid ${themeColors.slate}`,
  xBorderColor: `2px solid ${themeColors.white}`,
  separatorColor: `3px solid ${themeColors.slate}`,
  themeToggleButton: themeColors.sky,
  imageShadow: `1px 1px 5px ${themeColors.slate}`,
  buttonBackground: themeColors.metallic,
  buttonShadow: `1px 1px 5px ${themeColors.sky}`,
  underlineColor: themeColors.sky,
  socialIconColor: themeColors.slate,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    font-size: 62.5%;
    margin: 0 auto;
    padding: 0 0.5rem;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
  }
  h1 {
    @media (min-width: 320px) {
      font-size: 1.8rem;
    }
  }
  h2 {
    @media (min-width: 320px) {
      font-size: 1.7rem;
    }
  }
  h3 {
    @media (min-width: 320px) {
      font-size: 1.6rem;
    }
  }
  h4 {
    @media (min-width: 320px) {
      font-size: 1.5rem;
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
  p, th, td {
    @media (min-width: 320px) {
      font-size: 1.2rem;
    }
    @media (min-width: 2568px) {
      font-size: 1.6rem;
    }
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    @media (min-width: 320px) {
      font-size: 1.4rem;
    }
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
    @media (min-width: 1440px) {
      font-size: 1.8rem;
    }
    @media (min-width: 2560px) {
      font-size: 2.4rem;
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
`;
