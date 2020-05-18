import styled, { css, keyframes } from 'styled-components';

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  width: 80px;
  flex-wrap: wrap;
`;

const Animation = keyframes`
    from {
      background:#26264b;
    }
 
    to {
       background:#ffc60e;
    }
`;
export const Circle = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary.light2};
  `};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
  :not(:last-child) {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  animation: ${Animation} 1s infinite alternate;
  :nth-child(1) {
    animation-delay: 0.1s;
  }
  :nth-child(2) {
    animation-delay: 0.2s;
  }
  :nth-child(2) {
    animation-delay: 0.3s;
  }
  :nth-child(3) {
    animation-delay: 0.4s;
  }
  :nth-child(4) {
    animation-delay: 0.5s;
  }
  :nth-child(5) {
    animation-delay: 0.6s;
  }
  :nth-child(6) {
    animation-delay: 0.7s;
  }
  :nth-child(7) {
    animation-delay: 0.8s;
  }
  :nth-child(8) {
    animation-delay: 0.9s;
  }
  :nth-child(9) {
    animation-delay: 1s;
  }
`;
