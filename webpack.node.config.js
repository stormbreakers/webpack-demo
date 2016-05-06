var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    name: 'server',
    target: 'node',
    entry: './app/server.js',
    output: {
        path: __dirname,
        publicPath: __dirname,
        filename: 'index.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test:  /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};