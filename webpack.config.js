const path = require('path');
const webpack = require('webpack');
require("@babel/polyfill");


process.env.NODE_ENV = process.env.NODE_ENV || 'development';


if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}


module.exports = (env) => {
  const isProduction = env === 'production';
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');


  return {
    mode: isProduction? 'production' : 'development',
    entry: ["@babel/polyfill", './src/app.js'],   
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // hot module reload only in dev
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ]},
        {
          test: /\.(jpg|jpeg|gif|png|ico)$/,
          exclude: /node_modules/,
          loader:'file-loader'
       }       
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css', // force a 'styles.css' output with everything inside of it...
        ignoreOrder: false, // Enable to remove warnings about conflicting order
     })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};
