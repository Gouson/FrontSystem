const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
            test: /\.scss$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                        implementation: require("dart-sass")
                    }
                },
            ],
        }, {
            test: /\.less$/,
            loader: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.styl$/,
            loader: [
                'style-loader',
                'css-loader',
                'stylus-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: [
                'file-loader'
            ]
        }],
    },
};