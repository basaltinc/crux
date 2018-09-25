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
  },
  yellow: {
    base: 'hsl(52, 74%, 54%)',
  },
  gray: {
    dark: 'hsl(0, 0%, 50%)',
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

export const fontFamilies = {
  avenir: {
    light: 'AvenirLight, Helvetica, sans-serif',
    medium: 'AvenirMedium, Helvetica, sans-serif',
  },
};

export const baseTheme = {
  breakpoint: breakpoints,
  colors: {
    color: colors,
    type: typeColors,
    text: 'black',
    headings: 'black',
    eyebrows: colors.gray.dark,
    primary: colors.blue.base,
    secondary: colors.green.base,
    neutral: colors.gray.base,
    neutral_light: colors.gray.xlight,
    xxlight: colors.gray.xxlight,
    borders: colors.gray.light,
  },
  header: {
    background: colors.blue.base,
    fontFamily: fontFamilies.avenir.medium,
    accentColor: colors.yellow.base,
  },
  sidebar: {
    background: '#f2f3f3',
    accentColor: colors.yellow.base,
  },
  footer: {
    background: colors.blue.base,
  },
  links: {
    color: {
      base: colors.blue.base,
      hover: colors.blue.light,
    },
    decoration: {
      base: 'underline',
      hover: 'underline',
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
  paragraphs: {
    margin: '0 0 1.5rem',
  },
  lists: {
    margin: '0 0 1rem',
  },
  spacing: {
    xs: '4px',
    s: '8px',
    m: '16px',
    l: '32px',
    xl: '50px',
    xxl: '64px',
  },
  form: {
    border: `1px solid ${colors.gray.xlight}`,
    padding: '5px 8px',
    label: {
      color: colors.gray.dark,
      font_size: '12px',
    },
    input: {
      font_size: '0.75rem',
      height: '33px',
      border_none: 0,
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
  blockquote: {
    border_left: `3px solid ${colors.gray.xlight}`,
    padding: '1rem 2rem',
    margin: '2rem auto 2rem 2rem',
    styled: {
      border: `1px solid ${colors.gray.xlight}`,
      border_left: `6px solid ${colors.blue.base}`,
      padding: '2.25rem 4rem',
      margin: '2rem',
      glyph: {
        width: '80px',
        font: 'Georgia, serif',
        size: '130px',
        opacity: 0.2,
        color: colors.gray.light,
      },
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
