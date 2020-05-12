import 'normalize.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globa.style';
import theme from './styles/theme.style';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      Welecom To Random App
    </ThemeProvider>
  );
};

export default App;
