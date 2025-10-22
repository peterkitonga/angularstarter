module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
  collectCoverageFrom: ['src/**/*.{js,ts}', '!src/main.ts', '!src/environments/**/*.ts', '!src/app/app.config.ts'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 70,
      lines: 25,
      statements: 25,
    },
  },
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage/jest',
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
    '@tests/(.*)$': '<rootDir>/tests/$1',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|@angular|@ng-bootstrap|@ngrx|ngx-socket-io)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
