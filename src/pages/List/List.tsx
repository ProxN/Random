import React from 'react';
import { ListSection, Heading } from './styles';
import RandomList from './components/RandomList';

const List: React.FC = () => {
  return (
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
