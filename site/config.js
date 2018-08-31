// Anything that uses `process.env` should be sure to set it in `webpack.config.js` in `DefinePlugin` as well so client has access to environmental vars too.
export const websocketsPort = 5042;
export const apiUrlBase = '/api';
export const assetUrlBase = '/assets/';
export const isDebug = true;
export const isDevMode = process.env.DEV_MODE === 'yes';
export const isProd = process.env.NODE_ENV === 'production';
export const DragTypes = {
  SLICE: 'SLICE',
};
