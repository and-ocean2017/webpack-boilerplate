const common = require("./webpack.common");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge").merge;
const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",

  output: {
    filename: "[name].bundle.js",
    path: paths.build,
  },

  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },

  devServer: {
    // To set the index html file
    // index: "html_nodes_prototype/html_nodes_prototype.html",
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "html_nodes_prototype/html_nodes_prototype.html",
      title: "HTML Nodes",
      hot: true,
      template: "src/apps/html_nodes_prototype/index.html",
      chunks: ["html_nodes_prototype", "vendor"],
    }),
    new HtmlWebpackPlugin({
      filename: "second_app/second_app.html",
      title: "Second app",
      hot: true,
      template: "src/apps/second_app/index.html",
      chunks: ["second_app", "vendor"],
    }),
  ],
});
