const config = {
  "transformIgnorePatterns": [
    "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
  ],
  "setupFilesAfterEnv": ['<rootDir>/src/setupTests.ts']
};

module.exports = config;
