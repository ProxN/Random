import 'normalize.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import Layout from './components/Layout';
import Home from './pages/Home';
import List from './pages/List';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/random/:name' component={List} exact />

            <Redirect to='/' />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
