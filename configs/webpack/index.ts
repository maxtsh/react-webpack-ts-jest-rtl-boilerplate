import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import resolvePath from "./path";
import alias from "./alias";
import rules from "./rules";
import plugins from "./plugins";
import devServer from "./devServer";
import devtool from "./devtool";
import output from "./output";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isProduction = process.env.NODE_ENV === "production";

const context = resolvePath();

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
    path: resolvePath("build"),
    publicPath: process.env.PUBLIC_PATH || "/",
    ...output,
  },
  module: { rules },
  plugins,
  devServer,
  devtool,
  context,
  optimization: {
    emitOnErrors: true,
    splitChunks: isProduction
      ? {
          chunks: "all",
        }
      : false,
    minimize: isProduction ? true : false,
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
    hints: isProduction ? "warning" : false,
  },
};

export default config;
