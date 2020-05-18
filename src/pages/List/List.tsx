import React, { useState, useEffect } from 'react';
import { ListSection, Heading } from './styles';
import RandomList from './components/RandomList';
import Loader from '../../components/Loader';

const List: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });
  return isLoading ? (
    <Loader />
  ) : (
    <ListSection>
      <Heading>
        Random
        <span> Movies.</span>
      </Heading>
      <RandomList />
    </ListSection>
  );
};

export default List;
