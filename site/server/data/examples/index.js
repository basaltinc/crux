import fs from 'fs-extra';
import path from 'path';

const getPath = id => path.join(__dirname, `./${id}.json`);

/**
 * Get Example
 * @param {string} id - ID of Example to get
 * @return {Object} - Data for the Example
 */
export async function getExample(id) {
  const fileString = await fs.readFile(getPath(id), 'utf8');
  return JSON.parse(fileString);
}
