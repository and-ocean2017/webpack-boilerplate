const common = require("./webpack.common");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const paths = require("./paths");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "[name]/[name].[contenthash].bundle.js",
    path: paths.build,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        // Extract css into separate files
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]/[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
});
