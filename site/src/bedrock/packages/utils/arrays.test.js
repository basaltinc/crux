import { uniqueArray, flattenArray, concatArrays } from './arrays';

describe('arrays', () => {
  test('uniqueArray', () => {
    const results = uniqueArray([1, 2, 2, 3]);
    expect(results).toEqual([1, 2, 3]);
  });
  test('flattenArray', () => {
    const results = flattenArray([[1, 2, 3], ['a', 'b', 'c']]);
    expect(results).toEqual([1, 2, 3, 'a', 'b', 'c']);
  });
  test('concatArrays', () => {
    const results = concatArrays([1, 2, 3], ['yes', 'ok', 'maybe']);
    expect(results).toEqual([1, 2, 3, 'yes', 'ok', 'maybe']);
  });
});
