import styled, { css } from 'styled-components';

export const Item = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid};
    border: 1px solid ${theme.colors.primary.light};
  `};
  border-radius: 4px;
  box-shadow: 0 0 20px -3px rgba(0, 0, 0, 0.3);
`;

export const ListItemImgLink = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ListItemImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ListItemTitle = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.gray.mid};
    font-size: ${theme.fontSizes.small};
    span {
      color: ${theme.colors.secondary.light};
    }
  `};
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SvgContainer = styled.div`
  max-width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.light};
  svg {
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.colors.primary.dark};
  }
`;
