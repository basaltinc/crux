import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
    // borders
    --border-radius: 0;
    --border-color: #CCC;
    
    // colors
    --type-color--component: #16394B;
    //@todo Lets get these colors to be within the same palette as our core colors (coming from the design system). Perhaps move these defaults to Bedrock and override here with Crux flavors
    --type-color--layout: #FFA000;
    --type-color--typography: #16394B;
    --type-color--icon: #536dfe;
    --type-color--color: #00695c;
    --type-color--none: #000;
  
    --type-color--component-accent: #CFE3DE;
    --type-color--layout-accent: #fff5e6;
    --type-color--typography-accent: #e3dfcc;
    --type-color--icon-accent: #e2e7ff;
    --type-color--color-accent: #d0f3ee;
    --type-color--none-accent: #e0e0e0;
    
    --spacing-xs: 4px;
    --spacing-s: 8px;
    --spacing-m: 16px;
    --spacing-l: 32px;
    --spacing-xl: 64px;
    }


    @charset "UTF-8";
    * {
      box-sizing: border-box;
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
    .eyebrow {
      color: grey;
      margin-bottom: 0;
    }
    // @todo Consider breaking this out into a typography globals for this site
    // @todo Properly import the fonts
    @font-face {
      font-family: "AvenirLight";
      src: url("fonts/avenir--light.woff2") format("woff2"), url("fonts/avenir--light.woff") format("woff"), url("fonts/avenir--light.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "AvenirMedium";
      src: url("fonts/avenir--medium.woff2") format("woff2"), url("fonts/avenir--medium.woff") format("woff"), url("fonts/avenir--medium.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "DinCondensed";
      src: url("fonts/din-condensed--regular.woff2") format("woff2"), url("fonts/din-condensed--regular.woff") format("woff"), url("fonts/din-condensed--regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    h1, .h1 {
      font-family: "AvenirMedium", sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: 1.25;
      font-size: 2.65rem;
    }
    h1:first-child, .h1:first-child {
      margin-top: 0;
    }
    h1:last-child, .h1:last-child {
      margin-bottom: 0;
    }
    @media (min-width: 380px) {
      h1, .h1 {
        font-size: 3.25rem;
      }
    }
    h2, .h2 {
      font-family: "AvenirMedium", sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: 1.25;
      font-size: 1.65rem;
    }
    h2:first-child, .h2:first-child {
      margin-top: 0;
    }
    h2:last-child, .h2:last-child {
      margin-bottom: 0;
    }
    @media (min-width: 380px) {
      h2, .h2 {
        font-size: 2.25rem;
      }
    }
    h3, .h3 {
      font-family: "AvenirMedium", sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: 1.25;
      font-size: 1.45rem;
    }
    h3:first-child, .h3:first-child {
      margin-top: 0;
    }
    h3:last-child, .h3:last-child {
      margin-bottom: 0;
    }
    @media (min-width: 380px) {
      h3, .h3 {
        font-size: 1.75rem;
      }
    }
    h4, .h4 {
      font-family: "AvenirMedium", sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: 1.25;
      font-size: 1.25rem;
    }
    h4:first-child, .h4:first-child {
      margin-top: 0;
    }
    h4:last-child, .h4:last-child {
      margin-bottom: 0;
    }
    h5, .h5 {
      font-family: "AvenirMedium", sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: 1.25;
      font-size: 1rem;
    }
    h5:first-child, .h5:first-child {
      margin-top: 0;
    }
    h5:last-child, .h5:last-child {
      margin-bottom: 0;
    }
    h6, .h6 {
      font-family: "AvenirMedium", sans-serif;
      margin-top: 0;
      margin-bottom: 1rem;
      line-height: 1.25;
      font-size: 0.875rem;
    }
    h6:first-child, .h6:first-child {
      margin-top: 0;
    }
    h6:last-child, .h6:last-child {
      margin-bottom: 0;
    }
    html {
      font-size: 14px;
    }
    @media screen and (min-width: 380px) {
      html {
        font-size: calc(14px + 4 * (100vw - 380px) / 920);
      }
    }
    @media screen and (min-width: 1300px) {
      html {
        font-size: 18px;
      }
    }
    body {
      font-family: "AvenirLight", sans-serif;
      color: black;
      font-size: 1rem;
      line-height: 1.5;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0 0 1.5rem;
    }
    p:last-child {
      margin-bottom: 0;
    }
    ul,
    ol {
      margin: 0 0 1rem;
    }
    li {
      margin: 0 0 1rem;
    }
    a, a:link, a:visited {
      color: #16394b;
      text-decoration: underline;
    }
    a:hover, a:focus, a:active {
      color: #215873;
      text-decoration: underline;
    }
    b,
    strong {
      font-family: "AvenirMedium", sans-serif;
    }
    blockquote {
      font-style: italic;
      border-left: solid 3px #d8d8da;
      margin: 2rem auto 2rem 1.5rem;
      padding-left: 1.5rem;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    hr {
      border-style: solid;
      border-width: 1px 0 0;
      color: currentColor;
      width: 75%;
    }
    //@todo Once Shadows are on the server, remove this from global import
    .crux-shadow--inset {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24) !important;
    }
    .crux-shadow--inset--animated {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.12), inset 0 1px 2px rgba(0,0,0,0.24) !important;
    }
    .crux-shadow--inset--animated:active, .crux-shadow--inset--animated:focus, .crux-shadow--inset--animated:hover {
      transform: translateY(-2px) !important;
      box-shadow: !important;
    }
    .crux-shadow--xsmall {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 1px 2px 1px rgba(6, 10, 36, 0.08) !important;
    }
    .crux-shadow--xsmall--animated {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 1px 2px 1px rgba(6, 10, 36, 0.08) !important;
    }
    .crux-shadow--xsmall--animated:active, .crux-shadow--xsmall--animated:focus, .crux-shadow--xsmall--animated:hover {
      transform: translateY(-2px) !important;
      box-shadow:  !important;
    }
    .crux-shadow--small {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 1px 4px 1px rgba(6, 10, 36, 0.1), 0 5px 10px 0 rgba(6, 10, 36, 0.08) !important;
    }
    .crux-shadow--small--animated {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 1px 4px 1px rgba(6, 10, 36, 0.1), 0 5px 10px 0 rgba(6, 10, 36, 0.08) !important;
    }
    .crux-shadow--small--animated:active, .crux-shadow--small--animated:focus, .crux-shadow--small--animated:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 1px 8px 1px rgba(6, 10, 36, 0.18), 0 5px 10px 1px rgba(6, 10, 36, 0.15), 0 15px 30px 0 rgba(6, 10, 36, 0.16) !important;
    }
    .crux-shadow--medium {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 8px 15px 1px rgba(6, 10, 36, 0.1), 0 18px 24px 1px rgba(6, 10, 36, 0.12) !important;
    }
    .crux-shadow--medium--animated {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 8px 15px 1px rgba(6, 10, 36, 0.1), 0 18px 24px 1px rgba(6, 10, 36, 0.12) !important;
    }
    .crux-shadow--medium--animated:active, .crux-shadow--medium--animated:focus, .crux-shadow--medium--animated:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 15px 1px rgba(6, 10, 36, 0.1), 0 24px 36px 1px rgba(6, 10, 36, 0.18), 0 35px 50px 0 rgba(6, 10, 36, 0.25) !important;
    }
    .crux-shadow--large {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 10px 20px 1px rgba(6, 10, 36, 0.1), 0 24px 36px 1px rgba(6, 10, 36, 0.18) !important;
    }
    .crux-shadow--large--animated {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 10px 20px 1px rgba(6, 10, 36, 0.1), 0 24px 36px 1px rgba(6, 10, 36, 0.18) !important;
    }
    .crux-shadow--large--animated:active, .crux-shadow--large--animated:focus, .crux-shadow--large--animated:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 10px 20px 1px rgba(6, 10, 36, 0.1), 0 36px 49px 1px rgba(6, 10, 36, 0.2), 0 45px 65px 0 rgba(6, 10, 36, 0.3) !important;
    }
    .crux-shadow--xlarge {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 10px 30px 1px rgba(6, 10, 36, 0.1), 0 40px 48px 1px rgba(6, 10, 36, 0.25) !important;
    }
    .crux-shadow--xlarge--animated {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      box-shadow: 0 10px 30px 1px rgba(6, 10, 36, 0.1), 0 40px 48px 1px rgba(6, 10, 36, 0.25) !important;
    }
    .crux-shadow--xlarge--animated:active, .crux-shadow--xlarge--animated:focus, .crux-shadow--xlarge--animated:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 10px 30px 1px rgba(6, 10, 36, 0.1), 0 50px 70px 1px rgba(6, 10, 36, 0.2), 0 55px 80px 0 rgba(6, 10, 36, 0.3) !important;
    }
    //@todo Once icons are on the server, remove this from global import
    @font-face {
      font-family: "icons";
      src: url("icons.eot?cachebust=6070");
      src: url("icons.eot?cachebust=16020#iefix") format("eot"), url("icons.woff?cachebust=74270") format("woff"), url("icons.ttf?cachebust=21064") format("truetype"), url("icons.svg?cachebust=84096#icons") format("svg");
      font-weight: normal;
      font-style: normal;
    }
    /**
     * Font application to generic DOM
     */
    [class*="icon--"] {
      font-family: "icons";
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      font-weight: normal;
      font-style: normal;
      speak: none;
      text-decoration: inherit;
      text-transform: none;
      text-rendering: optimizeLegibility;
    }
    .icon--close::before {
      content: "";
    }
    .icon--facebook::before {
      content: "";
    }
    .icon--icon-black-grey::before {
      content: "";
    }
    .icon--icon-black::before {
      content: "";
    }
    .icon--icon-color::before {
      content: "";
    }
    .icon--instagram::before {
      content: "";
    }
    .icon--linkedin::before {
      content: "";
    }
    .icon--menu::before {
      content: "";
    }
    .icon--search::before {
      content: "";
    }
    .icon--twitter::before {
      content: "";
    }
`;

export default GlobalStyles;
