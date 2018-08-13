import fs from 'fs-extra';
import { join } from 'path';
import globby from 'globby';
import Ajv from 'ajv';
import patternMetaSchema from './pattern-meta.schema.json';

const ajv = new Ajv();
const validatePatternMetaSchema = ajv.compile(patternMetaSchema);

const patternsDir = join(__dirname, '../../pattern-lab/source/_patterns/');

const patterns = [];

globby
  .sync([join(patternsDir, '*/*')], {
    expandDirectories: true,
    onlyFiles: false,
  })
  .forEach(dir => {
    if (fs.statSync(dir).isDirectory()) {
      try {
        // eslint-disable-next-line
        const pattern = require(dir);
        if (pattern.meta) {
          const isValid = validatePatternMetaSchema(pattern.meta);
          if (!isValid) {
            const name = dir.split('/').pop();
            console.log();
            console.error(
              `Error! Pattern Meta Schema validation failed for "${name}"`,
            );
            console.error(
              'Review the "meta" export from "index.js" in that folder and compare to "pattern-meta.schema.json"',
            );
            console.error(validatePatternMetaSchema.errors);
            console.log();
            process.exit(1);
          }
          patterns.push(pattern.meta);
        }
      } catch (e) {
        // if it failed it's b/c it didn't have a `index.js` to grab; that's ok
      }
    }
  });

// console.log({ patterns });

/**
 * Get Pattern Info
 * @param {string} id - Which Pattern to get; i.e. `media-block`
 * @returns {Object} - Meta info about it
 */
export function getPatternInfo(id) {
  return patterns.find(p => p.id === id);
}

/**
 * Get Patterns
 * @param {string} [type] - Type of Pattern (optional)
 * @returns {Object[]} - Collection of pattern meta
 */
export function getPatterns(type) {
  return type ? patterns.filter(p => p.type === type) : patterns;
}
