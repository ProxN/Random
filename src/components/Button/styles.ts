import styled, { css } from 'styled-components';

export default styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.gray.light};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.small};
    background: ${theme.colors.primary.light};
    border: 2px solid ${theme.colors.primary.light2};
  `};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 2px;
  text-transform: uppercase;
`;
