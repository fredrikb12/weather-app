const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    apiCalls: "./src/apiCalls.js",
    weatherInfo: "./src/weatherInfo.js",
    searchForm: "./src/searchForm.js",
    displayData: "./src/displayData.js",
  },
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({ title: "Weather App" })],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
