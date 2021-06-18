const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules:[
        {
            test: /\.m?js$/, //UTILIZA CUALQUIER EXTENSION QUE SEA MJS O JS
            exclude: /node_modules/,
            use: {
                    loader: 'babel-loader'
                }
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 
            'css-loader'
        ],
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
  inject: 'body', // default true ... true || 'head' || 'body' || false
      template:"/public/index.html",
  filename: './index.html' // default index.html
    }),
    new MiniCssExtractPlugin(),
  ],

}