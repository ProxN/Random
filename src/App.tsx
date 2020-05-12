import 'normalize.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>Welecom To Random App</Layout>
    </ThemeProvider>
  );
};

export default App;
