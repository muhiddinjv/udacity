const path = require('path');
const html = require('html-webpack-plugin');
const workbox = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: join.path(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    plugins: [
        new html({
            template:'./src/dev.html',
            filename: 'index.html'
        }),
        new workbox.GenerateSW({
            swDest:'sw.js',
            skipWaiting:true,
            clientsClaim:true,
        }),
    ]
}