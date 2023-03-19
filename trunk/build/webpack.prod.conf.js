const path = require("path");
const merge = require("webpack-merge");

const I18nPlugin = require("i18n-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");

const common = require("./webpack.base.conf");
const utils = require("./utils");

// const localeConfig = utils.getLocales();
const localeConfig = require("../src/locales/en.json");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(`./public`),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      lang: "en",
      filename: "index.html",
      template: "./src/views/index.html",
      favicon: "./src/images/favicon.ico",
      locales: [],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new I18nPlugin(localeConfig, {
      functionName: "t",
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: "My money",
      short_name: "My money",
      theme_color: "#000000",
      background_color: "#000000",
      display: "standalone",
      orientation: "portrait",
      start_url: ".",
      publicPath: './',
      icons: [
        {
          src: path.resolve("src/images/money.png"),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          ios: true,
          destination: path.join("icons"),
        },
        {
          src: path.resolve("src/images/money.png"),
          size: "1024x1024", // you can also use the specifications pattern
          ios: "startup",
          destination: path.join("icons"),
        },
        {
          src: path.resolve("src/images/money.png"),
          size: "1024x1024",
          purpose: "maskable",
          destination: path.join("icons"),
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
