const isProduction = process.env.NODE_ENV === "production";
const output = {
  production: {
    clean: true,
    filename: "[name].[contenthash].bundle.js",
    chunkFilename: "[name].[contenthash].chunk.js",
  },
  development: { filename: "[name].js", chunkFilename: "[name].chunk.js" },
};
export default isProduction ? output.production : output.development;
