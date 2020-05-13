import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        mid: string;
        light: string;
      };
      gray: {
        dark: string;
        mid: string;
        light: string;
      };
      yellow: {
        dark: string;
      };
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      small: string;
      regular: string;
      medium: string;
      large: string;
    };
    headerHeight: string;
  }
}
