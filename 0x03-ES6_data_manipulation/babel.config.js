module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
        useBuiltIns: "usage",
        core-js: 3,
      },
    ],
  ],
};
