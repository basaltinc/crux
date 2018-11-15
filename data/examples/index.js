const fs = require('fs-extra');
const path = require('path');

const getPath = id => path.join(__dirname, `./${id}.json`);

/**
 * Get Example
 * @param {string} id - ID of Example to get
 * @return {Object} - Data for the Example
 */
async function getExample(id) {
  const fileString = await fs.readFile(getPath(id), 'utf8');
  return JSON.parse(fileString);
}

async function getExamples() {
  const files = await fs.readdir(__dirname);
  const filePaths = files
    .filter(filePath => filePath.endsWith('json'))
    .map(filePath => path.join(__dirname, filePath));

  return Promise.all(
    filePaths.map(async filePath => {
      const fileString = await fs.readFile(filePath, 'utf8');
      return JSON.parse(fileString);
    }),
  );
}

async function setExample(id, data) {
  await fs.writeFile(getPath(id), JSON.stringify(data, null, '  '));
  return {
    ok: true,
    message: `Example ${id} saved successfully!`,
  };
}

module.exports = {
  getExample,
  getExamples,
  setExample,
};
