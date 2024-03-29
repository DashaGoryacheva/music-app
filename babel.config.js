module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],

  env: {
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};
