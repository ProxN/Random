import 'normalize.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>Welecom To Random App</Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
