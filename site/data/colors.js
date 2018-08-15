import fs from 'fs-extra';
import { join } from 'path';
import { convertColor } from '../src/bedrock/packages/utils/src/index';

/**
 * @param {string} format - Color format; one of 'hsl', 'rgb', 'hex'
 * @returns {Array<Object>} - An array of colors
 */
export async function getColors(format) {
  const colorsFile = await fs.readFile(
    join(
      __dirname,
      '../../source/_patterns/00-styleguide/05-colors/colors.json',
    ),
    'utf8',
  );
  const colors = JSON.parse(colorsFile);
  return colors.items.map(color => {
    color.value = convertColor(color.value, format);
    return color;
  });
}
