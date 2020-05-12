import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        height:100%;
        width:100%;
    }
    
    #root,
    body{
        width:100%;
        height:100%;
    }

    body{
        line-height:normal;
        font-weight:normal;
        ${({ theme }) => css`
          background-color: ${theme.colors.primary.mid};
          font-size: ${theme.fontSizes.regular};
          color: ${theme.colors.gray.light};
          font-family: ${theme.fonts.primary};
        `};
    }

    a{
        text-decoration:none;
    }

    h1,h2,h3,h4,h5,h6{
        font-size: ${({ theme }) => theme.fontSizes.regular};
        font-weight:normal;
        font-family:${({ theme }) => theme.fonts.secondary};
        margin:0;
    }

`;
