const blue = {
  base: {
    value: '#264653',
  },
  light: {
    value: '#4ECDC4',
  },
};

const green = {
  base: {
    value: '#1E728C',
  },
  light: {
    value: '#C9EFCD',
  },
};

const gray = {
  iron: {
    value: '#D8D8DA',
  },
  light: {
    value: '#D9D9D9',
  },
  lighter: {
    value: '#F2F2F2',
  },
  dark: {
    value: '#666666',
  },
  darker: {
    value: '#333333',
  },
  darkest: {
    value: '#292929',
  },
};

const yellow = {
  value: '#D4CB02',
};

const white = {
  value: '#FFFFFF',
};

const black = {
  value: '#000000',
};

const primary = {
  value: '{color.blue.base.value}',
};

const secondary = {
  value: '{color.yellow.value}',
};

module.exports = {
  color: {
    // Core color values,
    blue,
    green,
    gray,
    yellow,
    white,
    black,
    primary,
    secondary,
  },
};
