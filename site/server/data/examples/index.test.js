import * as examples from '.';

describe('Examples', () => {
  test('Basic Read', async () => {
    const example = await examples.getExample('example-1');
    expect(example.title === 'Example One').toBe(true);
  });
});
