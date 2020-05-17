import styled, { css, keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
`;

export const Navbar = styled.nav`
  padding: 0 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Animation = keyframes`
    from {
        transform:translateY(0);
    }
 
    to {
        transform:translateY(10px);
    }
`;

export const LogoLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium};
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.gray.light};
  `};
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  span {
    width: 10px;
    display: block;
    background: ${({ theme }) => theme.colors.secondary.dark};
    margin-right: 5px;
    height: 10px;
    border-radius: 50%;
    box-shadow: inset -4px -3px 4px -2px rgba(0, 0, 0, 0.5),
      0 0 15px rgba(0, 0, 0, 0.8);
    background-image: -webkit-linear-gradient(
      -45deg,
      rgba(255, 255, 220, 0.3) 0%,
      transparent 100%
    );
  }
  :hover span {
    animation: ${Animation} 0.9s infinite alternate;
  }
`;
