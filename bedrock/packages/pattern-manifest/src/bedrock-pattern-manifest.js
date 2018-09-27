const os = require('os');
const fs = require('fs-extra');
const { join } = require('path');
const globby = require('globby');
const {
  validateSchemaAndAssignDefaults,
} = require('@basalt/bedrock-schema-utils');
const chokidar = require('chokidar');
const patternSchema = require('./pattern.schema');
const patternMetaSchema = require('./pattern-meta.schema');

class BedrockPatternManifest {
  /**
   * @param {Object} options - Options
   * @param {string[]} options.patternPaths - Array of path strings for patterns
   */
  constructor({ patternPaths }) {
    this.patternsDirs = globby
      .sync(patternPaths, {
        expandDirectories: true,
        onlyFiles: false,
      })
      .filter(thePath => fs.statSync(thePath).isDirectory());

    this.getPatterns = this.getPatterns.bind(this);
    this.getPattern = this.getPattern.bind(this);
    this.getPatternMeta = this.getPatternMeta.bind(this);
    this.setPatternMeta = this.setPatternMeta.bind(this);
    this.createPatternsData = this.createPatternsData.bind(this);
    this.updatePatternsData = this.updatePatternsData.bind(this);
    this.watch = this.watch.bind(this);

    this.allPatterns = this.createPatternsData();
  }

  createPatternsData() {
    const patterns = [];

    this.patternsDirs.forEach(dir => {
      // Clearing the `require()` cache so we can run this function many times
      // See https://nodejs.org/api/modules.html#modules_require_cache
      // @todo Only clear the `require()` cache for the files that have changed, instead of rebuilding the whole thing if a single file changes. Though it'll be hard in the case of nested Patterns.
      Object.keys(require.cache)
        .filter(cachedPath => cachedPath.startsWith(dir))
        .forEach(cachedPath => delete require.cache[cachedPath]);
      try {
        // eslint-disable-next-line
        const pattern = require(dir);
        if (pattern) {
          const results = validateSchemaAndAssignDefaults(
            patternSchema,
            pattern,
          );
          if (!results.ok) {
            const name = dir.split('/').pop();
            console.log();
            console.error(
              `Error! Pattern Schema validation failed for "${name}"`,
              results.message,
            );
            console.error(
              'Review the "index.js" in that folder and compare to "pattern.schema.json"',
            );
            console.log();
            process.exit(1);
          }

          const metaFilePath = join(dir, pattern.metaFilePath);
          // eslint-disable-next-line
          const patternMeta = require(metaFilePath);
          const metaResults = validateSchemaAndAssignDefaults(
            patternMetaSchema,
            patternMeta,
          );
          if (!metaResults.ok) {
            const name = dir.split('/').pop();
            console.log();
            console.error(
              `Error! Pattern Schema validation failed for "${name}"`,
              results.message,
            );
            console.error(
              `Review the "${
                pattern.metaFilePath
              }" in that folder and compare to "pattern.schema.json"`,
              metaFilePath,
            );
            console.log();
            process.exit(1);
          }

          patterns.push({
            ...results.data,
            metaFilePath, // replaces original relative one with absolute path
            meta: metaResults.data,
          });
        }
      } catch (e) {
        // if it failed it's b/c it didn't have a `index.js` to grab; that's ok
      }
    });

    return patterns;
  }

  updatePatternsData() {
    this.allPatterns = this.createPatternsData();
  }

  /**
   * Get Pattern
   * @param {string} id - Which Pattern to get; i.e. `media-block`
   * @returns {Object} -  info about it
   */
  getPattern(id) {
    return this.allPatterns.find(p => p.id === id);
  }

  /**
   * Get Patterns
   * @returns {Object[]} - Collection of pattern meta
   */
  getPatterns() {
    return this.allPatterns;
  }

  getPatternMeta(id) {
    const pattern = this.getPattern(id);
    return pattern.meta;
  }

  async setPatternMeta(id, meta) {
    const pattern = this.getPattern(id);
    try {
      await fs.writeFile(
        pattern.metaFilePath,
        JSON.stringify(meta, null, '  ') + os.EOL,
      );
      return {
        ok: true,
        message: `Pattern Meta for ${id} saved successfully`,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.toString(),
      };
    }
  }

  watch(cb) {
    const watcher = chokidar.watch(this.patternsDirs.map(d => join(d, '**')), {
      ignoreInitial: true,
      cwd: __dirname,
      ignore: ['**/node_modules/**', '*.scss'],
    });

    watcher.on('all', (event, path) => {
      this.updatePatternsData();
      cb({ event, path });
    });
  }
}

module.exports = BedrockPatternManifest;
