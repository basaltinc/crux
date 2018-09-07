import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of Transitions
 */
export async function getTransitions() {
  const transitionsFile = await fs.readFile(
    join(
      __dirname,
      '../../../crux-assets/_patterns/00-styleguide/animations/01-transitions/transitions.json',
    ),
    'utf8',
  );
  const transitions = JSON.parse(transitionsFile);
  return transitions.items;
}
