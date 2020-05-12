import React, { ReactNode } from 'react';
import GlobalStyles from '../../styles/globa.style';
import LayoutContainer from './styles';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
