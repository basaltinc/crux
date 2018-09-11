import React from 'react';
import PropTypes from 'prop-types';

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
    accent: '#e3dfcc',
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
    light: 'hsl(165, 26%, 85%)',
  },
  green: {
    base: 'hsl(159, 20%, 17%)',
  },
  yellow: {
    base: 'hsl(52, 74%, 54%)',
  },
  gray: {
    dark: 'hsl(0, 0%, 40%)',
    base: 'hsl(240, 3%, 85%)',
    light: 'hsl(0, 0%, 60%)',
    xlight: 'hsl(0, 0%, 80%)',
    xxlight: 'hsl(0, 0%, 95%)',
  },
  status: {
    success: 'hsl(120, 100%, 25%)',
    warning: 'hsl(30, 100%, 50%)',
    error: 'hsl(0, 100%, 50%)',
  },
};

export const baseTheme = {
  colors: {
    color: colors,
    type: typeColors,
    text: 'black',
    headings: 'black',
    primary: colors.blue.base,
    secondary: colors.green.base,
    neutral: colors.gray.base,
    'neutral-light': colors.gray.xlight,
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
  form: {
    border: `1px solid ${colors.gray.xlight}`,
    padding: '5px 8px',
    label: {
      color: colors.gray.dark,
      'font-size': '13.5px',
    },
    input: {
      'font-size': '0.75rem',
      height: '33px',
      'border-none': 0,
      border: `1px solid ${colors.gray.xlight}`,
      padding: '3px 8px',
    },
    select: {
      padding: '5px',
    },
  },
  border: {
    color: colors.gray.light,
    radius: '0',
  },
  global: {
    'box-sizing': 'border-box',
  },
  blockquote: {
    border: `1px solid ${colors.gray.xlight}`,
    'border-left': `6px solid ${colors.blue.base}`,
    padding: '2.25rem 4rem',
    margin: '2rem 2.25rem',
    glyph: {
      width: '80px',
      font: 'Georgia, serif',
      size: '130px',
      opacity: 0.2,
      color: colors.gray.light,
    },
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
