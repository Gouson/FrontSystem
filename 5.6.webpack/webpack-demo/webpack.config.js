const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'
    },
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Gouson',
        filename: 'index.html',
        template: 'src/assets/template.html'
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, ]
    }
};