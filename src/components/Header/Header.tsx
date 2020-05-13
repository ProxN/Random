import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Navbar, LogoLink } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <LogoLink as={Link} to='/'>
          <span />
          Random
        </LogoLink>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
