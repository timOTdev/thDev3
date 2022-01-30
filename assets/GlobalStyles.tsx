import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-size: 24px;
    box-sizing: border-box;
  }
`;

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
  // backgroundColor: themeColors.slate,
  backgroundColor: 'red',
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
