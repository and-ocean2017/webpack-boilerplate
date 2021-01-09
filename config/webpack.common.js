const paths = require("./paths");

module.exports = {
  mode: "development",

  entry: {
    html_nodes_prototype: paths.src + "/apps/html_nodes_prototype/main.js",
    second_app: paths.src + "/apps/second_app/main.js",
    vendor: paths.src + "/apps/_vendor/vendor.js",
  },

  module: {
    rules: [{ test: /\.m?js$/, use: ["babel-loader"] }],
  },
};
