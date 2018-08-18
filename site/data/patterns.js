import fs from 'fs-extra';
import { join, parse } from 'path';
import globby from 'globby';
import Ajv from 'ajv';
import chokidar from 'chokidar';
import events, { eventNames } from '../server/events';
import patternMetaSchema from './pattern-meta.schema.json';

const ajv = new Ajv();
const validatePatternMetaSchema = ajv.compile(patternMetaSchema);
const patternsDir = join(__dirname, '../../source/_patterns/');
const patternsDirs = globby.sync([join(patternsDir, '*/*')], {
  expandDirectories: true,
  onlyFiles: false,
});
let allPatterns = [];

function createPatternsData() {
  const patterns = [];

  patternsDirs.forEach(dir => {
    if (fs.statSync(dir).isDirectory()) {
      // Clearing the `require()` cache so we can run this function many times
      // See https://nodejs.org/api/modules.html#modules_require_cache
      // @todo Only clear the `require()` cache for the files that have changed
      Object.keys(require.cache)
        .filter(cachedPath => cachedPath.startsWith(dir))
        .forEach(cachedPath => delete require.cache[cachedPath]);
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

  return patterns;
}

export function updatePatternsData() {
  allPatterns = createPatternsData();
}

updatePatternsData();

const watcher = chokidar.watch(patternsDirs.map(d => join(d, '**')), {
  ignoreInitial: true,
  cwd: __dirname,
  ignore: ['**/node_modules/**'],
});

watcher.on('all', (event, path) => {
  // console.log(event, path);
  const { ext } = parse(path);
  switch (ext) {
    case '.scss':
      break;
    case '.twig':
      events.emit(eventNames.PATTERN_CHANGED, { ext, path, event });
      break;
    default:
      updatePatternsData();
      events.emit(eventNames.PATTERN_CHANGED, { ext, path, event });
  }
});

/**
 * Get Pattern Meta
 * @param {string} id - Which Pattern to get; i.e. `media-block`
 * @returns {Object} - Meta info about it
 */
export function getPatternMeta(id) {
  return allPatterns.find(p => p.id === id);
}

/**
 * Get Patterns
 * @param {string} [type] - Type of Pattern (optional)
 * @returns {Object[]} - Collection of pattern meta
 */
export function getPatterns(type) {
  return type ? allPatterns.filter(p => p.type === type) : allPatterns;
}
