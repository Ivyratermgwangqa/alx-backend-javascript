module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Targeting the current version of Node.js
        },
        useBuiltIns: "usage", // Include polyfills only when needed
        core-js: 3, // Specifies the version of core-js for polyfills
        modules: false, // Retain ES6 module syntax
        loose: true, // Use "loose" transformations
      },
    ],
  ],
};
