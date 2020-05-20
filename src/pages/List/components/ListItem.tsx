import React from 'react';
import { IoMdImage } from 'react-icons/io';
import { Item as Iitem } from '../../../interfaces/index.d';
import {
  Item,
  ListItemImgLink,
  ListItemImg,
  ListItemTitle,
  SvgContainer,
} from './ListItem.styles';

interface Props {
  item: Iitem;
}

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <Item>
      <ListItemImgLink>
        {item.image ? (
          <ListItemImg src={item.image} />
        ) : (
          <SvgContainer>
            <IoMdImage />
          </SvgContainer>
        )}
      </ListItemImgLink>
      <ListItemTitle>
        <p>{item.title}</p>
        &nbsp;
        <span>{`(${item.year})`}</span>
      </ListItemTitle>
    </Item>
  );
};

export default ListItem;
