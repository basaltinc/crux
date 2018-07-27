import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of colors
 */
export async function getColors() {
  const colorsFile = await fs.readFile(
    join(
      __dirname,
      '../../pattern-lab/source/_patterns/00-styleguide/05-colors/colors.json',
    ),
    'utf8',
  );
  const colors = JSON.parse(colorsFile);
  return colors.items;
}
