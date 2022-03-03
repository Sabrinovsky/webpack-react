// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = async () => {
  return {
    verbose: true,
    moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest"
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
      '<rootDir>jest.js'
    ]
  };
};
