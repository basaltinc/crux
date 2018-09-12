// Anything that uses `process.env` should be sure to set it in `webpack.config.js` in `DefinePlugin` as well so client has access to environmental vars too.
// @todo Pull config in from whatever api-server is powering this for the below values
export const websocketsPort = 5042;
export const DragTypes = {
  SLICE: 'SLICE',
};

// The below configuration values have been ported to bedrock context provider and should not be used
// @todo remove these ?
export const apiUrlBase = 'http://localhost:3042/api';
export const cruxCssUrl = 'http://localhost:3042/assets/crux.css';
export const cruxJsUrl = 'http://localhost:3042/assets/crux.js';
export const assetUrlBase = '/assets/';
export const isDebug = true;
export const isDevMode = process.env.DEV_MODE === 'yes';
export const isProd = process.env.NODE_ENV === 'production';
