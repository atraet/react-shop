var HtmlWebpackPlugin = require('html-webpack-plugin');
var rootDir = __dirname;
var srcDir = rootDir + "/src";
var distDir = rootDir + "/build";

module.exports = {
    entry: {
        app: [srcDir + '/index.js']
    },
    output: {
        path: distDir,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!' + 'css?sourceMap'
            },
            {
                test: /\.scss$/,
                loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(json)$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home page',
            fileName: 'index.html', // relative path from "output" directory,
            template: srcDir + '/index.html' // source file
        })],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};