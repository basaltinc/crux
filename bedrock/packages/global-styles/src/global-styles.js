import { createGlobalStyle } from 'styled-components';
import { GlobalFonts } from './fonts';
import { GlobalTypography } from './typography';
import { GlobalShadows } from './shadows';
import { GlobalIcons } from './icons';

const GlobalStyles = createGlobalStyle`
    @charset "UTF-8";
    ${GlobalFonts}
    * {
      box-sizing: ${props => props.theme.global.box_sizing};
    }
    html {
      font-size: ${props => props.theme.fonts.sizes.xs};
    }
    @media screen and (min-width: 380px) {
      html {
        font-size: calc(${props =>
          props.theme.fonts.sizes.xs} + 4 * (100vw - 380px) / 920);
      }
    }
    @media screen and (min-width: 1300px) {
      html {
        font-size: ${props => props.theme.fonts.sizes.m};
      }
    }
    body {
      font-family: ${props => props.theme.fonts.families.avenirLight};
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
    ${GlobalTypography}
    //@todo Once Shadows are on the server, remove this from global import
    ${GlobalShadows}
    //@todo Once icons are on the server, remove this from global import
    ${GlobalIcons}
`;

export default GlobalStyles;
