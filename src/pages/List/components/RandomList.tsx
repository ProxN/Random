import React from 'react';
import ListContainer from './RandomList.styles';
import ListItem from './ListItem';
import { Item } from '../../../interfaces/index.d';

interface Props {
  data: Array<Item>;
}

const RandomList: React.FC<Props> = ({ data }) => {
  return (
    <ListContainer>
      {data.map((el) => (
        <ListItem item={el} />
      ))}
    </ListContainer>
  );
};

export default RandomList;
