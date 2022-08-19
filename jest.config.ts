import path from "path";

const config = {
  preset: "ts-jest",
  displayName: "cilent",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleDirectories: ["node_modules", path.join(__dirname, "src")],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy", // convert css modules to class names
    "\\.css$": require.resolve("./app/tests/style-mock.ts"),
  },
  collectCoverageFrom: [
    "**/app/**/*.ts",
    "**/app/**/*.tsx",
    "**/app/**/*.js",
    "**/app/**/*.jsx",
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  watchPlugins: ["jest-watch-select-projects"],
};

export default config;
