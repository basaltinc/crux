const baseBabelConfig = require('./bedrock-babel-config');
// This babel config preserves ES Modules (import/export) instead of changing them into Common JS (require/module.exports) for things that can understand them like WebPack so it can do tree shaking.
module.exports = baseBabelConfig(true);
