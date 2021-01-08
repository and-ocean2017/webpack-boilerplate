const common = require("./webpack.common");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge").merge;

const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name]/[name].bundle.js",
    path: paths.build,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
});
