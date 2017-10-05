// enable all logger while running tests
var log = require('loglevel')
log.enableAll()

// ref: https://github.com/facebook/jest/issues/2208#issuecomment-264733133
// we fix a problem of React Native's jest mocking doesn't include latest
// Linking methods here
jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn()
  }
})

// ref: https://github.com/wkh237/react-native-fetch-blob/issues/212#issuecomment-308182094
jest.mock('react-native-fetch-blob', () => {
  return {
    DocumentDir: () => {},
    polyfill: () => {}
  }
})
