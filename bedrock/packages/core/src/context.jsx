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
  borders: {
    color: colors.gray.light,
    radius: '0',
    style: 'solid',
    border: `${colors.gray.light} solid 1px`,
  },
  breakpoint: breakpoints,
  colors: {
    accentColor: colors.yellow.base,
    color: colors,
    type: typeColors,
    text: 'black',
    headings: 'black',
    primary: colors.blue.base,
    secondary: colors.green.base,
    neutral: colors.gray.base,
    neutral_light: colors.gray.xlight,
    xxlight: colors.gray.xxlight,
  },

  blockquote: {
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
  buttons: {
    border: 'none',
    cursor: 'pointer',
    height: '33px',
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
  header: {
    accentColor: colors.yellow.base,
    background: colors.blue.base,
    fontFamily: fontFamilies.avenir.medium,
  },
  sidebar: {
    accentColor: colors.yellow.base,
    background: '#f2f3f3',
  },
  footer: {
    background: colors.blue.base,
  },
  links: {
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
  fonts: {
    families: fontFamilies,
    sizes: {
      xxs: '11px',
      xs: '14px',
      s: '16px',
      m: '18px',
      body: '1rem',
    },
  },
  headings: {
    font_family: fontFamilies.avenir.medium,
    line_height: '1.25',
    margin: '0 0 1rem',
    h1: {
      base: '2.65rem',
      min_width_380: '3.25rem',
    },
    h2: {
      base: '1.65rem',
      min_width_380: '2.25rem',
    },
    h3: {
      base: '1.45rem',
      min_width_380: '1.75rem',
    },
    h4: {
      base: '1.25rem',
    },
    h5: {
      base: '1rem',
    },
    h6: {
      base: '0.875rem',
    },
  },
  eyebrow: {
    color: colors.gray.light,
    font_family: fontFamilies.avenir.medium,
  },
  paragraphs: {
    font_family: fontFamilies.avenir.medium,
    margin: '0 0 1.5rem',
  },
  lists: {
    margin: '0 0 1rem',
  },
  status: {
    successColor: colors.green.ghost,
    warningColor: colors.yellow.ghost,
    errorColor: colors.red.ghost,
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '50px',
    xxl: '64px',
  },
  input: {
    fontSize: '0.75rem',
    height: forms.height,
    border: `1px solid ${colors.gray.xlight}`,
    padding: '3px 8px',
  },
  select: {
    background: '#f2f3f3',
    border: '0',
    borderRadius: '0',
    fontSize: '1rem',
    height: forms.height,
    padding: '5px',
    margin: '0',
  },
  form: {
    border: `1px solid ${colors.gray.xlight}`,
    padding: '5px 8px',
    label: {
      color: colors.gray.dark,
      font_size: '12px',
    },
  },
  transition: {
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
