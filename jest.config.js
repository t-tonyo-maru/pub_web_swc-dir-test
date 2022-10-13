module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/ts/$1'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  moduleFileExtensions: ['js', 'tsx', 'ts', 'd.ts']
}
