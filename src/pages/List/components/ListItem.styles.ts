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
  display: block;
  text-align: center;
`;
