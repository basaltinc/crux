/**
 * Flatten Array
 * @param {Array[]} arrayOfArrays - Array of Arrays to flatten
 * @returns {Array} - Flattened array
 */
export function flattenArray(arrayOfArrays) {
  return [].concat(...arrayOfArrays);
}

/**
 * Concat Arrays together
 * @param {Array} a - First Array
 * @param {Array} b - Second Array
 * @returns {Array} - The two arrays together.
 */
export function concatArrays(a, b) {
  return [].concat(a, b);
}

/**
 * Make an array unique by removing duplicate entries.
 * @param {Array} item - Array to make unique
 * @returns {Array} - A unique array
 */
export function uniqueArray(item) {
  const u = {};
  const newArray = [];
  for (let i = 0, l = item.length; i < l; ++i) {
    if (!{}.hasOwnProperty.call(u, item[i])) {
      newArray.push(item[i]);
      u[item[i]] = 1;
    }
  }
  return newArray;
}
