module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  modulePaths: ['<rootDir>/src'],
  modulePathIgnorePatterns: ['<rootDir>/src/templates/'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@interfaces/(.*)': '<rootDir>/src/interfaces/$1',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen',
};
