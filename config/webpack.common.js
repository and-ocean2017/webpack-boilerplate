const loader = require("sass-loader");
const paths = require("./paths");

module.exports = {
  mode: "production",

  entry: paths.src + "/index.js",

  output: {
    filename: "bundle.js",
    path: paths.build,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
