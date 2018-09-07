import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of Spacings
 */
export async function getSpacings() {
  const spacingsFile = await fs.readFile(
    join(
      __dirname,
      '../../../crux-assets/_patterns/00-styleguide/10-spacing/spacing.json',
    ),
    'utf8',
  );
  const spacings = JSON.parse(spacingsFile);
  return spacings.items;
}
