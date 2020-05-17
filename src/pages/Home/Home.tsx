import React from 'react';
import { HomeContainer, HomeContent } from './styles';
import Random from './components/Random';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Random />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
