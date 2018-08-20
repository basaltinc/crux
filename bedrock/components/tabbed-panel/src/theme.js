const typeColors = {
  icon: {
    base: '--type-color--icon',
    accent: '--type-color--icon-accent',
  },
  component: {
    base: '--type-color--component',
    accent: '--type-color--component-accent',
  },
  typography: {
    base: '--type-color--typography',
    accent: '--type-color--typography-accent',
  },
  layout: {
    base: '--type-color--layout',
    accent: '--type-color--layout-accent',
  },
  color: {
    base: '--type-color--color',
    accent: '--type-color--color-accent',
  },
  none: {
    base: '--type-color--none',
    accent: '--type-color--none-accent',
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
