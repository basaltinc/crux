import React from 'react';
import PropTypes from 'prop-types';

export const breakpoints = {
  xsmall: '380px',
  small: '450px',
  medium: '700px',
  large: '900px',
  xlarge: '1100px',
  xxlarge: '1300px',
  xxxlarge: '1600px',
};

export const typeColors = {
  icon: {
    base: '#536dfe',
    accent: '#e2e7ff',
  },
  component: {
    base: '#16394B',
    accent: '#CFE3DE',
  },
  typography: {
    base: '#16394B',
    accent: '#CFE3DE',
  },
  layout: {
    base: '#FFA000',
    accent: '#fff5e6',
  },
  color: {
    base: '#00695c',
    accent: '#d0f3ee',
  },
  none: {
    base: '#000',
    accent: '#e0e0e0',
  },
};

/**
 * Get Type Color
 * @param {string} type - A color type
 * @param {string} [subtype=base] - A subtype
 * @returns {string} - A CSS var name
 */
export function getTypeColor(type, subtype = 'base') {
  return typeColors[type][subtype];
}

export const colors = {
  blue: {
    base: 'hsl(200, 55%, 19%)',
    light: 'hsl(200, 55%, 45%)',
    xlight: 'hsl(165, 26%, 85%)',
  },
  green: {
    base: 'hsl(159, 20%, 17%)',
    ghost: 'hsl(120, 100%, 25%)',
  },
  yellow: {
    base: 'hsl(52, 74%, 54%)',
    ghost: 'hsl(30, 100%, 50%)',
  },
  gray: {
    dark: 'hsl(0, 0%, 50%)',
    base: 'hsl(240, 3%, 85%)',
    light: 'hsl(0, 0%, 60%)',
    xlight: 'hsl(0, 0%, 80%)',
    xxlight: 'hsl(0, 0%, 95%)',
  },
  red: {
    ghost: 'hsl(0, 100%, 50%)',
  },
};

export const fontFamilies = {
  avenir: {
    light: 'AvenirLight, Helvetica, sans-serif',
    medium: 'AvenirMedium, Helvetica, sans-serif',
  },
};

export const forms = {
  height: '33px',
};

export const baseTheme = {
  blockquotes: {
    border: `1px solid ${colors.gray.xlight}`,
    borderLeft: `3px solid ${colors.gray.xlight}`,
    margin: '2rem',
    padding: '2.25rem 4rem',
    citation: {
      color: colors.gray.light,
      fontSize: '0.8rem',
      margin: '0.5rem 0 0',
    },
    glyph: {
      color: colors.gray.light,
      fontFamily: 'Georgia, serif',
      opacity: 0.2,
      size: '130px',
      width: '80px',
    },
  },
  body: {
    color: 'black',
    fontFamily: fontFamilies.avenir.light,
    fontSize: '1rem',
    lineHeight: '1.5',
    margin: '0',
    padding: '0',
  },
  buttons: {
    border: 'none',
    cursor: 'pointer',
    height: forms.height,
    fontSize: '0.75rem',
    primary: {
      color: 'white',
      background: colors.blue.base,
    },
    secondary: {
      color: 'black',
      background: '#f2f3f3',
    },
  },
  details: {
    borderTop: `solid 1px ${colors.gray.dark}`,
    borderBottom: `solid 1px ${colors.gray.dark}`,
    margin: '0 0 10px',
    padding: '7px 0',
    summary: {
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
  },
  eyebrows: {
    color: colors.gray.light,
    fontFamily: fontFamilies.avenir.medium,
    fontSize: '1rem',
  },
  footer: {
    background: colors.blue.base,
  },
  globals: {
    borders: {
      color: colors.gray.light,
      radius: '0',
      style: 'solid',
      border: `${colors.gray.light} solid 1px`,
    },
    boxSizing: 'border-box',
    breakpoints,
    colors: {
      accent: colors.yellow.base,
      active: colors.yellow.base,
      primary: colors.blue.base,
      secondary: colors.green.base,
      success: colors.green.base,
      warning: colors.yellow.base,
      error: colors.red.ghost,
      info: colors.blue.light,
      ghost: colors.blue.xlight,
      neutral: colors.gray.base,
      neutralLight: colors.gray.xlight,
      neutralXLight: colors.gray.xxlight,
      neutralDark: colors.gray.xlight,
      neutralXDark: colors.gray.xlight,
    },
    fontSize: '18px',
    fonts: fontFamilies,
    spacing: {
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '32px',
      xl: '50px',
      xxl: '64px',
    },
  },
  header: {
    accentColor: colors.yellow.base,
    background: colors.blue.base,
    fontFamily: fontFamilies.avenir.medium,
  },
  headings: {
    h1: {
      color: colors.blue.base,
      fontSize: '2.65rem',
      fontFamily: fontFamilies.avenir.medium,
      lineHeight: '1.25',
      margin: '0 0 1rem',
    },
    h2: {
      color: colors.blue.base,
      fontSize: '1.65rem',
      fontFamily: fontFamilies.avenir.medium,
      lineHeight: '1.25',
      margin: '0 0 1rem',
    },
    h3: {
      color: colors.blue.base,
      fontSize: '1.45rem',
      fontFamily: fontFamilies.avenir.medium,
      lineHeight: '1.25',
      margin: '0 0 1rem',
    },
    h4: {
      color: colors.blue.base,
      fontSize: '1.25rem',
      fontFamily: fontFamilies.avenir.medium,
      lineHeight: '1.25',
      margin: '0 0 1rem',
    },
    h5: {
      color: colors.blue.base,
      fontSize: '1rem',
      fontFamily: fontFamilies.avenir.medium,
      lineHeight: '1.25',
      margin: '0 0 1rem',
    },
    h6: {
      color: colors.blue.base,
      fontSize: '0.875rem',
      fontFamily: fontFamilies.avenir.medium,
      lineHeight: '1.25',
      margin: '0 0 1rem',
    },
  },
  inputs: {
    fontSize: '0.75rem',
    height: forms.height,
    border: `1px solid ${colors.gray.xlight}`,
    padding: '3px 8px',
  },
  links: {
    fontFamily: fontFamilies.avenir.medium,
    color: colors.blue.base,
    textDecoration: 'none',
    hover: {
      color: colors.blue.base,
      textDecoration: 'underline',
    },
    visited: {
      color: colors.blue.base,
      textDecoration: 'underline',
    },
  },
  lists: {
    margin: '0 0 1rem',
  },
  labels: {
    color: colors.gray.dark,
    fontSize: '12px',
    fontWeight: 'bold',
  },
  paragraphs: {
    color: 'black',
    lineHeight: '1.5',
    fontFamily: fontFamilies.avenir.medium,
    fontSize: '1rem',
    margin: '0 0 1.5rem',
  },
  selects: {
    background: '#f2f3f3',
    border: '0',
    borderRadius: '0',
    fontSize: '1rem',
    height: forms.height,
    padding: '5px',
    margin: '0',
  },
  sidebar: {
    accentColor: colors.yellow.base,
    background: '#f2f3f3',
  },
  statuses: {
    successColor: colors.green.ghost,
    warningColor: colors.yellow.ghost,
    errorColor: colors.red.ghost,
  },
  transitions: {
    all: 'all 0.3s ease-in-out',
    speed_and_function: '0.3s ease-in-out',
    speed: '0.3s',
    function: 'ease-in-out',
  },
};

export const baseContext = {
  theme: baseTheme,
  settings: {
    site: {
      title: 'Bedrock',
    },
  },
};

export const {
  Provider: BedrockContextProvider,
  Consumer: BedrockContextConsumer,
} = React.createContext(baseContext);

export function connectToContext(Component) {
  return props => (
    <BedrockContextConsumer>
      {context => <Component {...props} context={context} />}
    </BedrockContextConsumer>
  );
}

export const contextPropTypes = PropTypes.shape({
  theme: PropTypes.object.isRequired,
});
