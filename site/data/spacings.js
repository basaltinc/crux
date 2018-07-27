import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of colors
 */
export async function getSpacings() {
  const spacingsFile = await fs.readFile(
    join(
      __dirname,
      '../../pattern-lab/source/_patterns/00-styleguide/10-spacing/spacing.json',
    ),
    'utf8',
  );
  const spacings = JSON.parse(spacingsFile);
  return spacings.items;
}
