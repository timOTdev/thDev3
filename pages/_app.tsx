import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyles, lightTheme, darkTheme } from '../assets/GlobalStyles';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  };

  const globals: {
    theme: string;
    toggleTheme: React.Dispatch<React.SetStateAction<string>>;
  } = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} {...globals} />
    </ThemeProvider>
  );
}
