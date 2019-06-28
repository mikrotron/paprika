/* eslint-disable jsx-a11y/href-no-hash */
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff|woff2)$/i,
        loader: "file-loader",
      },
      {
        test: /\.stories\.[tj]sx?$/,
        use: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: { injectParameters: true },
          },
        ],
        include: [path.resolve(__dirname, "../src")],
        enforce: "pre",
      },
    ],
  },
  resolve: {
    alias: {
      storybook: path.resolve("./.storybook/"),
    },
  },
};
