import { getColors } from './colors';

describe('Data Get Functions', () => {
  test('Colors', async () => {
    expect(await getColors()).toMatchSnapshot();
    expect(await getColors('rgb')).toMatchSnapshot();
    expect(await getColors('hex')).toMatchSnapshot();
  });
});
