module.exports = {
  setupFiles: ['<rootDir>/jest.init.js'],
  testPathIgnorePatterns: ['node_modules', 'vendor', 'public2', 'dist'],
  transform: {
    '^.+\\.jsx$': 'babel-7-jest',
    '^.+\\.js$': 'babel-7-jest',
  },
  verbose: true,
};
