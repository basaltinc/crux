import { createGlobalStyle } from 'styled-components';
import { addGlobalFonts } from './fonts';
import { addGlobalTypography } from './typography';
import { addGlobalShadows } from './shadows';

const GlobalStyles = createGlobalStyle`
    @charset "UTF-8";
    ${addGlobalFonts}
    * {
      box-sizing: ${props => props.theme.globals.boxSizing};
    }
    .eyebrow {
      color: ${props => props.theme.eyebrows.color};
      font-size: ${props => props.theme.eyebrows.fontSize};
      font-family: ${props => props.theme.eyebrows.fontFamily};
      margin-bottom: 0;
    }
    body {
      color: ${props => props.theme.body.color};
      font-family: ${props => props.theme.body.fontFamily};
      font-size: ${props => props.theme.body.fontSize};
      line-height: ${props => props.theme.body.lineHeight};
      margin: ${props => props.theme.body.margin};
      padding: ${props => props.theme.body.padding};
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
