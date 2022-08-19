import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import html from "./html";

process.env.PUBLIC_PATH = process.env.PUBLIC_PATH || "/";

const productionSettings =
  process.env.NODE_ENV === "production"
    ? {
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }
    : {};

const client: webpack.WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({
    templateContent: html(),
    hash: true,
    ...productionSettings,
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css",
  }) as unknown as webpack.WebpackPluginInstance,
];
if (process.env.NODE_ENV === "production") {
  client.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    })
  );
} else {
  client.push(
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  );
}

export default client;
