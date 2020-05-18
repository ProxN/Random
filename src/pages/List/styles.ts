import styled, { css } from 'styled-components';

export const ListSection = styled.section`
  padding: 50px 100px;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.h2};
    span {
      color: ${theme.colors.secondary.light};
    }
  `};
  text-transform: capitalize;
  line-height: 15px;
`;
