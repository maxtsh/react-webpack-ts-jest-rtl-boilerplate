import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import resolvePath from "./path";
import alias from "./alias";
import rules from "./rules";
import plugins from "./plugins";
import devServer from "./devServer";
import devtool from "./devtool";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isProduction = process.env.NODE_ENV === "production";

const context = resolvePath();

const publicPath = process.env.PUBLIC_PATH || "/";

const extensions = [
  "*",
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".css",
  ".scss",
  ".png",
  ".svg",
];

const config: Configuration = {
  resolve: { extensions, alias },
  mode: isProduction ? "production" : "development",
  target: isProduction ? "browserslist" : "web",
  entry: [resolvePath("app/index.tsx")],
  output: {
    filename: "[name].[contenthash].js",
    path: resolvePath("build"),
    publicPath,
    chunkFilename: "[name].[id].[contenthash].js",
  },
  module: { rules },
  plugins,
  devServer,
  devtool,
  context,
  optimization: {
    emitOnErrors: true,
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     extractComments: false,
    //     parallel: true,
    //     terserOptions: {
    //       // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
    //     },
    //   }),
    // ],
  },
  performance: {
    hints: false,
  },
};

export default config;
