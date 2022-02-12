import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyles, lightTheme, darkTheme } from '../assets/GlobalStyles';
import GlobalContext from '../assets/GlobalContext';

interface globalsInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState('dark');
  const globals: globalsInterface = {
    theme,
    setTheme,
  };
  return (
    <GlobalContext.Provider value={globals}>
      <>
        <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    </GlobalContext.Provider>
  );
};
