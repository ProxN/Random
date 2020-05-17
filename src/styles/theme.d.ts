import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        mid: string;
        light: string;
        light2: string;
        light3: string;
      };
      secondary: {
        dark: string;
        mid: string;
        light: string;
      };
      gray: {
        dark: string;
        mid: string;
        light: string;
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
