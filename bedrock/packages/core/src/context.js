import React from 'react';

export const colors = {
  blue: {
    base: 'hsl(200, 55%, 19%)',
    light: 'hsl(165, 26%, 85%)',
  },
  green: {
    base: 'hsl(159, 20%, 17%)',
  },
  yellow: {
    base: 'hsl(52, 74%, 54%)',
  },
  gray: {
    base: 'hsl(240, 3%, 85%)',
    light: 'hsl(0, 0%, 60%)',
    dark: 'hsl(0, 0%, 40%)',
  },
};

export const baseTheme = {
  colors: {
    text: 'black',
    headings: 'black',
    primary: colors.blue.base,
    secondary: colors.green.base,
    neutral: colors.gray.base,
    borders: colors.gray.light,
    link: {
      base: colors.blue.base,
      hover: colors.blue.light,
    },
  },
  fonts: {
    sizes: {
      m: '18px',
    },
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
};

export const baseContext = {
  theme: baseTheme,
};

export const {
  Provider: BedrockContextProvider,
  Consumer: BedrockContextConsumer,
} = React.createContext(baseContext);
