export default {
  testEnvironment: "jest-environment-jsdom", // <- updated
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions:["js", "jsx"],
};