import fs from 'fs-extra';
import { join } from 'path';

/**
 * @returns {Array<Object>} - An array of device widths
 */
export async function getDeviceWidths() {
  const deviceWidthsFile = await fs.readFile(
    join(
      __dirname,
      '../../pattern-lab/source/_data/device_widths.json',
    ),
    'utf8',
  );
  const devicewidths = JSON.parse(deviceWidthsFile);
  return devicewidths.device_widths;
}
