import React from 'react';
import ListContainer from './RandomList.styles';
import ListItem from './ListItem';

const RandomList: React.FC = () => {
  return (
    <ListContainer>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ListContainer>
  );
};

export default RandomList;
