const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Gouson',
        filename: 'assets/gousonIndex.html',
        template: 'src/assets/template.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ]
    }
};