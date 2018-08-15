import { getColors } from './colors';
import { getTransitions } from './animations';
import { getBreakpoints } from './breakpoints';
import { getDeviceWidths } from './devicewidths';
import { getPatternMeta, getPatterns } from './patterns';
import { getReleaseNotes } from './releasenotes';
import { getSpacings } from './spacings';
import { getFontFamilies, getFontSizes } from './typography';

describe('Data Get Functions', () => {
  test('Colors', async () => {
    expect(await getColors()).toMatchSnapshot();
    expect(await getColors('rgb')).toMatchSnapshot();
    expect(await getColors('hex')).toMatchSnapshot();
  });

  test('Transitions', async () => {
    expect(await getTransitions()).toMatchSnapshot();
  });

  test('Breakpoints', async () => {
    expect(await getBreakpoints()).toMatchSnapshot();
  });

  test('DeviceWidths', async () => {
    expect(await getDeviceWidths()).toMatchSnapshot();
  });

  test('PatternMeta', async () => {
    const results = await getPatternMeta('media-block');
    expect(results).toHaveProperty('id', 'media-block');
    expect(results).toHaveProperty('title');
    expect(results.templates.length > 0).toBe(true);
  });

  test('Patterns', async () => {
    const results = await getPatterns();
    expect(results.length > 0).toBe(true);
  });

  test('ReleaseNotes', async () => {
    const results = await getReleaseNotes();
    console.log(results);
    expect(results.length > 0).toBe(true);
  });

  test('getSpacings', async () => {
    expect(await getSpacings()).toMatchSnapshot();
  });

  test('getFontFamilies', async () => {
    expect(await getFontFamilies()).toMatchSnapshot();
  });

  test('getFontSizes', async () => {
    expect(await getFontSizes()).toMatchSnapshot();
  });
});
