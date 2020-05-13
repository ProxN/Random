import styled from 'styled-components';

const LayoutContainer = styled.article`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.main`
  min-height: ${({ theme }) => `calc(100% - ${theme.headerHeight})`};
`;

export default LayoutContainer;
