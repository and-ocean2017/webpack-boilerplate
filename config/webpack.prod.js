const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const paths = require("./paths");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "bundle.[contenthash].js",
    path: paths.build,
  },
});
