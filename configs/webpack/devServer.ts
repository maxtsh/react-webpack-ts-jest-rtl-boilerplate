import type { Configuration } from "webpack-dev-server";

import resolvePath from "./path";

const devServer: Configuration = {
  open: true,
  port: 5000,
  hot: true,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" },
  static: {
    directory: resolvePath("public"),
  },
};

export default devServer;
