const {
  getColors,
  getTransitions,
  getBreakpoints,
  getDeviceWidths,
  getReleaseNotes,
  getSpacings,
  getFontFamilies,
  getFontSizes,
} = require('./index');

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

  test('ReleaseNotes', async () => {
    const results = await getReleaseNotes();
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
