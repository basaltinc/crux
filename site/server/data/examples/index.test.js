import { getExample, getExamples } from '.';

describe('Examples', () => {
  test('Basic Read', async () => {
    const example = await getExample('example-1');
    expect(example.title === 'Example One').toBe(true);
  });

  test('Get All', async () => {
    const examples = await getExamples();
    expect(examples.length > 0).toBe(true);
  });
});
