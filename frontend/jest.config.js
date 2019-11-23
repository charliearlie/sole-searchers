module.exports = {
  moduleDirectories: ['node_modules'],
  rootDir: '.',
  setupTestFrameworkScriptFile: '<rootDir>/test-setup.js',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
