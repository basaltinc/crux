const fontPath = '/assets/fonts'; // No trailing slash
export const addGlobalFonts = `
  @font-face {
      font-family: "AvenirLight";
      src: url("${fontPath}/avenir--light.woff2") format("woff2"), url("${fontPath}/avenir--light.woff") format("woff"), url("${fontPath}/avenir--light.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "AvenirMedium";
      src: url("${fontPath}/avenir--medium.woff2") format("woff2"), url("${fontPath}/avenir--medium.woff") format("woff"), url("${fontPath}/avenir--medium.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "DinCondensed";
      src: url("${fontPath}/din-condensed--regular.woff2") format("woff2"), url("${fontPath}/din-condensed--regular.woff") format("woff"), url("${fontPath}/din-condensed--regular.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
    }
`;
