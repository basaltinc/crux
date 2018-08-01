import fs from 'fs-extra';
import { join } from 'path';

const patternsDir = join(__dirname, '../../pattern-lab/source/_patterns/');

// having problems with jsdoc returns promise that resolves with object
/* eslint-disable jsdoc/check-types */

/**
 * Get Pattern Info
 * @param {string} id - Which Pattern to get; i.e. `media-block`
 * @param {Object} options - Some options
 * @param {string} [options.type = 'component'] - The type
 * @returns {Promise<{ok: bool, id: string, title: string, schema: object, template: string}>} - Info about it
 */
export async function getPatternInfo(id, { type = 'component' } = {}) {
  let subDir;
  let twigNamespace;
  let pathPrefix;
  switch (type) {
    case 'styleguide' || 'styleguides':
      subDir = '00-styleguide';
      twigNamespace = '@styleguide';
      pathPrefix = '/patterns/styleguide/';
      break;
    case 'layout' || 'layouts':
      subDir = '02-layouts';
      twigNamespace = '@layouts';
      pathPrefix = '/patterns/layouts/';
      break;
    case 'component' || 'components':
      subDir = '03-components';
      twigNamespace = '@components';
      pathPrefix = '/patterns/components/';
      break;
    case 'template' || 'templates':
      subDir = '04-templates';
      twigNamespace = '@templates';
      pathPrefix = '/patterns/templates/';
      break;
    default:
      subDir = '03-components';
      twigNamespace = '@components';
      pathPrefix = '/patterns/components/';
  }

  const subDirPath = join(patternsDir, subDir);
  const patternDir = join(subDirPath, id);
  const patternPath = join(patternDir, `_${id}.twig`);
  const template = `${twigNamespace}/_${id}.twig`;
  // const pattern = await fs.readFile(patternPath, 'utf8');
  const schemaPath = join(patternDir, `${id}-schema.json`);

  let patternPathExists;
  try {
    await fs.access(patternPath);
    patternPathExists = true;
  } catch (e) {
    patternPathExists = false;
  }

  if (!patternPathExists) {
    return {
      ok: false,
      message: `Could not find Pattern ${template} when looking for it at ${patternPath}`,
    };
  }

  let hasSchema;
  let schema;
  try {
    schema = await fs
      .readFile(schemaPath, 'utf8')
      .then(file => JSON.parse(file));
    hasSchema = true;
  } catch (e) {
    hasSchema = false;
  }

  const results = {
    id,
    ok: patternPathExists,
    template,
    path: `${pathPrefix}${id}`,
  };
  if (hasSchema) {
    results.title = schema.title;
    results.schema = schema;
  }

  // console.log(results);
  return results;
}

export async function getPatterns(type) {
  const types = {
    components: ['hero', 'media-tile', 'media-block', 'avatar', 'basic-block'],
  };

  const ids = types[type];
  const patterns = await Promise.all(
    ids.map(id => getPatternInfo(id, { type })),
  );
  // console.log(patterns);
  return patterns;
}
