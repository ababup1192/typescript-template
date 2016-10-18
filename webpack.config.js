var path = require("path");

var config = {
  entry: "./src/script/index.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".js"]
  },
  module: {
    loaders: [
    {
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/
    },
    ]
  }
};

module.exports = config;
