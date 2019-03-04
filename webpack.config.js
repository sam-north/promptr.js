const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/ts/index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].[chunkhash:8].js"
    },
    plugins: [new htmlWebpackPlugin({
        title: 'Promptr',
        filename: 'index.html',
        template: './src/html/index.html'
    })],
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}