import styled, { css } from 'styled-components';

interface StyleProps {
  checked: boolean;
}

export const RadioWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.light};
    border: 2px solid ${theme.colors.primary.light2};
  `};
  padding: 6px 10px;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  :hover {
    border-color: ${({ theme }) => theme.colors.primary.light3};
  }
`;

export const RadioCircle = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray.light};
  `}
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: '';
    position: absolute;
    height: 10px;
    width: 10px;
    background: #a583e7;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Label = styled.label<StyleProps>`
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      ${RadioWrapper} {
        border-color: ${props.theme.colors.primary.light3};
      }
      ${RadioCircle}::before {
        transform: scale(1);
      }
    `}
`;

export const RadioText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-family: ${theme.fontSizes.regular};
  `};
  text-transform: capitalize;
  margin-left: 10px;
`;

export const RadioInput = styled.input`
  display: none;
`;
