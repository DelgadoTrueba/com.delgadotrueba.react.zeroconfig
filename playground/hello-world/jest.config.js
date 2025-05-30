module.exports = {
    displayName: 'hello-world',
    preset: '@delgadotrueba/react-config/jest/preset/dom',
    setupFilesAfterEnv: ["<rootDir>/src/utils-test/setupTest.ts"],
    transform: {
      '^.+\\.[tj]sx?$': [
        'ts-jest',
        { tsconfig: '<rootDir>/tsconfig.spec.json' },
      ],
    },
    coverageDirectory: './coverage',
  };