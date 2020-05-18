import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: {
      dark: '#151529',
      mid: '#1b1b34',
      light: '#21213f',
      light2: '#26264b',
      light3: '#3d3d78',
    },
    secondary: {
      dark: '#ffc60e',
      mid: '#ffd652',
      light: '#ffeaa7',
    },
    gray: {
      dark: '#d9d9ec',
      mid: '#e4e4f2',
      light: '#efeff7',
    },
  },
  fonts: {
    primary: '"Cairo", sans-serif',
    secondary: 'Fira Sans, sans-serif',
  },
  fontSizes: {
    small: '14px',
    regular: '16px',
    medium: '20px',
    large: '24px',
    h1: '50px',
    h2: '28px',
  },
  headerHeight: '100px',
};
export default Theme;
