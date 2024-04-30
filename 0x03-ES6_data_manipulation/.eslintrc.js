module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12, // Equivalent to ECMAScript 2021
    sourceType: "module",
  },
  rules: {
    "indent": ["error", 2], // Enforce 2-space indentation
    "quotes": ["error", "single"], // Prefer single quotes
    "semi": ["error", "always"], // Require semi-colons at the end of statements
    "no-console": "warn", // Warn if console.log is used
    "no-unused-vars": ["warn"], // Warn for unused variables
    "space-before-function-paren": ["error", "always"], // Enforce space before function parenthesis
  },
  plugins: ["jest"], // Adding Jest plugin to support Jest linting rules
};
