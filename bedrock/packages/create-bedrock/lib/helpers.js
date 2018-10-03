const fs = require('fs-extra');
const path = require('path');
const os = require('os');

/**
 * @param {Object} packageJson - Contents of package.json
 * @return {string} - path to new package.json file
 */
function writePackageJson(packageJson) {
  const content = JSON.stringify(packageJson, null, 2) + os.EOL;
  const packageJsonPath = path.resolve('package.json');

  fs.writeFileSync(packageJsonPath, content, 'utf8');
  return packageJsonPath;
}

module.exports = {
  writePackageJson,
};
