var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: "./index.js",
    output: {
        path:__dirname+ '/public/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                loaders: ['babel-loader']
            },
            {
                test: /(\.css)$/, 
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }

};