import { getExample, getExamples } from '.';

describe('Examples', () => {
  test('Basic Read', async () => {
    const example = await getExample('example-1');
    expect(example.title === 'Example One').toBe(true);
  });

  test('all', async () => {
    const examples = await getExamples();
    console.log(examples);
    expect(true).toBe(true);
  });
});
