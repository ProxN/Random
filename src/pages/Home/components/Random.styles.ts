import styled, { css } from 'styled-components';

export const RandomContainer = styled.div`
  padding: 30px 20px;
  width: 500px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.mid};
  box-shadow: 0 0 20px -3px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray.dark};
    font-size: ${theme.fontSizes.medium};
    span {
      color: ${theme.colors.secondary.mid};
    }
  `};
  font-weight: 400;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;

  label {
    flex-basis: 48%;
    margin-bottom: 15px;
  }
`;
export const ButtonAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  button {
    width: 150px;
  }
`;
