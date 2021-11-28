module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test/unit'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts?$': 'esbuild-jest',
  },
};
