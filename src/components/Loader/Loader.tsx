import React from 'react';
import { LoaderContainer, LoaderWrapper, Circle } from './styles';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </LoaderWrapper>
    </LoaderContainer>
  );
};

export default Loader;
