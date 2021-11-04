const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
// https://www.youtube.com/watch?v=m8Djyz13zXQ (workbox tutorial)

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        libraryTarget: 'var',
        library: 'Client',
    },
    devServer: {
        compress: true,
        port: 9000,
      },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            dry: true,// Simulate the removal of files
            verbose: true,// Write Logs to Console
            cleanStaleWebpackAssets: true,// Automatically remove all unused webpack assets on rebuild
            protectWebpackAssets: false,
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
}
