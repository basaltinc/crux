const fs = require('fs-extra');
const { join } = require('path');
const Color = require('color');

/**
 * @returns {Array<Object>} - An array of Transitions
 */
async function getTransitions() {
  const transitionsFile = await fs.readFile(
    join(
      __dirname,
      '../_patterns/00-styleguide/animations/01-transitions/transitions.json',
    ),
    'utf8',
  );
  const transitions = JSON.parse(transitionsFile);
  return transitions.items;
}

/**
 * @returns {Array<Object>} - An array of breakpoints
 */
async function getBreakpoints() {
  const breakpointsFile = await fs.readFile(
    join(
      __dirname,
      '../_patterns/00-styleguide/00-breakpoints/breakpoints.json',
    ),
    'utf8',
  );
  const breakpoints = JSON.parse(breakpointsFile);
  return breakpoints.items;
}

/**
 * @param {string} format - Color format; one of 'hsl', 'rgb', 'hex'
 * @returns {Array<Object>} - An array of colors
 */
async function getColors({ format = 'hsl' } = {}) {
  const colorsFile = await fs.readFile(
    join(__dirname, '../_patterns/00-styleguide/05-colors/colors.json'),
    'utf8',
  );
  const colors = JSON.parse(colorsFile);
  return colors.items.map(color => {
    const theColor = Color(color.value);
    switch (format) {
      case 'hsl':
        color.value = theColor.hsl().string();
        break;
      case 'rgb':
        color.value = theColor.rgb().string();
        break;
      case 'hex':
        color.value = theColor.hex();
        break;
      default:
        color.value = color;
        break;
    }
    return color;
  });
}

/**
 * @returns {Array<Object>} - An array of Release Notes
 */
async function getReleaseNotes() {
  const releaseNotesFile = await fs.readFile(
    join(__dirname, '../dist/changelog.json'),
    'utf8',
  );
  const releaseNotes = JSON.parse(releaseNotesFile);
  return releaseNotes;
}

/**
 * @returns {Array<Object>} - An array of Spacings
 */
async function getSpacings() {
  const spacingsFile = await fs.readFile(
    join(__dirname, '../_patterns/00-styleguide/10-spacing/spacing.json'),
    'utf8',
  );
  const spacings = JSON.parse(spacingsFile);
  return spacings.items;
}

async function getTypography() {
  const fontFamiliesFile = await fs.readFile(
    join(
      __dirname,
      '../_patterns/00-styleguide/15-typography/font-families.json',
    ),
    'utf8',
  );
  const fontFamilies = JSON.parse(fontFamiliesFile);

  const fontSizesFile = await fs.readFile(
    join(__dirname, '../_patterns/00-styleguide/15-typography/font-sizes.json'),
    'utf8',
  );
  const fontSizes = JSON.parse(fontSizesFile);

  return {
    fontFamilies: fontFamilies.items,
    fontSizes: fontSizes.items,
  };
}

module.exports = {
  getTransitions,
  getBreakpoints,
  getColors,
  getReleaseNotes,
  getSpacings,
  getTypography,
};
