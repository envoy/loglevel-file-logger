module.exports = {
  verbose: true,
  preset: 'react-native',
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  setupFiles: ['./jest/setup.js'],
  cacheDirectory: '.jest/cache'
}
