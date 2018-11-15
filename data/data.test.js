const {
  getColors,
  getTransitions,
  getBreakpoints,
  getSpacings,
  getTypography,
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

  test('getSpacings', async () => {
    expect(await getSpacings()).toMatchSnapshot();
  });

  test('getTypography', async () => {
    expect(await getTypography()).toMatchSnapshot();
  });
});
