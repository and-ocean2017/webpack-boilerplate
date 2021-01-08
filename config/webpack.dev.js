const common = require("./webpack.common");
const merge = require("webpack-merge").merge;

const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "bundle.js",
    path: paths.build,
  },

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
});
