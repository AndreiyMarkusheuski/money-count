const path = require("path");
const merge = require("webpack-merge");

const I18nPlugin = require('i18n-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.base.conf');
const localeConfig = require('../src/locales/ru.json');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: '[name].js',
        path: path.resolve(`./public`)
    },
    devServer: {
        port: 8080,
        compress: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            lang: 'ru',
            filename: 'index.html',
            template: './src/views/index.html',
            favicon: './src/images/favicon.ico',
            locales: []
        }),
        new I18nPlugin(localeConfig, {
            functionName: 't'
        })
    ]
});
