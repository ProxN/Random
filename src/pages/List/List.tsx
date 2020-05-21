import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Request from '../../api/request';
import RandomList from './components/RandomList';
import Loader from '../../components/Loader';
import { Item } from '../../interfaces/index.d';
import { ListSection, Heading } from './styles';

const List: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Item[] | []>([]);
  const { name } = useParams();

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      const res = await Request(name);
      setData(res);
      setIsLoading(false);
    };
    onLoad();
  }, [name]);
  return isLoading ? (
    <Loader />
  ) : (
    <ListSection>
      <Heading>
        Random
        <span> {name}.</span>
      </Heading>
      <RandomList data={data} />
    </ListSection>
  );
};

export default List;
