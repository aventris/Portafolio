const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  target: "web",
  devServer: {
    port: 3005,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    hot: true,
    liveReload: true,
    historyApiFallback: true, //Enable history navigation (so it doen't crash when user refresh page)
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@components": path.resolve(__dirname, "src/components"),
      "@demo": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/", // Ignore every file in node_modules folder
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", //Create style ndes from JS string
          "css-loader", // Translate CSS into Commun JS
          "sass-loader", //Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
