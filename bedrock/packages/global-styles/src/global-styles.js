import { createGlobalStyle } from 'styled-components';
import { addGlobalFonts } from './fonts';
import { addGlobalTypography } from './typography';
import { addGlobalShadows } from './shadows';

const GlobalStyles = createGlobalStyle`
    @charset "UTF-8";
    ${addGlobalFonts}
    * {
      box-sizing: ${props => props.theme.global.box_sizing};
    }
    html {
      font-size: ${props => props.theme.fonts.sizes.xs};
    }
    @media screen and (min-width: 380px) {
      html {
        font-size: calc${props => props.theme.fonts.sizes.s};
      }
    }
    @media screen and (min-width: 1300px) {
      html {
        font-size: ${props => props.theme.fonts.sizes.m};
      }
    }
    body {
      font-family: ${props => props.theme.fonts.families.avenir.light};
      color: black;
      font-size: ${props => props.theme.fonts.sizes.body};
      line-height: 1.5;
      margin: 0;
      padding: 0;
    }
    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
    main {
      display: block;
    }
    details summary:hover {
      cursor: pointer;
    }
    details:active, details:focus {
      outline: none;
    }
    :focus {
      outline-color: #CFE3DE;
    }
    hr {
      border-style: solid;
      border-width: 1px 0 0;
      color: currentColor;
      width: 75%;
    }
    ${props => addGlobalTypography(props.theme)}
    //@todo Once Shadows are on the server, remove this from global import
    ${addGlobalShadows}
`;

export default GlobalStyles;
