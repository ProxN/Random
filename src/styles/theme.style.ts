import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
  colors: {
    primary: {
      dark: '#151529',
      mid: '#1a1a35',
      light: '#202040',
    },
    gray: {
      dark: '#d9d9ec',
      mid: '#e4e4f2',
      light: '#efeff7',
    },
    yellow: {
      dark: '#ffa801',
    },
  },
  fonts: {
    primary: '"Cairo", sans-serif',
    secondary: '"Dosis", sans-serif',
  },
  fontSizes: {
    small: '14px',
    regular: '16px',
    medium: '20px',
    large: '40px',
  },
  headerHeight: '100px',
};
export default Theme;
