import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of breakpoints
 */
export async function getBreakpoints() {
  const breakpointsFile = await fs.readFile(
    join(
      __dirname,
      '../../source/_patterns/00-styleguide/00-breakpoints/breakpoints.json',
    ),
    'utf8',
  );
  const breakpoints = JSON.parse(breakpointsFile);
  return breakpoints.items;
}
