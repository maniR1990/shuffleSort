const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'sort shuffle',
    template: './src/index.html'
  })],
};
