import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of Release Notes
 */
export async function getReleaseNotes() {
  const releaseNotesFile = await fs.readFile(
    join(__dirname, '../../../source/dist/changelog.json'),
    'utf8',
  );
  const releaseNotes = JSON.parse(releaseNotesFile);
  return releaseNotes;
}
