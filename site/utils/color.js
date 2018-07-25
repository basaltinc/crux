/**
 * Color Contrast
 * @param {string} hex - Color in hex format
 * @returns {string} - A hex of either white or black that will be readable on top of `hex` bg
 * @link https://codepen.io/davidhalford/pen/ywEva
 */
export function colorContrast(hex) {
  /*
  From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast

  Color brightness is determined by the following formula:
  ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000

  I know this could be more compact, but I think this is easier to read/explain.

  */

  const threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  function cutHex(hVal) {
    return hVal.charAt(0) === '#' ? hVal.substring(1, 7) : hVal;
  }
  function hexToR(hVal) {
    return parseInt(cutHex(hVal).substring(0, 2), 16);
  }
  function hexToG(hVal) {
    return parseInt(cutHex(hVal).substring(2, 4), 16);
  }
  function hexToB(hVal) {
    return parseInt(cutHex(hVal).substring(4, 6), 16);
  }

  const hRed = hexToR(hex);
  const hGreen = hexToG(hex);
  const hBlue = hexToB(hex);

  const cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return '#000000';
  }
  return '#ffffff';
}

/**
 * Convert RGB to hex
 * @param {string} rgb - color
 * @returns {string} - rgb as hex color
 * @link http://stackoverflow.com/questions/1740700/get-hex-value-rather-than-rgb-value-using-jquery
 */
export function rgb2hex(rgb) {
  if (rgb.search('rgb') === -1) {
    return rgb;
  }

  const rgbValue = rgb.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/,
  );

  function hex(x) {
    return (0 + parseInt(x, 10).toString(16)).slice(-2);
  }

  return `#${hex(rgbValue[1])}${hex(rgbValue[2])}${hex(rgbValue[3])}`;
}
