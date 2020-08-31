"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: "./Scripts/Home/react/index.js",
    output: {
        path: path.resolve(__dirname, "./Scripts/dist/Home/react"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    // The `injectType`  option can be avoided because it is default behaviour
                    { loader: 'style-loader', options: { injectType: 'styleTag' } },
                    'css-loader',
                ]
            }

        ]
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};