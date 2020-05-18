import React from 'react';
import {
  Item,
  ListItemImgLink,
  ListItemImg,
  ListItemTitle,
} from './ListItem.styles';

const ListItem: React.FC = () => {
  return (
    <Item>
      <ListItemImgLink>
        <ListItemImg src='https://image.tmdb.org/t/p/w220_and_h330_face/fi8EvaWtL5CvoielOjjVvTr7ux3.jpg' />
      </ListItemImgLink>
      <ListItemTitle>
        The Jungle Book&nbsp;
        <span>(2019)</span>
      </ListItemTitle>
    </Item>
  );
};

export default ListItem;
