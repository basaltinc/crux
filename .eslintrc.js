// rule reference: http://eslint.org/docs/rules
// individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
module.exports = {
  extends: "airbnb",
  globals: {
    document: true,
    window: true,
  },
  rules: {
    // 'no-comma-dangle': [0],
    'import/no-extraneous-dependencies': [0],
    'strict': [0],
    'no-param-reassign': [1, {
      props: false,
    }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
    'consistent-return': [0],
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true,
    }],
    'no-console': [0],
  }
};
