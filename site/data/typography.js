import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of colors
 */
export async function getFontFamilies() {
  const fontFamiliesFile = await fs.readFile(
    join(
      __dirname,
      '../../pattern-lab/source/_patterns/00-styleguide/15-typography/font-families.json',
    ),
    'utf8',
  );
  const fontFamilies = JSON.parse(fontFamiliesFile);
  return fontFamilies.items;
}

/**
 * @returns {Array<Object>} - An array of colors
 */
export async function getFontSizes() {
  const fontSizesFile = await fs.readFile(
    join(
      __dirname,
      '../../pattern-lab/source/_patterns/00-styleguide/15-typography/font-sizes.json',
    ),
    'utf8',
  );
  const fontSizes = JSON.parse(fontSizesFile);
  return fontSizes.items;
}
