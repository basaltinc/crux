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
  base: {
    value: '#D4CB02',
  },
};

const white = {
  base: {
    value: '#FFFFFF',
  },
};

const black = {
  base: {
    value: '#000000',
  },
};

const primary = {
  base: {
    value: '{color.blue.base.value}',
  },
};

const secondary = {
  base: {
    value: '{color.yellow.base.value}',
  },
};

const text = {
  blue: {
    value: '{color.blue.base.value}',
  },
  light_blue: {
    value: '{color.blue.light.value}',
  },
  green: {
    value: '{color.green.base.value}',
  },
  light_green: {
    value: '{color.green.light.value}',
  },
  dark_gray: {
    value: '{color.gray.dark.value}',
  },
  darker_gray: {
    value: '{color.gray.darker.value}',
  },
  darkest_gray: {
    value: '{color.gray.darkest.value}',
  },
  black: {
    value: '{color.black.base.value}',
  },
  yellow: {
    value: '{color.yellow.base.value}',
  },
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
    text,
  },
};
