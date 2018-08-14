import { uniqueArray } from './arrays';

describe('arrays', () => {
  test('uniqueArray', () => {
    const results = uniqueArray([1, 2, 2, 3]);
    expect(results).toEqual([1, 2, 3]);
  });
});
