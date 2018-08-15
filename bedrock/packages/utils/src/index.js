/** @module utils */

export * from './color';
export * from './arrays';

/**
 * Get Random Integer
 * @param {number} max - Highest number
 * @returns {number} - A random integer
 */
export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
