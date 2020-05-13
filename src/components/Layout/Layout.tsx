import React, { ReactNode } from 'react';
import GlobalStyles from '../../styles/globa.style';
import LayoutContainer, { Wrapper } from './styles';
import Header from '../Header';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <Header />
      <Wrapper>{children}</Wrapper>
    </LayoutContainer>
  );
};

export default Layout;
