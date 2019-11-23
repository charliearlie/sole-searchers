module.exports = {
  collectCoverageFrom: [
    '**/components/**/*.jsx',
    '**/context/**/*',
    '**/hooks/**/*',
    '**/services/**/*',
  ],
  moduleDirectories: ['node_modules'],
  rootDir: '.',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
